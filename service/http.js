import axios from 'axios'

export default {
  get_fs () {
    try {
      const result = await axios.get('/events', {
        baseURL: process.env.FRONT_API_URL
      })
      return result.data
    } catch (e) {
      console.log(e)
      console.log(process.env.FRONT_API_URL)
      throw new Error('hogehoge')
    }
  },
  get_ss () {
    const url = 'https://connpass.com/api/v1/event/'
    const params = {
      series_id: process.env.CONNPASS_SERIES_ID
    }
    const result = await axios.get(url, {params})
    return result.data.events
  }
}
// const axios = require('axios')
//
// module.exports = {
//   async get_fs () {
//     try {
//       const result = await axios.get('/events', {
//         baseURL: process.env.FRONT_API_URL
//       })
//       return result.data
//     } catch (e) {
//       throw new Error('hogehoge')
//     }
//   },
//   async get_ss () {
//     const url = 'https://connpass.com/api/v1/event/'
//     const params = {
//       series_id: process.env.CONNPASS_SERIES_ID
//     }
//     const result = await axios.get(url, {params})
//     return result.data.events
//   }
// }
