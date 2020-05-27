module.exports = {
    entry: '/server/index.js',
    output: '/build/server.js',
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