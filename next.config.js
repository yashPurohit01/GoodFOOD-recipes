const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images:{
    domains :[
      'www.themealdb.com'
     ]
  },
  reactStrictMode: true,
}
