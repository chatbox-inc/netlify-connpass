import axios from 'axios'

axios.defaults.baseURL = process.env.FRONT_API_URL

export default {
  async get () {
    const result = await axios.get('/events')
    return result
  }
}
