/* eslint-disable */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['i.scdn.co', 'pbs.twimg.com', 'tanyapowell.s3.eu-west-1.amazonaws.com'],
  },
});
