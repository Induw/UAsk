import React ,{ useState }from 'react';
import { View, Text, Button, StyleSheet, Image , SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { color } from 'react-native-reanimated';



const AboutUsScreen = (props) => {
  
    return (

      
      <SafeAreaView style={{flex: 1, backgroundColor: '#264CAD'}}>

      <TouchableOpacity style={styles.TermsBox} onPress={() => {
              props.navigation.navigate('Privacypolicy');
            }}>
        <Text style={{ fontSize: 25, color: '#264CAD'}} >Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.TermsBox} onPress={() => {
              props.navigation.navigate('TermsScreen');
            }}>
        <Text style={{ fontSize: 25, color: '#264CAD'}}>Terms of Use</Text>
      </TouchableOpacity>
      
      
      <Text style={styles.baseText}>
        UAsk 
      <Text style={styles.innerText}> Innovations All rights reserved.</Text>
      </Text>
      <Text style={{marginLeft: 30, marginTop: 15, fontSize: 20, color: '#fff'}}>
        UAsk is not always accurate and hence {"\n"}
         should not be used to navigate or in {"\n"}
         situton where you could be harmed.{"\n"}
         it is not intended for detection, diagnosis,{"\n"}
         monitoring management or treatment of{"\n"}
         any medical condition or disease. Users {"\n"}
         should seek any medical advice from a{"\n"} 
         physician.You use UAsk at your own risk</Text>

         
    
    </SafeAreaView>
      
    );
    
};




export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  baseText: {
    marginLeft: 25,marginTop: 25, fontSize: 22, color: '#fff',
    fontWeight: 'bold'
  },
  innerText: {
    color: '#fff'
  },
   
  // PrivacyBox: {
  //   flex: 0,
  //   flexDirection: 'column',
  //   width: '100%',
  //   backgroundColor: '#fff',
  //   alignItems: 'flex-start',
  //   height: '10%',
  //   opacity: 1,
  //   borderRadius: 20,
  //   marginTop: 30
  // },
  TermsBox: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    height: 60,
    opacity: 1,
    borderRadius: 20,
    marginTop: 20,
  }
  
});