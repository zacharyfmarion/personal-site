const images = require('remark-images');
const emoji = require('remark-emoji');

const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
    ? require('next/constants') // Get values from `next` package when building locally
    : require('next-server/constants'); // Get values from `next-server` package when building on now v2

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {
      target: 'serverless',
    };
  }

  const withMDX = require('@zeit/next-mdx')({
    extension: /\.mdx?$/,
    options: {
      mdPlugins: [images, emoji],
    },
  });

  return withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    target: 'serverless',
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
};
