import axios from 'axios'

const connpass = {
  async get () {
    const url = 'https://connpass.com/api/v1/event/'
    const params = {
      series_id: 1712
    }
    const result = await axios.get(url, {params})
    return result.data.events
  }
}

exports.handler = (event, context, callback) => {
  connpass.get().then((result) => {
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
