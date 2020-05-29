const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: './src/frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: 'assets/app-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'production',
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ManifestPlugin(),
    new CompressionWebpackPlugin({
      test: /\.js$|\.css$/,
      filename: '[path].gz',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/app-[hash].css',
    }),
  ],
};
