let initialState = {
    currLatitude: null,
    currLongitude: null,
    zipCode: 0,
    searchParams: '',
    bizResults: []
}
  
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'findLatitude' :
            return {...state, currLatitude: action.payload}
        case 'findLongitude' :
            return {...state, currLongitude: action.payload}
        case 'findZipCode' :
            return {...state, zipCode: initialState.action.payload}
        case 'bizResults' :
            return { bizResults: action.payload }
        default:
            return initialState
    } 
}

  export default reducer