import React ,{ useState }from 'react';
import {  Text,  StyleSheet , SafeAreaView} from 'react-native';



const  TermsScreen = (props) => {
  
  return (

    
    <SafeAreaView style={{flex: 1, backgroundColor: '#264CAD'}}>
    
    <Text style={styles.titleText}>
    Terms 
    <Text style={styles.innerText}> of Use</Text>
    </Text>
    <Text style={{marginLeft: 40,marginTop: 15, fontSize: 18,fontWeight: "bold", color: '#fff'}}>
      {"\n"}("Terms of Use"). The Service is owned or controlled by UAsk Innovations ("UAsk").{"\n"}
      </Text>
      <Text style={{marginLeft: 40,marginTop: 15, fontSize: 20,fontWeight: "bold", color: '#fff'}}>
      {"\n"}Basic Terms{"\n"}
      </Text>
      <Text style={{marginLeft: 35,marginRight: 35,marginTop: 15, fontSize: 17, color: '#fff'}}>
      {"\n"}Under the age of 16, you must have parental consent to  use the Service{"\n"}
      {"\n"}You may not post violent, nude, partially nude, discriminatory, unlawful, infringing, hateful, pornographic or sexually suggestive photos or other content via the Service.{"\n"}
      {"\n"}You must not try using an automated device, script, bot, spider, crawler or scraper{"\n"} 
      {"\n"}We respect other people's rights, and expect you to do the same{"\n"}
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
    fontSize: 30,
    marginBottom: 10,
    
    fontWeight: "bold",
    color:"#264CAD",
    textAlign:"center"
    
  },
  ////
   titleText: {
    marginLeft: 35,marginTop: 25, fontSize: 30, color: '#fff',
    fontWeight: 'bold'
  },
  innerText: {
    color: '#fff'
  },
  ///
  bodyText:{
    fontSize: 1000,
    fontFamily: "Cochin",
    
    textAlign:"left"

  }
});


