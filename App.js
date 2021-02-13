import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const App = () => {

  const [mensagem, setMensagem] = useState([{}]);
  const options = {
    clientId: '',
    username: '',
    password: '',
  }

  var mqtt = require('@taoqf/react-native-mqtt')
  var client = mqtt.connect('mqtt://192.168.0.247:8080', options)
  var topic = 'teste'
  var topic1 = 'teste2'

  client.on('connect', () => {
    client.subscribe(topic)
  })
  client.on('message', (topic, message) => {
    message = message.toString()
    //setMensagem(message)
    console.log(message)
  })
const pub = (props) =>{
client.publish(topic,props, 1)
}

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.txt}>ola mundo</Text>
        <TouchableOpacity onPress={() => pub('Ok né')}>
          <Text style={styles.txt}>
            Click
    </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  txt:{
    fontSize:25
  }
});

export default App;
