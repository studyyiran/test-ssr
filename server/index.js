import express from 'express';
import React from 'react';
// import ReactDom from 'react-dom';
// 注意是什么包体
import ReactDOMServer from 'react-dom/server';
import {TestPage} from "../share/test";
const fs = require('fs')
const path = require('path')

const app = express();

app.get('', (req, res) => {
    console.log('get ')
    // 路由匹配
    const Component = TestPage
    renderToString(req, res, Component)
    // renderToNodeStream(req, res, Component)


    // 获取后返回？
})

function renderToString(req, res, Component) {
    const result = ReactDOMServer.renderToString(<Component />)
    // 这块应该读取html。然后插入进去
    // 不知道为什么这里获取不到。这令我务必困惑。非常困惑。
    // 为什么他会认为我在根路径，而不是server.js的文件路径呢？
    // console.log(__dirname)
    // console.log(path.resolve(__dirname, '../'))
    let template = fs.readFileSync("build/index.html", {
        encoding: "utf-8"
    });
    console.log(template)
    template = template.replace('<div id="app"></div>', result)
    // send 只能写一次
    console.log(template)
    res.send(template);
}

function renderToNodeStream(req, res, Component) {
    const readableString = ReactDOMServer.renderToNodeStream(<Component />)
    // write和end 可以反反复复好几次
    readableString.pipe(res, {end: false})
    readableString.on('end',() => {
        res.write('finish');
        res.end();
    })
    res.write()
}
app.listen('5000', () => {
    console.log('have listen')
})


// express.listen((req, res) => {
//     // 路由匹配
//     const Component = TestPage
//     const readableString = ReactDom.renderToStringAsyn(Component)
//     // res是writeable
//     readableString.pipe(res)
//     // 获取后返回？
// }, '5000')

/*
router怎么玩？
listen怎么玩？
static怎么玩？
 */