const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')

const config = {
  debug: true,
  entry: [
    './src/app',
  ],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'public',
    historyApiFallback: true,
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: 'eslint',
    //   },
    // ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
        ],
      },
      {
        test: /\.css$/,
        exclude: /src/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(jpg|png|ttf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'url?limit=100000',
      },
      {
        test: /\.svg$/,
        loaders: ['babel', 'svg-react'],
      },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map'
  config.devServer = {}
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ]
}

module.exports = config
