import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 0}}>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  height: 100,
                }}>
                <View style={{marginLeft: 5, marginTop: 5}}>
                  <Icon name="eye" size={40} color="#264CAD" marginLeft={5} />
                </View>
                <Title style={styles.title}>UAsk</Title>
                <Caption style={styles.caption}></Caption>
              </View>
            </View>
          </View>

          <Drawer.Section marginBottom={0}></Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={() => (
                <Icon name="home-outline" color={'#264CAD'} size={30} />
              )}
              label={'Home'}
              labelStyle={{ color: '#264CAD', fontFamily: 'WorkSans-Medium', fontSize: 15}}
              onPress={() => {
                props.navigation.navigate('root', {screen: 'HomeScreen'});
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon name="help-circle" color={'#264CAD'} size={30} />
              )}
              label="Help"
              labelStyle={{ color: '#264CAD', fontFamily: 'WorkSans-Medium', fontSize: 15}}
              onPress={() => {
                props.navigation.navigate('root', {screen: 'HelpScreen'});
              }}
            />
            <DrawerItem
              icon={() => <Icon name="cog" color={'#264CAD'} size={30} />}
              label="Settings"
              labelStyle={{ color: '#264CAD', fontFamily: 'WorkSans-Medium', fontSize: 15}}
              onPress={() => {
                props.navigation.navigate('root', {screen: 'SettingsScreen'});
              }}
            />

            <DrawerItem
              icon={() => <Icon name="alert-box" color={'#264CAD'} size={30} />}
              label="About Us"
              labelStyle={{ color: '#264CAD', fontFamily: 'WorkSans-Medium', fontSize: 15}}
              onPress={() => {
                props.navigation.navigate('root', {screen: 'AboutUsScreen'});
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    height: '20%',
  },
  title: {
    fontSize: 30,
    marginTop: 14,
    fontFamily: 'WorkSans-Bold',
    color: '#264CAD',
    marginLeft: 10,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
