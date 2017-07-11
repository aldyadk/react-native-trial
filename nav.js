import { StackNavigator, TabNavigator } from 'react-navigation';
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

export default WarsStar = StackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  HitmanTab: { screen: HitmanTab },
});