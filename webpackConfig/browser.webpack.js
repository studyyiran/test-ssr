const path = require('path')

module.exports = {
    entry: './src/browser/index.js',
    // output: './browser/index.js',
    output: {
        // output的路径麻烦一些 revolve
        path:path.resolve(__dirname, '../build'),
        // filename
        filename: 'main.js'
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
