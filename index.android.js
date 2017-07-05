import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import Table from 'react-native-simple-table'
import axios from 'axios'

// import styles from './src/myStyles'
// import { Home } from './src/components/home'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
});

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
        <TouchableHighlight style={{height:250}}onPress={() => this.props.navigation.navigate('KillList')}>
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

export class KillList extends Component {
  constructor(){
    super()
    this.state = {
      visible: true,
      data:[],
      columns:[
        {
          title: 'Name',
          dataIndex: 'name',
          width: 105
        },
        {
          title: 'Gender',
          dataIndex: 'gender'
        },
        {
          title: 'Height',
          dataIndex: 'height'
        },
        {
          title: 'Eye Color',
          dataIndex: 'eye_color'
        },
      ]
    }
  }
  static navigationOptions = {
    title: 'WarsStar - Kill List',
  };
  render() {
    if(!this.state.visible){
      return (
        <View style={styles.container}>
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>List of Targets:</Text>
          <Table height={500} columnWidth={70} columns={this.state.columns} dataSource={this.state.data} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.visible} textContent={'Loading.. Don\'t kill the browser, or I\'ll kill you!'} textStyle={{color: '#FFF'}} />
      </View>
    )
  }
  componentDidMount(){
    axios.get('http://swapi.co/api/people/')
    .then(result=>{
      var data = result.data.results
      this.setState({
        data:data
      })
      setTimeout(()=>
      this.setState({
        visible: false
      })
      ,500)
    })
  }
}

const WarsStar = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  KillList: { screen: KillList },
});


AppRegistry.registerComponent('WarsStar', () => WarsStar);
