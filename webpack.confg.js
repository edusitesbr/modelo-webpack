//https://webpack.js.org/configuration/mode/
const path = require('path') // modelo CommonJS

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // Diretório onde sairá o bundle do webpack
  output: {
    path:path.resolve(__dirname, 'public', 'assets', 'js'),
    // Nome do arquivo que será criado pelo bundle
    filename: "bundle.js"
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        // Uso do pacote babel-loader
        loader: "babel-loader",
        options: {
          // uso do pacote @babel/env
          presets: ["@babel/env"]
        }
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  // Importante para saber em qual arquivo apontou algum erro
  devtool: "source-map"
}