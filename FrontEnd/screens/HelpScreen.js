import { View } from 'native-base';
import React ,{ useState }from 'react';
import {  Text,  StyleSheet , SafeAreaView} from 'react-native';


const  HelpScreen = (props) => {
  

  return (
    
    <SafeAreaView style={{flex: 1, backgroundColor: '#264CAD'}}>
    <View style={styles.container}>
    <Text style={styles.titleText}>Welcome to UAsk</Text>
    <View>
      <Text style={styles.body}>
        {"\n"}UAsk provides you with answers for questions you ask about an image. {"\n"}
        {"\n"}To use this app , simply take a picture using your phone's camera or upload an image from your camera roll and start asking questions about the image. {"\n"}
        {"\n"}You can use your voice or keyboard to {"\n"}ask your questions. {"\n"}
        {"\n"}UAsk is meant to assist and empower visuallly impaired individuals in distinguishing explicit  details about an image of their choice. {"\n"}
      </Text>
    </View>
    </View>
       
  
  </SafeAreaView>
    
  );
  
};
export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    margin: 10,
    flex: 1
  },
  baseText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign:"left"
  },
   titleText: {
    marginLeft: 20,
    marginTop: 25, 
    fontSize: 30, 
    color: '#264CAD',
    fontWeight: 'bold'
  },
  body:{
    marginLeft: 20,
    marginRight:20, 
    marginTop: 10, 
    fontSize: 20, 
    color: '#264CAD',
  }
});


