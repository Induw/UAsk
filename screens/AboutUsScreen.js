import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { color } from 'react-native-reanimated';

const AboutUsScreen = (props) => {
    return (
      <View style={styles.container}>
        <Text>About Us</Text>
      </View>
    );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
});