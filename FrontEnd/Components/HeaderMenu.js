import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderMenu = ({title, leftOnPressed, right, containerStyle}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 0,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        ...containerStyle,
      }}>
      {/* side drawer */}
      <TouchableOpacity style={{paddingLeft: 10}}>
        <Icon
          name="menu"
          size={40}
          color="#264CAD"
          backgroundColor="#FFFFFF"
          onPress={() => leftOnPressed()}></Icon>
      </TouchableOpacity>
      {/* Lable title */}
      <View style={{flex: 1, alignItems: 'center', paddingRight: 50}}>
        <Icon name="md-eye" size={25} color="#264CAD" />
        <Text style={{color: '#264CAD', fontFamily: 'WorkSans-Bold'}}>{title}</Text>
      </View>
    </View>
  );
};
export default HeaderMenu;
