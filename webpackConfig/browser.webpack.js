module.exports = {
    entry: '/browser/index.js',
    output: '/build/main.js',
    haha: {
        modules: [
            {
                test: 'jsx jx',
                loader: 'file-loader'
            },
            {
                test: '\/$css\/',
                loader: ["style-loader", "css-loader"]
            }
        ]
    }
}