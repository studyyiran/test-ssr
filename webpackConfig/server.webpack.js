const path = require('path')

module.exports = {
    // 不然webpack也不知道，你是什么环境，这导致一些包例如path会有问题
    target: "node",
    node: {
        __dirname: false,
    },
    entry: './server/index.js',
    // output: './browser/index.js',
    output: {
        // output的路径麻烦一些 revolve
        path:path.resolve(__dirname, '../build'),
        // filename
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                // 正则不要带冒号
                test: /\.(jsx|js)$/,
                // exclude: /(node_modulse)/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}


/*
1. 路径
2. 整体
3. loader
4. jax和js有什么区别
 */