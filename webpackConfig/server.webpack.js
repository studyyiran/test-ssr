module.exports = {
    entry: './server/index.js',
    output: './build/server.js',
    module: {
        rules: [
            {
                test: '/\.(jsx|jx)$/',
                loader: 'file-loader'
            },
            {
                test: '/\.css$/',
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