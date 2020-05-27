module.exports = {
    entry: './browser/index.js',
    output: './build/main.js',
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
