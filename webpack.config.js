module.exports = {
  rules: [
    {
      test: '/.s(c|a)ss$/',
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            indentedSyntax: true
          }
        }
      ]
    }
  ],
  externals: {
    _: 'loadash',
    moment: 'moment'
  }
};
