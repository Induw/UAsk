import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './screens/DrawerContent';
import SplashScreen from 'react-native-splash-screen'


import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import QuestionAnswerScreen from './screens/QuestionAnswerScreen';


const Drawer = createDrawerNavigator();

export default class App extends Component {
    componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render(){
    return (
   
      <NavigationContainer>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
            <Drawer.Screen name="QuestionAnswerScreen" component={QuestionAnswerScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
    );
  }
    
  
  }
  
 



