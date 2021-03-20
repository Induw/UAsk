from keras.models import Sequential
from keras.layers.core import Flatten, Dense, Dropout
from keras.layers.convolutional import MaxPooling2D, ZeroPadding2D
from keras.layers.convolutional import Conv2D as Convolution2D
import numpy as np


def pop(model):
    '''Removess a layer on top of the layer range.
    '''
    if not model.outputs:
        raise Exception('Model cannot be popped-model is empty.')
    else:
        model.layers.pop()
        if not model.layers:
            model.outputs = []
            model.inbound_nodes = []
            model.outbound_nodes = []
        else:
            model.layers[-1].outbound_nodes = []
            model.outputs = [model.layers[-1].output]
        model.built = False

    return model

def load_model_legacy(model, weight_path):
   
    import h5py
    f = h5py.File(weight_path, mode='r')
    flattened_layers = model.layers

    nb_layers = f.attrs['nb_layers']

    for k in range(nb_layers):
        g = f['layer_{}'.format(k)]
        weights = [g['param_{}'.format(p)] for p in range(g.attrs['nb_params'])]
        if not weights: continue
        if len(weights[0].shape) >2: 
            weights[0] = np.swapaxes(weights[0],0,3)
            weights[0] = np.swapaxes(weights[0],0,2)
            weights[0] = np.swapaxes(weights[0],1,2)
        flattened_layers[k].set_weights(weights)

    f.close()


'''Modificaiton of file obtained from here
    https://gist.github.com/baraldilorenzo/07d7802847aaad0a35d3 '''
def VGG_16(weights_path=None):
    model = Sequential()
    model.add(ZeroPadding2D((1,1),input_shape=(3,224,224)))
    model.add(Convolution2D(64,( 3, 3), activation='relu'))
    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(64,( 3, 3), activation='relu'))
    model.add(MaxPooling2D((2,2), strides=(2,2)))
    

    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(128,( 3, 3), activation='relu'))
    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(128,( 3, 3), activation='relu'))
    model.add(MaxPooling2D((2,2), strides=(2,2)))

    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(256,( 3, 3), activation='relu'))
    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(256,( 3, 3), activation='relu'))
    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(256,( 3, 3), activation='relu'))
    model.add(MaxPooling2D((2,2), strides=(2,2)))

    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(512,( 3, 3), activation='relu'))
    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(512,( 3, 3), activation='relu'))
    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(512,( 3, 3), activation='relu'))
    model.add(MaxPooling2D((2,2), strides=(2,2)))

    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(512,( 3, 3), activation='relu'))
    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(512,( 3, 3), activation='relu'))
    model.add(ZeroPadding2D((1,1)))
    model.add(Convolution2D(512,( 3, 3), activation='relu'))
    model.add(MaxPooling2D((2,2), strides=(2,2)))

    model.add(Flatten())
    model.add(Dense(4096, activation='relu'))
    model.add(Dropout(0.5))
    model.add(Dense(4096, activation='relu'))
    model.add(Dropout(0.5))
    model.add(Dense(1000, activation='softmax'))
    
    if weights_path:
        load_model_legacy(model, weights_path)

    #Remove the last two layers to get the 4096D activations
    model = pop(model)
    model = pop(model)
        

    return model

