import React ,{ useEffect }from 'react';
import { View, Text, Button, StyleSheet, BackHandler, Alert } from 'react-native';

const HelpScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Help Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});