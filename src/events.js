import axios from 'axios'

const api = {
  async get () {
    const url = 'https://connpass.com/api/v1/event/'
    const params = {
      series_id: process.env.CONNPASS_SERIES_ID
    }
    const result = await axios.get(url, {params})
    return result.data.events
  }
}

exports.handler = (event, context, callback) => {
  api.get().then((result) => {
    console.log(result)
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(result)
    })
  }).catch((e) => {
    console.log(e)
    callback(null, {
      statusCode: 200,
      body: e
    })
  })
}
