const request = require('request')

const getForecast = (lat, lon, calllback) => {
    const url = 'https://api.darksky.net/forecast/614e001a636f32af47e1bff7ad088504/' + lat + ',' + lon + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            calllback('Unable to connect to wheater service!')
        } else if (body.error) {
            calllback('Unable to find location!')
        } else {
            calllback(undefined, body.daily.data[0].summary + " It's currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance to rain")
        }
    })
}

module.exports = {
    getForecast
}