import os, argparse
import cv2, spacy, numpy as np
from keras.optimizers import SGD
from sklearn.externals import joblib

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

