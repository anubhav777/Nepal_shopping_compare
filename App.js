import React, { Component } from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet,View,Text} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './src/navigations/Navigator'


export default class App extends React.Component{
  state={
    isFontLoaded:false
  }
  async componentDidMount(){
    await Font.loadAsync({
      'Bold' : require('./src/fonts/Montserrat-ExtraBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.otf'),
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return (
   (this.state.isFontLoaded === true )? (<AppNavigator/>):(<AppLoading/>)
      );
  }

}