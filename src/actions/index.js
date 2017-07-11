import axios from 'axios'
export const userSubmit = (user) => {
  return {
    type: 'SUBMIT_USER',
    payload: user,
  };
}

export const userEdit = (user) => {
  return {
    type: 'UBAH_USER',
    payload: user,
  };
}

// export const dataLoad = (data) => {
//   return {
//     type: 'LOAD_DATA',
//     payload: data,
//   };
// }

export const dataLoad = () => {
  return (dispatch) =>{
    axios.get('http://swapi.co/api/people/')
    .then(response=>{
      var data = response.data.results
      dispatch({
        type: 'LOAD_DATA',
        payload: data
      })
    })
    .catch(()=>{
      dispatch({
        type: 'LOAD_DATA',
        payload: ['error']
      })
    })
  }
}

export const dataReset = () => {
  return {
    type: 'RESET_DATA',
  };
}