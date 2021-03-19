import React ,{ useState }from 'react';
import { View, Text, Button, StyleSheet, BackHandler, Alert } from 'react-native';

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
const HelpScreen = () => {
  const titleText = useState("Welcome to UAsk");
  
  const bodyText = useState("UAsk provides you with answers for questions you ask about an image.");
  const bodyText1 = useState("To use this app , simply take a picture using your phone's camera or upload an image from your camera roll and start asking questions about the image.");  
  const bodyText2 = useState("You can use your voice or keyboard to ask your questions.");
  const bodyText3 = useState("UAsk is meant to assist and empower visuallly impaired individuals in distinguishing explicit  details about an image of their choice.");

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText}>
      {"\n"}
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={60}>
        {bodyText}
        {"\n"}
        {"\n"}
        {bodyText1}
        {"\n"}
        {"\n"}
        {bodyText2}
        {"\n"}
        {"\n"}
        {bodyText3}</Text>
    </Text>
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
  bodyText:{
    fontSize: 1000,
    fontFamily: "Cochin",
    
    textAlign:"left"

  }
});


