import React from 'react';
import ReactDom from 'react-dom';
import {TestPage} from "../share/test";
console.log(ReactDom);
// 这块为什么是jsx？
// 这块需要用这个。但是是否使用hydrate有什么区别呢？我认为是有没有销毁组件的区别？
ReactDom.render(<TestPage />, document.querySelector('#app'));
// ReactDom.hydrate(<TestPage />, document.querySelector('#app'));
