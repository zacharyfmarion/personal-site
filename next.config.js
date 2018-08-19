const images = require('remark-images');
const emoji = require('remark-emoji');

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images, emoji],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { dev, isServer, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true, // true outputs JSX tags
          },
        },
      ],
    });
    return config;
  },
});
