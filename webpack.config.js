// const path = require('path')
// module.exports = {
//     entry:  './app/index.js', // 入口文件
//     output: {
//       path: path.resolve(__AAAname, 'build'), 
//       // 必须使用绝对地址，输出文件夹
//       filename: "bundle.js" 
//       // 打包后输出文件的文件名
//     }
//   }


const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundel.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        "presets": ["babel-preset-env"]
      }
    ]
  }
};