import React ,{ useState }from 'react';
import {  Text,  StyleSheet , SafeAreaView} from 'react-native';



const  TermsScreen = (props) => {
  
  return (

    
    <SafeAreaView style={{flex: 1, backgroundColor: '#264CAD'}}>
      <Text style={styles.titleText}>Terms of Use</Text>
      <Text style={{marginLeft: 20,marginTop: 10, marginRight: 20, fontSize: 18,fontFamily: 'WorkSans-Medium', color: '#fff'}}>
        The Service is owned or controlled by UAsk Innovations ("UAsk").
      </Text>
        <Text style={{marginLeft: 20,marginTop: 15, fontSize: 30,fontFamily: 'WorkSans-Bold' , color: '#fff'}}>
        Basic Terms
        </Text>
        <Text style={{marginLeft: 20,marginRight: 20,marginTop: 5, fontSize: 18, color: '#fff', fontFamily: 'WorkSans-Medium'}}>
        Under the age of 16, you must have parental consent to  use the Service{"\n"}
        {"\n"}You may not post violent, nude, partially nude, discriminatory, unlawful, infringing, hateful, pornographic or sexually suggestive photos or other content via the Service.{"\n"}
        {"\n"}You must not try using an automated device, script, bot, spider, crawler or scraper{"\n"} 
        {"\n"}We respect other people's rights, and expect you to do the same.{"\n"}
        </Text>
  </SafeAreaView>
    
  );
  
};

export default TermsScreen;

const styles = StyleSheet.create({
  baseText: {
    fontSize: 15,
    fontFamily: "Cochin",
    fontWeight: "bold",
    
    textAlign:"left"
  },
   titleText: {
    marginLeft: 20,
    marginTop: 10, 
    fontSize: 30, 
    color: '#fff',
    fontFamily: 'WorkSans-Bold'
  },
  bodyText:{
    fontSize: 1000,
    fontFamily: "Cochin",
    
    textAlign:"left"

  }
});


