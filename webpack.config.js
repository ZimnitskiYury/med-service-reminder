const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');


module.exports = (
  environment, argv,
) => {
  let isDevelopment = false;

  if (argv.mode === 'development') {
    isDevelopment = true;
  }

  return {
    entry: [
      'babel-regenerator-runtime',
      './src/app/app.jsx',
    ],
    output: {
      path: path.join(
        __dirname,
        '/dist',
      ),
      filename: 'index.bundle.js',
      publicPath: '/med-service-reminder/',
    },
    devServer: {
      port: 3000,
      watchContentBase: true,
      historyApiFallback: true,
    },
    devtool: isDevelopment
      ? 'eval-source-map'
      : false,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          resolve: {
            extensions: [
              '.js',
              '.jsx',
            ],
          },
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                titleProp: true,
              },
            },
            'file-loader',
          ],
        },
        {
          test: /\.(less|css)$/,
          use: [
            isDevelopment
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      // @ts-ignore
      new StylelintPlugin({ fix: true }),
      new webpack.EnvironmentPlugin({
        NODE_ENV: isDevelopment
          ? 'development'
          : 'production',
        RUN_ENV: isDevelopment
          ? 'development'
          : 'production',
      }),
      ...(isDevelopment
        ? []
        : [new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
          ignoreOrder: false,
        })]),
    ],
  };
};
