const path = require('node:path');

module.exports = {
  entry: './src/ruleset.ts',
  target: 'web',
  output: {
    filename: 'ruleset.mjs',
    path: path.resolve(__dirname, 'dist'),
    chunkFormat: 'module',
    module: true,
    library: {
      type: 'module',
      export: 'default',
    },
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  externals: ['@stoplight/spectral-core', '@stoplight/spectral-functions', '@stoplight/spectral-runtime'],
  experiments: {
    outputModule: true,
  }
};
