import React ,{ useState }from 'react';
import { View, Text, Button, StyleSheet, Image , SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AboutUsScreen = (props) => {
  
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#264CAD'}}>
      
      <View style={styles.container}>
        <Text style={styles.baseText}>UAsk Innovations All rights reserved.</Text>
        <Text style={styles.bodyText}>
          UAsk is not always accurate and hence
          should not be used to navigate or in
          situton where you could be harmed.{"\n"}{"\n"}
          it is not intended for detection, diagnosis,monitoring management or treatment of
          any medical condition or disease.{"\n"}{"\n"}
          Users
          should seek any medical advice from a
          physician.{"\n"}{"\n"}
          You use UAsk at your own risk</Text>
      </View>

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
    </SafeAreaView>
    );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    margin: 10,
    flex: 1,
  },
  baseText: {
    marginLeft: 20,
    marginTop: 10, 
    fontSize: 22, 
    color: '#264CAD',
    fontWeight: 'bold'
  },
  bodyText: {
    marginLeft: 20, 
    marginTop: 10, 
    marginRight: 20,
    fontSize: 20, 
    color: '#264CAD',
    textAlign: 'justify'
  },
  TermsBox: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 50,
    opacity: 1,
    borderRadius: 20,
    margin: 10
  }
  
});