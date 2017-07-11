import React, { Component } from 'react'
import { Image, View, Text, TextInput, Button, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { userEdit, userSubmit } from '../actions';

// headerRight: (
//   <Button
//     title={isInfo ? 'Done' : `info`}
//     onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})} />
// ),

class Login extends Component {
  static navigationOptions = {
    title: 'WarsStar - Login',
  };
  render() {
    if(!this.props.loggedUser){
      return (
        <View style={styles.container}>
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{!this.props.user ? `Enter you credential!`:''}</Text>
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>{this.props.user ? `Welcome, ${this.props.user}!` : ''}</Text>
          <TextInput
          style={{height: 40, width:100, borderColor: 'black', borderWidth: 1, backgroundColor:'white'}}
          onChangeText={(text)=>this.props.editUser(text)}
          value={this.props.user}/>
          <Button
          disabled={this.props.user?false:true}
          color='green'
          onPress={
            ()=>{
              this.props.submitUser(this.props.user)
              this.props.editUser('')
            }
          }
          title='Start Session'/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TouchableHighlight style={{height:450}} onPress={() => this.props.navigation.navigate('HitmanTab', { loggedUser: `${this.props.loggedUser}` })}>
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
        <Button
        style={{alignItem:'flex-start'}}
        color='red'
        onPress={
          ()=>{
            this.props.submitUser('')
          }
        }
        title='Wrong Credential?'/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loggedUser: state.loggedUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (user) => dispatch(userEdit(user)),
    submitUser: (user) => dispatch(userSubmit(user)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)