import express from 'express';
import React from 'react';
// import ReactDom from 'react-dom';
// 注意是什么包体
import ReactDOMServer from 'react-dom/server';
import {TestPage} from "../share/test";

const app = express();

app.get('', (req, res) => {
    console.log('get ')
    // 路由匹配
    const Component = TestPage
    const string = ReactDOMServer.renderToString(<Component />)
    // 这块应该读取html。然后插入进去
    res.send(string)
    // 获取后返回？
})
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