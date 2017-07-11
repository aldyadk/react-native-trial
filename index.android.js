import { AppRegistry, View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import React from 'react'
import { Provider, connect } from 'react-redux'

import store from './src/store/'
import styles from './src/myStyles'
import Home from './src/components/home'
import Login from './src/components/login'
import KillList from './src/components/killList'
import { HitmanSelfie } from './src/components/camera'
import { Chat } from './src/components/chat'

const HitmanTab = TabNavigator({
  KillList: { screen: KillList },
  HitmanSelfie: { screen: HitmanSelfie },
  Chat: { screen: Chat },
});

const mapStateToProps = (state) => {
  return {
    data: state.data,
    loggedUser: state.loggedUser
  };
}

HitmanTab.navigationOptions = ({ navigation })=>{
  return{
    title: 'Welcome, '+navigation.state.params.loggedUser,
    headerRight:(
      <Button
      title='End Session'
      onPress={
        ()=>{
          navigation.dispatch(
            NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home'})
              ]
            })
          )
        }
      } />
    )
  }
};

const ConnectedHitmanTab = connect(mapStateToProps)(HitmanTab);

const WarsStar = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  HitmanTab: { screen: HitmanTab },
});

class Appss extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <WarsStar />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('WarsStar', () => Appss);
