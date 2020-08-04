//Punto de entrada para que funcione la app

require('ignore-styles')

//recibe una funcion con dos elements
//nos permite hacer un bin en tiempo real de cualquier paquete que necesitemos
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
})

//cargamos los assets desde el lado del server
require('asset-require-hook')({
  extensions: ['png', 'jpg', 'gif', 'mp4'],
  name: '/assets/[hash].[ext]',
})
//llamamos archivo server:
require('./server')
