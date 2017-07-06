import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import styles from './src/myStyles'
import { Home } from './src/components/home'
import { Login } from './src/components/login'
import { KillList } from './src/components/killList'
import { HitmanSelfie } from './src/components/camera'
import { Chat } from './src/components/chat'

const HitmanTab = TabNavigator({
  KillList: { screen: KillList },
  HitmanSelfie: { screen: HitmanSelfie },
  Chat: { screen: Chat },
});

HitmanTab.navigationOptions = {
  title: 'Trooper\'s page',
};

const WarsStar = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  HitmanTab: { screen: HitmanTab },
});


AppRegistry.registerComponent('WarsStar', () => WarsStar);
