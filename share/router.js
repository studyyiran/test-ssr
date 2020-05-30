import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {routerConfig} from "./routerConfig";
// 这块应该咋做来着？应该是移动端和server分开来
import a from './index.css';
// css-loader会弄出来一个数组
console.log(a)
// 这块实际上就是路由内部匹配。
export const RootRouter = () => {
    return <div>
        <div onClick={() => {
        console.log(a)}
        }>hehe</div>
        <Switch>
            {routerConfig.map((routerInfo) => {
                return <Route {...routerInfo} />
            })}
        </Switch>
    </div>
}

