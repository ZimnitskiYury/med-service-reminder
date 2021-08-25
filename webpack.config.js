const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


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
      filename: '[name].bundle.js',
      publicPath: isDevelopment
        ? '/'
        : '/med-service-reminder/',
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
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
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
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          react: {
            test: /[/\\]node_modules[/\\]((react).*)[/\\]/,
            name: 'react',
            chunks: 'all',
          },
          commons: {
            test: /[/\\]node_modules[/\\]((?!react).*)[/\\]/,
            name: 'common',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      // @ts-ignore
      new StylelintPlugin({ fix: true }),
      new CleanWebpackPlugin(),
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
          filename: 'css/[name].[contenthash].css',
          chunkFilename: '[id].css',
        })]),
    ],
  };
};
