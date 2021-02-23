import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useRef } from 'react';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


//Home screen components
const HomeScreen = (props) => {
  let cameraRef = useRef(null)
  const [cameraType, setcameraType] = useState(RNCamera.Constants.Type.back);
  const [FlashMode, setfalshligt] = useState(RNCamera.Constants.FlashMode.off);
  
  //Capture method for camera
  takePicture = async (props) => {
    if (cameraRef) {
      console.log('Taking photo');
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      // console.log(data,"--------------------------------------------------------");
      props.navigation.navigate("QuestionAnswerScreen",{uri:data.uri})
      console.log(props.navigation,"-ggggggggggg-");

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
        
        
        
        
        <View style={styles.camBottomBar}>
            <TouchableOpacity   onPress={() => falshligt()} style={styles.capture}>
            <Icon name="flash" size={36} color='#264CAD' />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => takePicture(props)} style={styles.captureBtn}>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => flipCamera()} style={styles.capture}>
            <Icon name="camera-reverse" size={36} color='#264CAD' />
                
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#264CAD',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderRadius: 5
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
        marginTop: 10
    },
    camBottomBar: {
      flex: 0, 
      flexDirection: 'row', 
      justifyContent: 'center',
      backgroundColor: '#fff', 
      borderRadius: 100, 
      marginTop: 10, 
      marginBottom: 10,
      marginHorizontal: 10,
      opacity: 0.8,
      
    }
  });
export default HomeScreen;




