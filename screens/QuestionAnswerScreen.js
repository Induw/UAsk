import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const QuestionAnswerScreen = (props) => {
    return (
      <View style={styles.container}>
        <Image style={{width:120, height: 300}} source={{uri:props.route.params.uri}} ></Image>
      </View>
    );
};

export default QuestionAnswerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});