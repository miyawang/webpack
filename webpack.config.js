module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {
    rules: [
        {
        // js 文件才使用 babel
            test: /\.js$/,
         // 使用哪个 loader
            use: 'babel-loader',
        // 不包括路径
            exclude: /node_modules/
        },
    ]
},

}