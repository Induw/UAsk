import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import VolumeControl, { VolumeControlEvents } from "react-native-volume-control";

const SettingsScreen = ({}) => {

    return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#264CAD'}}>
      <View style={styles.soundcngBox}>
        <Text style={{marginLeft: 15,marginTop: 5, fontSize: 20, color: '#264CAD'}}>Volume</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15, width: '90%' }}>
          <Icon name="volume-high-outline" size={36} color='#264CAD' flexDirection='column' />
          <Slider
          style={{width: '80%', height: 40,marginHorizontal: 20}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="black"
          maximumTrackTintColor="#000000"
          thumbTintColor="#264CAD"
          // value={100}
          // onValueChange={this.sliderChange}
          />
        </View>
      </View>
      <View style={styles.clrChngBox}>
        <Text style={{marginLeft: 15, fontSize: 20, color: '#264CAD'}}>Theme</Text>
        <DropDownPicker
          items={[
              {label: 'Color', value: 'Color' },
              {label: 'Color', value: 'uk' },
              {label: 'Color', value: 'france' }
          ]}
          containerStyle={{width: 160, height: 40, marginHorizontal: 100}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start',
              width: '100%'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          />
      </View>
    </SafeAreaView>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  soundcngBox: {
    flex: 0,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    height: '14%',
    opacity: 1,
    borderRadius: 20,
    marginTop: 10
  },
  clrChngBox: {
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '10%',
    opacity: 1,
    borderRadius: 20,
    marginTop: 10,
  }
});