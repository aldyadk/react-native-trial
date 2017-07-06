import React, { Component } from 'react'
import { Image, View, Text, TextInput, Button, TouchableHighlight } from 'react-native'

export class Login extends Component {
  constructor(){
    super()
    this.state = {
      user: '',
      loggedUser:''
    }
  }
  static navigationOptions = {
    title: 'WarsStar - Login',
  };
  render() {
    if(!this.state.loggedUser){
      return (
        <View style={styles.container}>
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{!this.state.user ? `Enter you credential!`:''}</Text>
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{this.state.user ? `Welcome, ${this.state.user}!` : ''}</Text>
          <TextInput
          style={{height: 40, width:100, borderColor: 'black', borderWidth: 1, backgroundColor:'white'}}
          onChangeText={(user) => this.setState({user})}
          value={this.state.user}/>
          <Button
          disabled={this.state.user?false:true}
          color='red'
          onPress={()=>this.setState({loggedUser:this.state.user})}
          title='Submit'/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TouchableHighlight style={{height:250}}onPress={() => this.props.navigation.navigate('HitmanTab')}>
          <View style={styles.container} >
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{'Click on me to see our target!'}</Text>
            <Image
            accessibilityLabel="lego trooper image"
            style={{width:130,height:200}}
            source={{uri:'http://images.shoutwiki.com/lego/thumb/6/67/Stormtrooper-75060.png/250px-Stormtrooper-75060.png'}} />
            <Text style={{color:'red',fontSize:20,fontWeight:'bold'}} >
              {'Now, or I\'ll shoot you!'}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}