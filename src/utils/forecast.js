const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6008a97550f155c7a2cf945ec1955c41&query=' + latitude + ',' + longitude+'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,"Today's Weather is ' "+ body.current.weather_descriptions[0]+" '. It's curently "+body.current.temperature+" degrees hot "+" today. Currently humidity is "+body.current.humidity+" %")
        }
    })
}

module.exports = forecast