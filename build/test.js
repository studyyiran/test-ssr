const fs = require('fs')

let template = fs.readFileSync("index.html", {
    encoding: "utf-8"
});

template = template.replace('<div id="app"></div>', 123)

console.log(template)