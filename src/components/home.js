import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { LoginButton } from './loginButton'
import { connect } from 'react-redux'

import { userSubmit, dataReset } from '../actions'

class Home extends Component {
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
        <LoginButton  navigate={this.props.navigation.navigate}/>
      </View>
    );
  }
  componentDidMount(){
    setTimeout(()=>{
      this.props.submitUser('')
      this.props.resetData()
    },1000)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => dispatch(userSubmit(user)),
    resetData: () => dispatch(dataReset()),
  }
}

export default connect(null,mapDispatchToProps)(Home)