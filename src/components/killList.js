import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import Table from 'react-native-simple-table'
import axios from 'axios'

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
    title: 'Kill List',
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