import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
          style={{width:300,height:400}}
          aspect={Camera.constants.Aspect.fill}
          type={this.state.camera==='front'? Camera.constants.Type.front :Camera.constants.Type.back}
        >
          <Text
            style={{backgroundColor:'white',alignSelf:'flex-end'}}
            onPress={()=>this.setState({camera:(this.state.camera==='front'?'back':'front')})}
            alignSelf='flex-end'
          >[FLIP]
          </Text>
        </Camera>
        <Text
          style={{backgroundColor:'white',textAlign:'center',alignSelf:'center'}}
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


