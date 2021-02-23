import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Caption, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 0}}>
                            {/* <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            /> */}
                            <View style={{marginLeft:5, marginTop: 5, flexDirection:'column', height: 100}}>
                                <Title style={styles.title}>UAsk</Title>
                                <Caption style={styles.caption}></Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section marginBottom={0}>
                    </Drawer.Section>
                       
                    
                    

                    <Drawer.Section style={styles.drawerSection} >
                        <DrawerItem  
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={'#264CAD'}
                                size={30}
                                />
                            )}
                            
                            label={"Home"}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="help-circle" 
                                color={'#264CAD'}
                                size={30}
                                />
                            )}
                            label ="Help"
                            onPress={() => {props.navigation.navigate('HelpScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="cog" 
                                color={'#264CAD'}
                                size={30}
                                />
                            )}
                            label ="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />

                        <Drawer.Section>
                       
                        </Drawer.Section>
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="exclamation" 
                                color={'#264CAD'}
                                size={30}
                                />
                            )}
                            label="About Us"
                            onPress={() => {props.navigation.navigate('AboutUsScreen')}}
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
    },
    title: {
      fontSize: 30,
      marginTop: 40,
      fontWeight: 'bold',
      color: '#264CAD'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

