import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () =>{
  return(
    <>
      <View style={styles.container}>
        <Text>Olá Mundo</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
