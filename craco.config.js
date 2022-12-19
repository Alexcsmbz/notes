/* eslint-disable @typescript-eslint/no-var-requires */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin(),
      ],
    },
  },
};
