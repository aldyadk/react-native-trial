import React, { Component } from 'react'
import { Button } from 'react-native'

export class LoginButton extends Component {
  render() {
    return (
      <Button
      onPress={()=>this.props.navigate('Login')}
      title='Login'/>
    );
  }
}