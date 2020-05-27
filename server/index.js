import express from 'express';
import React from 'react';
import ReactDom from 'react-dom';
import {TestPage} from "../share/test";


express.listen((req, res) => {
    // 路由匹配
    const Component = TestPage
    const string = ReactDom.renderToString(Component)
    // 这块应该读取html。然后插入进去
    res.end(string)
    // 获取后返回？
}, '5000')


express.listen((req, res) => {
    // 路由匹配
    const Component = TestPage
    const readableString = ReactDom.renderToStringAsyn(Component)
    // res是writeable
    readableString.pipe(res)
    // 获取后返回？
}, '5000')

/*
router怎么玩？
listen怎么玩？
static怎么玩？
 */