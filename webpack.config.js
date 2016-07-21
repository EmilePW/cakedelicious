module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  devServer: {
    inline: true,
    port: 3003
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
