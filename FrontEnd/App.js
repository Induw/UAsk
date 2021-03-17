import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerContent } from './Components/DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from 'react-native-splash-screen';
import HelpScreen from './screens/HelpScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import TopHeadingBar from './Components/TopHeadingBar';
import QuestionAnswerScreen from './screens/QuestionAnswerScreen';
import HomeScreen from './screens/HomeScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
   setTimeout(() => {
    SplashScreen.hide();
  },1000);
  },[]);

  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}  >
          <Drawer.Screen name="HomeDrawer" component={TopHeadingBar} />
          <Drawer.Screen name="HelpScreen" component={HelpScreenStack} />
          <Drawer.Screen name="SettingsScreen" component={secondScreenStack} />
          <Drawer.Screen name="AboutUsScreen" component={AboutUsScreenStack} />
          <Drawer.Screen name="QuestionAnswerScreen" component={QuestionAnswerScreen} />
          <Drawer.Screen name="Homescreen" component={HomeScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );

  function secondScreenStack({navigation}) {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff', //Set Header color
          },
          headerTintColor: '#264CAD', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Settings',//Set Header Title
            headerLeft: () => (
              //Back button
                <Icon.Button name="arrow-back" size={36} color="#264CAD" backgroundColor="#fff" onPress={() => navigation.goBack()}></Icon.Button>
            ) 
          }}/>        
      </Stack.Navigator>
    );
  }
    
  //Stack heading bar for Help screen
  function HelpScreenStack({navigation}) {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff', //Set Header color
          },
          headerTintColor: '#264CAD', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="HelpScreen"
          component={HelpScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Help', //Set Header Title
            headerLeft: () => (
              //Back button
                <Icon.Button name="arrow-back" size={36} color="#264CAD" backgroundColor="#fff" onPress={() => navigation.goBack()}></Icon.Button>
            ) 
          }}/>
      </Stack.Navigator>
    );
  }
  
  //Stack heading bar for About us screen
  function AboutUsScreenStack({navigation}) {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff', //Set Header color
          },
          headerTintColor: '#264CAD', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="AboutUsScreen"
          component={AboutUsScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'About Us', //Set Header Title
            headerLeft: () => (
              //Back button
                <Icon.Button name="arrow-back" size={36} color="#264CAD" backgroundColor="#fff" onPress={() => navigation.goBack()}></Icon.Button>
            ) 
          }}/>
      </Stack.Navigator>
    );
  }
}

export default App;

