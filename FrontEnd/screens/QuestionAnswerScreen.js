import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




const QuestionAnswerScreen = (props) => {
  useEffect(() => {
    // Update the document title using the browser API
    console.log(props+"--------------------------------------------------------");
  },[]);
    return (
        <View style={styles.container}>
          <View style={{ height: 500, width: 500, justifyContent: 'center'}}>
          <Image style={styles.img} source={{uri:props.route.params.uri}} ></Image>
          </View>
        <View style={styles.QuestionAnswerBox}>
          <Text>Question answer View</Text>
        </View>
          <View style={styles.bottomBar}>
              <TouchableOpacity   onPress={() => falshligt()} style={styles.capture}>
              <Icon name="flash" size={36} color='#ffff' />
            </TouchableOpacity>
              <TouchableOpacity  onPress={() => takePicture(props)} style={styles.capture}>
              <Icon name="mic-circle-outline" size={36} color='#ffff' />
            </TouchableOpacity>
              <TouchableOpacity  onPress={() => flipCamera()} style={styles.capture}>
            < Icon name="flash" size={36} color='#ffff' />
            </TouchableOpacity>
          </View>
        </View>
    );
};

export default QuestionAnswerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    backgroundColor: '#264CAD',
  },
  img: {
    // width: '100%',
    // height: 500,
    // borderRadius: 5,
    height: 450,
    width: '100%',
    borderRadius: 20
  },
  QuestionAnswerBox: {

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
  bottomBar: {
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