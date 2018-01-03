

const path = require('path')

module.exports = {
  entry: './src/app.js',
  //entry: './playground/redux-expensify.js',
  //entry: './playground/hoc.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module: {
    rules:[
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
        /*
        // either below or .babelrc config file. the below does not work with Jest tests
        query: { 
          "presets": ["env","react"],
          "plugins": ["transform-class-properties", "transform-object-rest-spread"]
        }
        */
      }, {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },

  watch: true

}