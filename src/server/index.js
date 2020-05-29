require('ignore-styles');

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['jpg', 'git', 'png'],
  name: '/assets/[hash].[ext]',
});

require('./server');
