import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Camera from 'react-native-camera'

export class HitmanSelfie extends Component {
  constructor(){
    super()
    this.state = {
      camera:'front'
    }
  }
  static navigationOptions = {
    title: 'Take a selfie!',
  };
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam)=>{
            this.camera = cam
          }}
          style={{width:350,height:450}}
          type={this.state.camera==='front'? Camera.constants.Type.front : Camera.constants.Type.back}
        >
          <Text
            style={{backgroundColor:(this.state.camera==='front'?'yellow':'pink'),alignSelf:'flex-end'}}
            onPress={()=>this.setState({camera:(this.state.camera==='front'?'back':'front')})}
            alignSelf='flex-end'
          >[FLIP]
          </Text>
        </Camera>
        <Text
          style={{fontSize:20,backgroundColor:'white',textAlign:'center',alignSelf:'center'}}
          onPress={this.takePicture.bind(this)}
        >[CAPTURE]
        </Text>
      </View>
    )
  }
  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}


// type={Camera.constants.Type.front}
// style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}
// style={{justifyContent:'flex-start',alignItems:'center'}}


