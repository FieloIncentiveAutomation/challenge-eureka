const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

module.exports = withCSS({
  webpack5: false,
  webpack: config => {
    config.node = {
      fs: 'empty',
    };

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
  images: {
    domains: ['pixinvent.com'],
  },
});
