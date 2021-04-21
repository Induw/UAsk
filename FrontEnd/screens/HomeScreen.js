import React from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useRef} from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Root} from 'native-base';
import {launchImageLibrary} from 'react-native-image-picker';
import HeaderMenu from '../Components/HeaderMenu';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

//  Create formData object to send to backend
const createFormData = (photo) => {
  const data = new FormData();
  data.append('image', {
    name: photo.fileName,
    uri: photo.uri,
    type: photo.type,
  });

  return data;
};

//  Handle the photo upload
const handleUploadPhoto = (photo) => {
  fetch('http://192.168.1.3:3000/api/ask', {
    method: 'POST',
    body: createFormData(photo),
  }).catch((err) => alert('Error: ', err));
};

//Home screen components
const HomeScreen = (props) => {

  ReceiveSharingIntent.getReceivedFiles(files => {
    props.navigation.navigate('QuestionAnswerScreen', {uri: files[0].contentUri});

    // files returns as JSON Array example
    //[{ filePath: null, text: null, weblink: null, mimeType: null, contentUri: null, fileName: null, extension: null }]
  }, 
  (error) =>{
    console.log(error);
  }, 
  'ShareMedia' // share url protocol )
  );

  
  // To clear Intents
  ReceiveSharingIntent.clearReceivedFiles();
  

  let cameraRef = useRef(null);
  const [cameraType, setcameraType] = useState(RNCamera.Constants.Type.back);
  const [FlashMode, setfalshligt] = useState(RNCamera.Constants.FlashMode.off);

  //Capture method for camera
  takePicture = async (props) => {
    if (cameraRef) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      props.navigation.navigate('QuestionAnswerScreen', {uri: data.uri});

      //  creating an object with default name & type
      const photo = {
        fileName: 'cameraPhoto.jpg',
        uri: data.uri,
        type: 'image/jpeg',
      };
      handleUploadPhoto(photo);
      props.navigation.navigate('QuestionAnswerScreen', {uri: data.uri});
    }
  };

  //Flip camera side method
  flipCamera = () => {
    if (cameraType == RNCamera.Constants.Type.back) {
      setcameraType(RNCamera.Constants.Type.front);
    } else {
      setcameraType(RNCamera.Constants.Type.back);
    }
  };

  //Flash Light on off method
  falshligt = () => {
    if (FlashMode == RNCamera.Constants.FlashMode.off) {
      setfalshligt(RNCamera.Constants.FlashMode.on);
    } else {
      setfalshligt(RNCamera.Constants.FlashMode.off);
    }
  };

  //navigate with selected image from defualt image gallery
  navigateToViewPhotos = (data) => {
    props.navigation.navigate('QuestionAnswerScreen', {uri: data.uri});
    // navigateToViewPhotos = (data) => {
    //   props.navigation.navigate('QuestionAnswerScreen', {uri: data[0].path});
    // };
  };

  function choosePhotosFromGallery() {
    const options = {
      maxWidth: 1080,
      maxHeight: 1350,
      quality: 0.5,
    };

    //  launches image library and responds with an object with image details
    launchImageLibrary(options, (response) => {
      console.log('XXXXXXXXXXXXXXXXXXXXX', response);
      if (!response.didCancel) {
        navigateToViewPhotos(response);
        handleUploadPhoto(response);
      }
    });
  }

  return (
    <Root>
      <HeaderMenu
        title={'UAsk'}
        leftOnPressed={() => props.navigation.openDrawer()}
        right={false}
        containerStyle={{
          marginTop: 0,
        }}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.preview}>
          <RNCamera
            ref={cameraRef}
            style={styles.cameraView}
            type={cameraType}
            flashMode={FlashMode}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.camBottomBar}>
            <TouchableOpacity
            accessible={true}
            accessibilityLabel="Gallery"
            accessibilityHint="Choose photos from gallery"
              onPress={() => choosePhotosFromGallery()}
              style={styles.capture}>
              <Icon name="images-outline" size={36} color="#264CAD" />
            </TouchableOpacity>
            <TouchableOpacity
             accessible={true}
             accessibilityLabel="Camara button"
             accessibilityHint="Take a picture"
              onPress={() => takePicture(props)}
              style={styles.captureBtn}></TouchableOpacity>
            <TouchableOpacity
            accessible={true}
            accessibilityLabel="Camara flip button"
            accessibilityHint="Flip camara "
              onPress={() => flipCamera()}
              style={styles.capture}>
              <Icon name="camera-reverse" size={36} color="#264CAD" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Root>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#264CAD',
  },
  cameraView: {
    height: '100%',
  },
  preview: {
    flex: 1,
    borderRadius: 5,
    height: '80%',
  },
  bottomSection: {
    height: '20%',
    flex: 0,
    flexDirection: 'column',
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 50,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 50,
  },
  captureBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#264CAD',
    backgroundColor: '#ffff',
    marginTop: 10,
  },
  camBottomBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    marginTop: 20,
    marginHorizontal: 2,
    opacity: 0.8,
  },
});
