import React ,{ useState }from 'react';
import {  Text,  StyleSheet , SafeAreaView} from 'react-native';



const  Privacypolicy = (props) => {
  
  return (

    
    <SafeAreaView style={{flex: 1, backgroundColor: '#264CAD'}}>
    <Text style={styles.titleText}>Privacy Policy</Text>
    <Text style={styles.bodyText}>
      {"\n"}Welcome to UAsk. UAsk provides a fast and accurate visual question answering utility {"\n"}
      {"\n"}After an image is taken , using the built in camara capture feature, then user can ask questions about image {"\n"}
      {"\n"}Our Privacy Policy applies to all visitors, users, and others who access the Service ("Users").{"\n"}
      {"\n"}Our Privacy Policy explains how we collect, use, share and protect information in relation to our mobile app {"\n"}
      {"\n"}By using our Service you understand and agree that we are providing a platform for you to take, define, and share images ("User Content"), by the Service. User content not stored in our cloud services {"\n"}
       </Text>

       
  
  </SafeAreaView>
    
  );
  
};

export default Privacypolicy;

const styles = StyleSheet.create({
   titleText: {
    marginLeft: 20,
    marginTop: 10, 
    fontSize: 30, 
    color: '#fff',
    fontFamily: 'WorkSans-Bold'
  },
  bodyText:{
    marginLeft: 20,
    marginTop: 5, 
    fontSize: 18, 
    color: '#fff',
    fontFamily: 'WorkSans-Medium',
    marginRight: 20,

  }
});


