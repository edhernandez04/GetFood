export const setLocation = (latitude, longitude) => {
    return {
        type: "SET_LOCAL",
        location: {
            currLatitude: latitude,
            currLongitude: longitude
        }
    }
}

export const setZip = zipCode => {
    return {
        type: "SET_CODE",
        zipCode: zipCode
    }
}