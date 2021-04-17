import React ,{ useState }from 'react';
import {  Text,  StyleSheet , SafeAreaView} from 'react-native';

// const HelpScreen = () => {
//   const titleText = useState("Bird's Nest");
//   const bodyText = useState("This is not really a bird nest.");
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text1}>Help Screen</Text>
//         <Text h1>sss</Text>
       
//       </View>
//     );
// };

// export default HelpScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//    alignItems: 'center', 
//     justifyContent: 'center'
//   },
//   text1: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });
const  HelpScreen = (props) => {
  

  return (
    
    <SafeAreaView style={{flex: 1, backgroundColor: '#264CAD'}}>
    
    <Text style={styles.titleText}>
    Welcome 
    <Text style={styles.innerText}> to UAsk</Text>
    </Text>
    <Text style={{marginLeft: 35,marginRight:35,  marginTop: 15, fontSize: 20, color: '#fff'}}>
      {"\n"}UAsk provides you with answers for questions you ask about an image. {"\n"}
      {"\n"}To use this app , simply take a picture using your phone's camera or upload an image from your camera roll and start asking questions about the image. {"\n"}
      {"\n"}You can use your voice or keyboard to {"\n"}ask your questions. {"\n"}
      {"\n"}UAsk is meant to assist and empower visuallly impaired individuals in distinguishing explicit  details about an image of their choice. {"\n"}
       </Text>
       
  
  </SafeAreaView>
    
  );
  
};
export default HelpScreen;

const styles = StyleSheet.create({
  baseText: {
    fontSize: 15,
    fontFamily: "Cochin",
    fontWeight: "bold",
    
    textAlign:"left"
  },
  titleText: {
    fontSize: 30,
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
// export default HelpScreen;
//  const styles = StyleSheet.create({}) 
//   titleText: {
//     fontSize: 30,
//     marginBottom: 10,
    
//     fontWeight: "bold",
//     color:"#264CAD",
//     textAlign:"center"
    
//   },
//   ////
//    titleText: {
//     marginLeft: 35,marginTop: 25, fontSize: 30, color: '#fff',
//     fontWeight: 'bold'
//   },
//   innerText: {
//     color: '#fff'
//   },
//   ///
//   bodyText:{
//     fontSize: 1000,
//     fontFamily: "Cochin"
//   }
// });


