import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
// import { navi } from 'react-navigation'

export class Home extends Component {
  static navigationOptions = {
    title: 'WarsStar - Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
        accessibilityLabel="trooper helmet image"
        style={{width:130,height:130}}
        source={{uri:'https://cdn0.iconfinder.com/data/icons/star-wars-3/154/droid-helmet-soldier-star-wars-128.png'}} />
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}} >
          Welcome to The Empire killing list!
        </Text>
        <Button
        onPress={()=>this.props.navigation.navigate('Login')}
        title='Login'/>
      </View>
    );
  }
}