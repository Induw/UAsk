// import React from 'react';
// import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {DrawerContent} from '../Components/DrawerContent';
// import TopHeadingBar from '../Components/TopHeadingBar';

// import {
//   HomeScreen,
//   HelpScreen,
//   SettingsScreen,
//   QuestionAnswerScreen,
//   AboutUsScreen,
// } from '../screens';

// const Drawer = createDrawerNavigator();

// const Drawers = () => {
//   return (
//     <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
//       <Drawer.Screen name="TopHeadingBar" component={TopHeadingBar} />
//       <Drawer.Screen name="HomeScreen" component={HomeScreen} />
//       <Drawer.Screen name="HelpScreen" component={HelpScreen} />
//       <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
//       <Drawer.Screen name="AboutUsScreen" component={AboutUsScreen} />
//       <Drawer.Screen
//         name="QuestionAnswerScreen"
//         component={QuestionAnswerScreen}
//       />
//       <Drawer.Screen name="Homescreen" component={HomeScreen} />
//     </Drawer.Navigator>
//   );
// };

// export default Drawers;

import React from 'react';
import {
  HomeScreen,
  HelpScreen,
  SettingsScreen,
  QuestionAnswerScreen,
  AboutUsScreen,
} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const root = ({navigation}) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'HomeScreen'}>
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Help',
          headerLeft: () => (
            <Icon.Button
              name="arrow-back"
              size={36}
              color="#264CAD"
              backgroundColor="#fff"
              onPress={() => navigation.goBack()}></Icon.Button>
          ),
        }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: '#fff', //Set Header color
          },
          headerTintColor: '#264CAD', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerTitleAlign: 'center',
          title: 'Home',
          headerLeft: () => (
            <Icon.Button
              name="arrow-back"
              size={36}
              color="#264CAD"
              backgroundColor="#fff"
              onPress={() => navigation.goBack()}></Icon.Button>
          ),
        }}
      />

      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Settings',
          headerLeft: () => (
            <Icon.Button
              name="arrow-back"
              size={36}
              color="#264CAD"
              backgroundColor="#fff"
              onPress={() => navigation.goBack()}></Icon.Button>
          ),
        }}
      />

      <Stack.Screen
        name="QuestionAnswerScreen"
        component={QuestionAnswerScreen}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          title: 'Question',
          headerLeft: () => (
            <Icon.Button
              name="arrow-back"
              size={36}
              color="#264CAD"
              backgroundColor="#fff"
              onPress={() => navigation.goBack()}></Icon.Button>
          ),
        }}
      />

      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'About Us',
          headerLeft: () => (
            <Icon.Button
              name="arrow-back"
              size={36}
              color="#264CAD"
              backgroundColor="#fff"
              onPress={() => navigation.goBack()}></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default root;
