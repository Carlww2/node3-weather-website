const request = require('request')

const getLocation = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2FybHd3MiIsImEiOiJjanV1cTF6cDYwZ2hlNDRteDY0emMybzh1In0.d7Lau6LXmGUs8L52I1zTYA'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body.features.length) {
            callback('Unable to find location. Try another search')
        } else {
            const { place_name: location, center } = body.features[0];

            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: location
            })
        }
    })
}

module.exports = {
    getLocation
}