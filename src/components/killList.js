import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import Table from 'react-native-simple-table'
// import axios from 'axios'
import { connect } from 'react-redux'
import { dataLoad, userSubmit } from '../actions'
import { NavigationActions } from 'react-navigation'

class KillList extends Component {
  constructor(){
    super()
    this.state = {
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
    if(this.props.data.length!==0){
      if(this.props.data[0]==='error'){
        return (
          <View style={styles.container}>
            <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Connection error. Please Try Again Later</Text>
          </View>
        )
      }
      return (
        <View style={styles.container}>
          <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>List of Targets:</Text>
          <Table height={500} columnWidth={70} columns={this.state.columns} dataSource={this.props.data} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Spinner visible={true} textContent={'Loading.. Don\'t kill the browser, or I\'ll kill you!'} textStyle={{color: '#FFF'}} />
      </View>
    )
  }
  componentDidMount(){
    this.props.loadData()
  }

    // componentDidMount(){
    //   axios.get('http://swapi.co/api/people/')
    //   .then(result=>{
    //     var data = result.data.results
    //     this.props.loadData(data)
    //     setTimeout(()=>
    //     this.setState({
    //       spinnerVisibility: false
    //     })
    //     ,500)
    //   })
    // }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    loggedUser: state.loggedUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(dataLoad()),
    submitUser: (user) => dispatch(userSubmit(user)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(KillList)