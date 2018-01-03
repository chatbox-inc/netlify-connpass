import api from '../service/http'

exports.handler = (event, context, callback) => {
  api.get_ss().then((result) => {
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
