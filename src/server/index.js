//Punto de entrada para que funcione la app

require('ignore-styles')

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
})

//cargamos los assets desde el lado del server
require('asset-require-hook')({
  extensions: ['png', 'jpg', 'gif', 'mp4'],
  name: '/assets/[hash].[ext]',
})
//llamamos archivo server:
require('./server')
