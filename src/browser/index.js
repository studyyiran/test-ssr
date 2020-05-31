import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {App} from "../app";
console.log(ReactDom);
// 这个用来标注当前渲染是什么端，也挺好的
const dom = document.querySelector('#currentenv')
dom.innerHTML = 'isclient'
// 这块为什么是jsx？
// 这块需要用这个。但是是否使用hydrate有什么区别呢？我认为是有没有销毁组件的区别？
// 加在这里的原因是因为，我们在入口处，就直接区分server和client的路由差异。
// 但是这两个路由究竟有什么不同呢？
ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#app'));
// ReactDom.hydrate(<TestPage />, document.querySelector('#app'));
