import os, argparse
import cv2, spacy, numpy as np
from keras.optimizers import SGD
from sklearn.externals import joblib
import uvicorn 
from fastapi import FastAPI
from pydantic import BaseModel

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
from keras import backend as K
K.set_image_data_format('channels_first')
K.set_image_dim_ordering('th')


'''method to featurize the inputed question'''
def questionFeatures(question):
    ''' a 300 dimension representation
    calculated using Glove Vector for each word in a question'''
    wordVectorizing = spacy.load('en_vectors_web_lg')
    #wordVectorizing = spacy.load('en', vectors='en_glove_cc_300_1m_vectors')
    wordTokens = wordVectorizing(question)
    #print(len(wordTokens))
    tokenizedQuestion = np.zeros((1, 30, 300))
    for j in range(len(wordTokens)):
        #print(tokens[j].vector)
        #print(question_tensor[0,j,:])
        tokenizedQuestion[0,j,:] = wordTokens[j].vector
    return tokenizedQuestion


'''method to initialize the VGG-16 CNN'''
def imageModel(CNNWeightsFile):
    #Calling the CNN weight file
    from models.CNN.VGG import VGG_16
    #returns the updated model with the weights
    CNNModel = VGG_16(CNNWeightsFile)
    sgdCaller = SGD(lr=0.1, decay=1e-6, momentum=0.9, nesterov=True)
    CNNModel.compile(optimizer=sgdCaller, loss='categorical_crossentropy')
    return CNNModel


'''method to featurize the inputed images'''
def imageFeatures(image, CNNWeightsFile):
    #creating the 1, 4096 dimension vector
    imgFeatures = np.zeros((1, 4096))
    #image resizing as VGG-16 trained image size
    img = cv2.resize(cv2.imread(image), (224, 224))
    #calling mean pixel values as trained 
    mean_pixel = [103.939, 116.779, 123.68]
    
    img = img.astype(np.float32, copy=False)
    for i in range(3):
        img[:, :, i] = img[:, :, i] - mean_pixel[i]
    # convert the image to RGBA
    img = img.transpose((2,0,1)) 

    #calling axis dimension VGG was trained on a dimension of 1, 3, 224, 224 
    img = np.expand_dims(img, axis=0) 
    imgFeatures[0,:] = imageModel(CNNWeightsFile).predict(img)[0]
    return imgFeatures


'''method to initialize the VQA Architecture'''
def VQAModel(VQAWeightsFile):
      #Calling the CNN weight file
    from models.VQA.VQA import VQA_MODEL
    VQAModel = VQA_MODEL()
    VQAModel.load_weights(VQAWeightsFile)

    VQAModel.compile(loss='categorical_crossentropy', optimizer='rmsprop')
    return VQAModel




# File paths 
#VQA weight file
VQAWeightsFile   = 'models/VQA/VQA_MODEL_WEIGHTS.hdf5'
#label encoder file
labelEncoderFile = 'models/VQA/FULL_labelencoder_trainval.pkl'
#CNN weight file
CNNWeightsFile   = 'models/CNN/vgg16_weights.h5'


start = 1

#main method of the model to print the answe for inputed question and image
def main(inputQuestion):
    mainParser = argparse.ArgumentParser()
    #inputing image to the model
    mainParser.add_argument('-imageFile', type=str, default='./../../BackEnd/uploaded-image/image.jpg')

    #inputing question to the model
    mainParser.add_argument('-inputQuestion', type=str, default=inputQuestion)
    args = mainParser.parse_args()

    #loading image model
    if start : print("Running featurized image ...")
    imgFeatures = imageFeatures(args.imageFile, CNNWeightsFile)

    #loading question model
    if start : print("Running featurized question ...")
    qusFeatures = questionFeatures(args.inputQuestion)

    #loading VQA model
    if start : print("Running VQA ...")
    mainModel = VQAModel(VQAWeightsFile)

    #printing the results
    if start : print("Results ...") 
    yResult =  mainModel.predict([qusFeatures, imgFeatures])
    ySortIndexRes = np.argsort(yResult)
    #calling labelencoder
    labelencoderCaller = joblib.load(labelEncoderFile)
    #print reults
    for item in reversed(ySortIndexRes[0,-1:]):
        return (str(labelencoderCaller.inverse_transform(item)))

class Question(BaseModel):
    question: str

class Answer(BaseModel):
    answer: str

#Init app
app = FastAPI()


@app.post("/", response_model=Answer)
async def getQuestion(request: Question):
    inputQus = request.question
    response = main(inputQus)
    res = {"answer": response}
     
    return res

    

if __name__ == "__main__":
    uvicorn.run(app,host = "127.0.0.1",port=8000)
