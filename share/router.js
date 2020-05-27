import React from 'react';
import {StaticRouter, Router, Route} from 'react-router-dom'
import {routerConfig} from "./routerConfig";
// 这块应该咋做来着？应该是移动端和server分开来
const history = StaticRouter()

return <Router history={history}>
    {
        routerConfig.map(({component, path}) => {
            return <Route path={path} component={component}/>
        })
    }
</Router>
