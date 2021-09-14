import React from 'react';
import {Node} from 'react';
import {SafeAreaView} from 'react-native';
import Tts from 'react-native-tts';

var isSinhalaAvailable = false;
checkSinhalaLanguage();

async function checkSinhalaLanguage() {
  var voices = await Tts.voices();
  for (var i = 0; i < voices.length; i++) {
    console.log(voices[i].language);
    if (voices[i].language == 'si-LK') {
      isSinhalaAvailable = true;
      console.log("isSinhalaAvailable changed to: "+isSinhalaAvailable)
      break;
    }
  }
}

const App: () => Node = () => {

  console.log("isSinhalaAvailable: "+isSinhalaAvailable);
  if (isSinhalaAvailable) {
    Tts.setDefaultLanguage('si-LK');
    Tts.speak('සිංහල භාෂාව භාවිතා කිරීමට හැකියාව ඇත.');
  } else {
    Tts.speak('please select speech services by google');
  }

  return (
    <SafeAreaView>
    </SafeAreaView>
  );
};

export default App;
