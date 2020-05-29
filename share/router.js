import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {routerConfig} from "./routerConfig";
// 这块应该咋做来着？应该是移动端和server分开来

// 这块实际上就是路由内部匹配。
export const RootRouter = () => {
    return <div>
        hehe
        <Switch>
            {routerConfig.map((routerInfo) => {
                return <Route {...routerInfo} />
            })}
        </Switch>
    </div>
}

