const path = require('path')
import webpack from 'webpack'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  //reaload: refresca toda la aplicaicon en tiempo real, mientras trabajemos
  entry: ['./src/frontend/index.js','webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'], //archivo origen
  mode: 'development',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'), //carpeta donde guardara todo
    filename: 'assets/app.js', //archivo principal
  },
  resolve: {
    extensions: ['.js', '.jsx'], //extensiones que usaremos en nuestro proyecto
  },
  module: {
    //reglas para nuestro proyecto
    rules: [
      {
        //identificacion de nuestros archivos js y jsx y exlusion de node modules
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          //usar loader de babel
          loader: 'babel-loader',
        },
      },
      {
        // permite trabajar con archivos html
        test: /\.html$/,
        use: [
          //usamos loader instalado
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
            {
                'loader': 'file-loader',
                options:{
                    name: 'assets/[hash].[ext]'
                }
            }
        ]
    },
    ],
  },
  //nos permite manejar la historia
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    //plugins necesitados
    //refrescado en tiempo real
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/app.css',
    }),
  ],
}
