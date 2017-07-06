import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class Chat extends Component {
  static navigationOptions = {
    title: 'Chat',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Troopers Group Chat</Text>
        <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>Coming Soon</Text>
      </View>
    )
  }
}