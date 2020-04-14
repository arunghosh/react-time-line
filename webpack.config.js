const path = require('path');

let entry = './src/index.js';
let output = {
  path: path.join(__dirname, 'dist'),
  publicPath: '/dist/',
};

if (process.env.NODE_ENV === 'dev') {
  entry = './example/index.js';
  output = {
    path: path.join(__dirname, 'example'),
    publicPath: '/example/',
  };
}

const mode = process.env.NODE_ENV === 'dev' ? 'development' : 'production'

module.exports = {
  entry,
  mode,
  output: Object.assign(output, {
    filename: 'bundle.js',
    library: 'react-time-line',
    libraryTarget: 'umd', // universal module definition
  }),
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          }, {
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ],
  },
};
