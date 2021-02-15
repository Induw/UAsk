import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import { useRef } from 'react';
import { useState } from 'react';

//Home screen component
const HomeScreen = (props) => {
  let cameraRef = useRef(null)
  const [cameraType, setcameraType] = useState(RNCamera.Constants.Type.back);
  const [FlashMode, setfalshligt] = useState(RNCamera.Constants.FlashMode.off);
  
  //Capture method for camera
  takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      props.navigation.navigate("QuestionAnswerScreen",{uri:data.uri})
    }
  };

  //Flip camera side method 
  flipCamera =() => {
      if(cameraType== RNCamera.Constants.Type.back){
        setcameraType(RNCamera.Constants.Type.front)
      }else {
        setcameraType(RNCamera.Constants.Type.back)
      }
  };

  //Flash Light on off method
  falshligt =()=> {
    if(FlashMode ==RNCamera.Constants.FlashMode.off){
      setfalshligt(RNCamera.Constants.FlashMode.on)
    }else{
      setfalshligt(RNCamera.Constants.FlashMode.off)
    }
  };

    return (
      <View style={styles.container}>
        <RNCamera
          ref={cameraRef}
          style={styles.preview}
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
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity  onPress={() => takePicture()} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> takepic </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => flipCamera()} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> flip </Text>
          </TouchableOpacity>
          <TouchableOpacity   onPress={() => falshligt()} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> flash </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
export default HomeScreen;


