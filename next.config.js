const images = require('remark-images');
const emoji = require('remark-emoji');

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [images, emoji],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  webpack: (config) => {
    config.resolve.alias['next-mdx-import-source-file'] = 'private-next-root-dir/mdx-components';
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config;
  },
});
