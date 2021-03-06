const path = require('path')

module.exports = {
    // 不然webpack也不知道，你是什么环境，这导致一些包例如path会有问题
    target: "node",
    node: {
        __dirname: false,
    },
    // 这个entry是怎么定的，我还是没搞懂。
    entry: './src/server/index.js',
    // output: './browser/index.js',
    output: {
        // output的路径麻烦一些 revolve
        path:path.resolve(__dirname, '../build'),
        // filename
        filename: 'server.js'
    },
    module: {
        // rule包括了 test 和 rule
        rules: [
            {
                // 正则不要带冒号
                test: /\.(jsx|js)$/,
                // exclude: /(node_modulse)/,
                use: ['babel-loader'],
            },
            // server不能有style-loader。
            {
                test: /\.css$/,
                use: ["css-loader"]
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