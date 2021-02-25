import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const QuestionAnswerScreen = (props) => {
  useEffect(() => {
    // Update the document title using the browser API
    console.log(props+"--------------------------------------------------------");
  },[]);
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.imgView}>
            <Image style={styles.img} source={{uri:props.route.params.uri}} ></Image>
          </View>
          <View style={styles.QuestionAnswerBox}>
            <View style={styles.wrap}>
              <ScrollView>
                <Text>Question answer View</Text>
                <Text>Question answer View</Text>
                <Text>Question answer View</Text>
                <Text>Question answer View</Text>
                <Text>Question answer View</Text>
                <Text>Question answer View</Text>
                <Text>Question answer View</Text>
                <Text>Question answer View</Text>
                <Text>Question answer View</Text>
                <Text>Question answer View</Text>
                <Text>Question answer View</Text>
              </ScrollView>
            </View>
          </View>
          <View style={styles.bottomBar}>
              <TouchableOpacity     style={styles.capture}>
              < Icon name="camera-outline" size={36} color='#264CAD' />
            </TouchableOpacity>
              <TouchableOpacity  onPress={() => takePicture(props)} style={styles.capture}>
              <Icon name="mic-circle-outline" size={70} color='#264CAD' />
            </TouchableOpacity>
              <TouchableOpacity  onPress={() => flipCamera()} style={styles.capture}>
            <Icons name='keyboard' size={36} type='material' color='#264CAD' />
            </TouchableOpacity>
          </View>
      </SafeAreaView>
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
    height: '100%',
    width: '100%',
    borderRadius: 20
  },
  imgView: {
    height: '50%',
    width: '96%',
    margin: 10,
    borderRadius: 10,
  },
  QuestionAnswerBox: {
    backgroundColor: '#fff',
    width: '96%',
    height: '30%',
    borderRadius: 20,
    opacity: 0.6,
  },
  wrap: {
    margin: 5,
    borderRadius: 10 
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginHorizontal: 5,
    marginVertical: 5
  },
  bottomBar: {
    flex: 0, 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    borderRadius: 100, 
    marginTop: 20, 
    opacity: 0.8,
  }
});