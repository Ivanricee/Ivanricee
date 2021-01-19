const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const compressionWebpackPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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
    minimizer:[new TerserPlugin()],
    splitChunks:{
      chunks: 'async',
      name:true,
      cacheGroups:{
        vendors:{
          name:'vendors', //al importar dependencias dinamicas tiene problemas por el nombre vendors
          chunks: 'all',
          reuseExistingChunk: true,
          priority:1,
          filename:isDev ? 'assets/vendor.js' : 'assets/vendor-[hash].js',
          //lo hcae siempre
          enforce: true,
          test(module,chunks){
            //busca y valida que exista, si existe obtiene el nombre del chunk
            const name = module.nameForCondition && module.nameForCondition()
            //Con una expresion regular validamos que sea diferente de vendors y
            //segundo que este dentro de node_modules
            return chunks.some(chunk => chunks.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name))
          },
        }
      }
    },
  },
  module: {
    //reglas para nuestro proyecto
    rules: [
      {
        //archivos que va a evaluar
        enforce:'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader:'eslint-loader',
      },
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
     new LoadablePlugin(),
     isDev ? new BundleAnalyzerPlugin({
      analyzerMode:  'static', //para que lo haga sólo al momento de hacer el build
      openAnalyzer:  true, //para que nos muestre el resultado inmediatamente
    }) : ()=>{},
    //plugins necesitados
    //refrescado en tiempo real
    isDev ? () => {} : new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'src/server/public')}),
    isDev ? new webpack.HotModuleReplacementPlugin() : ()=>{},
    isDev ? () => {} : new compressionWebpackPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      filename: '[path].gz'
    }),
        isDev ? () => { } :  new ManifestPlugin({ filename: 'loadable-stats', writeToDisk: true }),
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
  ],
}