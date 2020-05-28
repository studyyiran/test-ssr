const fs = require('fs')
const path = require('path')

console.log(__dirname)
console.log(path.resolve(__dirname, '../public/index.html'))
console.log(path.resolve('hello'))

//
let template = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), {
    encoding: "utf-8"
});

template = template.replace('<div id="app"></div>', 123)

console.log(template)