import React from 'react';
import ReactDom from 'react-dom';
import {TestPage} from "../share/test";
console.log(ReactDom);
// 这块为什么是jsx？
ReactDom.render(<TestPage />, document.querySelector('#app'));
