import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const QuestionAnswerScreen = (props) => {

  useEffect(() => {
    // Update the document title using the browser API
    console.log(props+"--------------------------------------------------------");
  },[]);

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.imgView}>
            <Image style={styles.img} source={{uri:props.route.params.uri}} ></Image>
          </View>
          <View style={styles.QuestionAnswerBox}>
            <View style={styles.wrap}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            </View>
          </View>
          <View style={styles.bottomBar}>
              <TouchableOpacity     style={styles.capture}>
              < Icon name="camera-outline" onPress={() => {props.navigation.navigate('Home')}} size={36} color='#264CAD' />
            </TouchableOpacity>
              <TouchableOpacity  onPress={() => takePicture(props)} style={styles.capture}>
              <Icon name="mic-circle-outline" size={70} color='#264CAD' />
            </TouchableOpacity>
              <TouchableOpacity  onPress={() => flipCamera()} style={styles.capture}>
            <Icons name='keyboard' size={36} type='material' color='#264CAD' />
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
};

export default QuestionAnswerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    backgroundColor: '#264CAD',
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 20
  },
  imgView: {
    height: '50%',
    width: '96%',
    margin: 10,
    borderRadius: 10,
  },
  QuestionAnswerBox: {
    backgroundColor: '#fff',
    width: '96%',
    height: '30%',
    borderRadius: 20,
    opacity: 0.6,
  },
  wrap: {
    margin: 5,
    borderRadius: 10 
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginHorizontal: 5,
    marginVertical: 5
  },
  bottomBar: {
    flex: 0, 
    flexDirection: 'row', 
    backgroundColor: '#fff', 
    borderRadius: 100, 
    marginTop: 20, 
    opacity: 0.8,
  },
   item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});