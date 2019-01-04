module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        'last 2 versions',
        'IE >= 11',
        'iOS >= 9',
      ],
    },
    'postcss-object-fit-images': {},
    cssnano: {},
  },
};
