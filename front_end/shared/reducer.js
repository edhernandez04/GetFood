let initialState = {
    currLatitude: null,
    currLongitude: null,
    zipCode: 0,
    searchParams: '',
    bizResults: []
}
  
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'findCoordinates' :
            findCoordinates()
            return {...state, currLatitude: initialState.currLatitude, currLongitude: initialState.currLongitude}
        case 'findZipCode' :
            findZipCode()
            return {...state, zipCode: initialState.zipCode}
        default:
            return initialState
    } 
}

const findZipCode = () => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${state.currLatitude},${state.currLongitude}&key=AIzaSyCiZESTsWLPZXB4A9giVO_F4Lz0dJB2OKM`)
    .then(resp => resp.json())
        .then(locations => initialState.zipCode = parseInt(locations.results[0].address_components[7].long_name))

const findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
            initialState.currLatitude = parseFloat(JSON.stringify(position.coords.latitude)), 
            initialState.currLongitude = parseFloat(JSON.stringify(position.coords.longitude))
        }, 
            error => Alert.alert(error.message),   
            { enableHighAccuracy: true }
    )
}

  export default reducer