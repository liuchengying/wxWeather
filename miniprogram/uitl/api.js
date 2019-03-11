import config from '../uitl/config'
// const request = require('request')
const mapKey = config.MAP_API_KEY
const weatherKey = config.WEATHER_API_KEY
// map url
const locationUrl = 'https://apis.map.qq.com/ws/geocoder/v1/'
//天气url
const weatherUrl = 'https://free-api.heweather.net/s6/weather/forecast'
//24小时内 每小时
const everyhoursUrl = 'https://api.heweather.net/s6/weather/hourly'
// 一周内
const everyWeekUrl = 'https://api.heweather.net/s6/weather/forecast'
//空气质量
const airQualityUrl = 'https://api.heweather.net/s6/air/now'
// 实况天气
const weatherLive = 'https://api.heweather.net/s6/weather/now'
// 根据当前位置的坐标反得到当前位置的详细信息
export const getPosition = (lat, lon, success = {}, fail = {}) => {
    wx.request({
        url: locationUrl,
        header: {
            'Content-Type': 'application/json'
        },
        data: {
            location: `${lat},${lon}`,
            key: mapKey,
            get_poi: 0
        },
        success,
        fail
    })
}

// 根据location得到天气信息
export const getWeaterInfo = (lat, lon, success={}, fail={}) => {
    wx.request({
        url: weatherUrl,
        header: {
            'Content-Type': 'application/json'
        },
        data: {
            location: `${lat},${lon}`,
            lang: 'zh',
            unit: 'm',
            key: weatherKey
        },
        success,
        fail
    })
}

// 根据location信息得到24小逐小时天气情况

export const getEveryHoursWeather = (lat, lon, success={}, fail={}) => {
    wx.request({
        url: everyhoursUrl,
        header: {
            'Content-Type': 'application/json'
        },
        data: {
            location: `${lat},${lon}`,
            lang: 'zh',
            unit: 'm',
            key: weatherKey
        },
        success,
        fail
    })
}

// 根据location信息得到一周内天气情况
export const getWeekWeather = (lat, lon, success={}, fail={}) => {
    wx.request({
        url: everyWeekUrl,
        header: {
            'Content-Type': 'application/json'
        },
        data: {
            location: `${lat},${lon}`,
            lang: 'zh',
            unit: 'm',
            key: weatherKey
        },
        success,
        fail
    })
}

// 空气质量
export const getAirQuality = (lat, lon, success={}, fail={}) => {
    wx.request({
        url: airQualityUrl,
        header: {
            'Content-Type': 'application/json'
        },
        data: {
            location: `${lat},${lon}`,
            lang: 'zh',
            unit: 'm',
            key: weatherKey
        },
        success,
        fail
    })
}

// 实况天气
export const getWeatherLive = (lat, lon, success={}, fail={}) => {
    wx.request({
        url: weatherLive,
        header: {
            'Content-Type': 'application/json'
        },
        data: {
            location: `${lat},${lon}`,
            lang: 'zh',
            unit: 'm',
            key: weatherKey
        },
        success,
        fail
    })
}