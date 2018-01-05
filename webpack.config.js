const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
  const isProduction = (env === 'production')
  const CSSExtract = new ExtractTextPlugin('styles.css')
  //console.log('env:', env)

  return {
    entry: './src/app.js',
    //entry: './playground/redux-expensify.js',
    //entry: './playground/hoc.js',
  
    output: {
      path: path.join(__dirname, 'public', 'dist'),
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
          //use: ['style-loader', 'css-loader', 'sass-loader'] // if extract-text plugin not used
          use: CSSExtract.extract({
            use: [
              {loader: 'css-loader'   , options: {sourceMap: true}}, 
              {loader: 'sass-loader'  , options: {sourceMap: true}}
            ]
          })
        }
      ]
    },
  
    plugins: [CSSExtract],

    // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  
    //watch: true
  
  }
}
