import React, {useEffect} from 'react';
import {
  HomeScreen,
  HelpScreen,
  SettingsScreen,
  QuestionAnswerScreen,
  AboutUsScreen,
  Privacypolicy,
  TermsScreen
} from './screens';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import root from './navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HeaderMenu from './Components/HeaderMenu';
import {DrawerContent} from './Components/DrawerContent';

const Drawer = createDrawerNavigator();
//Splash screen
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        {/* <Drawer.Screen name="TopHeadingBar" component={TopHeadingBar} /> */}
        <Drawer.Screen name="root" component={root} />
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="HelpScreen" component={HelpScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="AboutUsScreen" component={AboutUsScreen} />
        <Drawer.Screen name="Privacypolicy" component={Privacypolicy} />
        <Drawer.Screen name="TermsScreen" component={TermsScreen} />
        <Drawer.Screen
          name="QuestionAnswerScreen"
          component={QuestionAnswerScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
