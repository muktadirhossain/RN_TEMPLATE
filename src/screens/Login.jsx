import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import CustomStatusBar from '../components/CustomStatusBar';

const Login = () => {
  return (
    <ImageBackground
      className="flex-1"
      source={require('../assets/images/splashBackground.png')}>
      <ScrollView>
        <TextInput 
        placeholder='Email address or user name...'
        placeholderTextColor='#7E7E7E'
        style={styles.input} />
        <TextInput 
        placeholder='Enter your password...'
        placeholderTextColor='#7E7E7E'
        style={styles.input} />
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
