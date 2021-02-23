import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator();

//top heading bar with hamburger icon
const TopHeadingBar = ({navigation}) => (
  
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
        fontWeight: 'bold',
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        headerTitleStyle: {color: '#264CAD', fontWeight: 'bold'},
        title:'UAsk',
        headerTitleAlign: 'center',
        headerLeft: () => (
          //Hamburger icon
            <Icon.Button name="md-menu" size={36} color="#264CAD" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);
export default TopHeadingBar;

