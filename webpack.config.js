const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
compressionWebpackPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')


require('dotenv').config()
const isDev = (process.env.ENV === 'development')
const entry = ['./src/frontend/index.js'];

if(isDev){
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true')
}
module.exports = {
  //reaload: refresca toda la aplicaicon en tiempo real, mientras trabajemos
  entry: entry, //archivo origen
  mode: process.env.ENV,
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'src/server/public'), //carpeta donde guardara todo
    filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js', //archivo principal
  },
  resolve: {
    extensions: ['.js', '.jsx'], //extensiones que usaremos en nuestro proyecto
  },
  optimization:{
    minimize:true,
    minimizer:[new TerserPlugin()]
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
    isDev ? new webpack.HotModuleReplacementPlugin() : ()=>{},
    isDev ? () => {} : new compressionWebpackPlugin({
      test: /\.js$|\.css$/,
      filename: '[path].gz'
    }),
        isDev ? () => { } :  new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
  ],
}
