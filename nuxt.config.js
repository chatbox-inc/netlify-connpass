// const nodeExternals = require('webpack-node-externals')

module.exports = {
  /*
  ** Build configuration
  */
  env: {
    FRONT_API_URL: process.env.FRONT_API_URL
  },
  build: {
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  generate: {
    routes (callback) {
      const {api} = require('./src/events')
      require('dotenv').config()
      return api().then((result) => {
        const routes = result.map((event) => {
          return `/event/${event.event_id}`
        })
        callback(null, routes)
      }).catch(callback)
    }
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt'
  ],
  proxy: {
    '/events': 'http://localhost:9000'
  },
}
