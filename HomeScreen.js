import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { Header } from 'react-native/Libraries/NewAppScreen';

function HomeScreen({ navigation }) {
  return (
    
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
      
     
     
    </View>
  );
}
export default HomeScreen;
