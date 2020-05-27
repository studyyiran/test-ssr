module.exports = {
    entry: './browser/index.js',
    output: './build/main.js',
    module: {
        rules: [
            {
                test: '/\.(jsx|jx)$/',
                loader: 'babel-loader'
            },
            {
                test: '/\.css$/',
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}
