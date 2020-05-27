export function findZipCode() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${state.currLatitude},${state.currLongitude}&key=AIzaSyCiZESTsWLPZXB4A9giVO_F4Lz0dJB2OKM`)
    .then(resp => resp.json())
        .then(locations => zipCode = parseInt(locations.results[0].address_components[7].long_name))
    return ({type: 'findZipCode'})
}

export function findLatitude() {
    navigator.geolocation.getCurrentPosition(
        position => {
            currLatitude = parseFloat(JSON.stringify(position.coords.latitude))
        }, 
            error => Alert.alert(error.message),   
            { enableHighAccuracy: true }
    )
    return ({type: 'findLatitude'})
}

export function findLongitude() {
    navigator.geolocation.getCurrentPosition(
        position => {
            currLongitude = parseFloat(JSON.stringify(position.coords.longitude))
        }, 
            error => Alert.alert(error.message),   
            { enableHighAccuracy: true }
    )
    return ({type: 'findLongitude'})
}