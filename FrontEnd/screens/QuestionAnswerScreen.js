import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tts from 'react-native-tts';

import Voice from 'react-native-voice';
import {KeyboardAccessoryView} from 'react-native-keyboard-accessory';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const QuestionAnswerScreen = (props) => {
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState(['']);
  const [partialResults, setPartialResults] = useState([]);
  const [iskeyboard, setisKeyboard] = useState(false);
  const [keyboardinput, setkeyboardinput] = useState('');
  const [answer, setAnswer] = useState('');
  const [shouldShow, setShouldShow] = useState(false);
  const [answerShow, setAnswerShouldShow] = useState(false);

  //  handle the question asked
  const handleQuestionSubmit = (question) => {
    fetch('http://192.168.1.5:3000/api/ask/question', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: question,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAnswer(data.answer);
        setAnswerShouldShow(true);
        handleVoice(data.answer);
      })
      .catch((err) => alert("Error: Couldn't send to server...", err));
  };

  //method to handle text to voice
  const handleVoice = (ttsText) => {
    Tts.speak(ttsText);
  };

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  const keyboard = () => {
    setisKeyboard(!iskeyboard);
  };

  const onSpeechStart = (e) => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  const onSpeechEnd = (e) => {
    //Invoked when SpeechRecognizer stops recognition

    console.log('onSpeechEnd: ', e);
    setEnd('√');
    setShouldShow(true);
  };

  const onSpeechError = (e) => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = (e) => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    setResults(e.value);
    handleQuestionSubmit(e.value[0]);
  };

  const onSpeechPartialResults = (e) => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = (e) => {
    //Invoked when pitch that is recognized changed
    console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value);
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      await Voice.start('en-US');
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    console.log(
      props + '--------------------------------------------------------',
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgView}>
        <Image
          style={styles.img}
          source={{uri: props.route.params.uri}}></Image>
      </View>

      <View style={styles.QuestionAnswerBox}>
        <ScrollView style={styles.scrollView}>
          {/* {shouldShow && (
            <View>
              <Text style={styles.textStyle}>{results[0]}</Text>
              <Text style={styles.textStyle2}>{answer}</Text>
            </View>
          )} */}
          <View>
            {shouldShow && <Text style={styles.textStyle}>{results[0]}</Text>}
            {answerShow && <Text style={styles.textStyle2}>{answer}</Text>}
          </View>
        </ScrollView>

        <View style={styles.wrap}>
          {iskeyboard ? (
            <KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
              {({isKeyboardVisible}) => (
                <View style={styles.textInputView}>
                  <TextInput
                    placeholder="Write your message"
                    onChangeText={(TextInputValueHolder) =>
                      setkeyboardinput(TextInputValueHolder)
                    }
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    multiline={true}
                  />
                  {isKeyboardVisible && (
                    <Button
                      style={styles.textInputButton}
                      title="Send"
                      onPress={() => {
                        setShouldShow(true);
                        handleQuestionSubmit(keyboardinput);
                        // results.push(keyboardinput);
                        setResults([keyboardinput]);
                        setisKeyboard(false);
                      }}
                    />
                  )}
                </View>
              )}
            </KeyboardAccessoryView>
          ) : (
            <></>
          )}
        </View>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.capture}>
          <Icon
            name="camera-outline"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
            size={36}
            color="#264CAD"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={startRecognizing} style={styles.capture}>
          <Icon name="mic-circle-outline" size={70} color="#264CAD" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => keyboard()} style={styles.capture}>
          <Icons name="keyboard" size={36} type="material" color="#264CAD" />
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
    borderRadius: 20,
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
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'green',
    width: '90%',
    borderRadius: 20,
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  bottomBar: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 100,
    marginTop: 10,
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
  textStyle: {
    alignItems: 'center',
    fontSize: 25,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    alignSelf: 'baseline',
  },
  textStyle2: {
    textAlign: 'right',
    fontSize: 25,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '95%',
  },
  textInputView: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    alignItems: 'flex-start',
    alignItems: 'center',
    padding: 2,
  },
  textInput: {
    width: '80%',
    borderWidth: 0,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: 'blue',
  },
  textInputButton: {
    marginRight: 20,
    width: '100%',
  },
});
