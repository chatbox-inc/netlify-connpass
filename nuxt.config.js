// const nodeExternals = require('webpack-node-externals')

module.exports = {
  /*
  ** Build configuration
  */
  build: {
    // extend (config, { isServer }) {
    //   if (isServer) {
    //     config.externals = [
    //       nodeExternals({
    //         whitelist: [/^.\/service\/http.js/]
    //       })
    //     ]
    //   }
    // }
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
  // generate: {
  //   routes (callback) {
  //     // import api from './service/http.js'
  //     const api = require('./service/http.js')
  //     require('dotenv').config()
  //     return api.get_ss().then((result) => {
  //       const routes = result.map((event) => {
  //         return `/events/${event.event_id}`
  //       })
  //       routes.push("/")
  //       callback(null, routes)
  //     }).catch(callback)
  //   }
  // },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa'
  ],
  proxy: {
    '/events': 'http://localhost:9000'
  },
}
