const initialState = {
  user:'',
  loggedUser: '',
  data: []
}

export default (state = initialState, action)=>{
  if(action.type === 'UBAH_USER'){
    return {...state, user: action.payload}
  }
  if(action.type === 'SUBMIT_USER'){
    return {...state, loggedUser: action.payload}
  }
  if(action.type === 'LOAD_DATA'){
    return {...state, data: action.payload}
  }
  if(action.type === 'RESET_DATA'){
    return {data: []}
  }
  return state
}