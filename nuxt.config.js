
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/bootstrap-grid.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/bootstrap-reboot.css',
    '@/assets/css/custom.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/functions/api.js'},
    { src: '~/plugins/owl.js', mode: 'client' }, // Only works on client side
    { src: '~/plugins/final.js', mode: 'client' } // Only works on client side
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
  ],

  axios: {
    proxy: true // Can be also an object with default options
  },

  // proxy: {
  //   '/api/': { target: 'https://api.nasa.gov', pathRewrite: {'^/api/': ''} },

  //   '/api2/': 'http://api.another-website.com'
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
