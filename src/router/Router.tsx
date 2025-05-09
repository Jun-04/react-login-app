import { memo, VFC } from "react"
import { Route, Switch } from "react-router-dom"

import { Login } from "../components/page/Login";
import { homeRoutes } from "./HomeRouters";
import { Page404 } from "../components/page/Page404";

export const Router: VFC = memo(()=> {
  return (
    <Switch>
    <Route exact path="/">
        <Login />
    </Route>
    <Route path="/home" render={({match: { url }}) => (
        <Switch>
            {homeRoutes.map((route)=> (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                  >
                    {route.children}
                </Route>
            ))}
        </Switch>
    )}
    />
    <Route path="*">
        <Page404 />
    </Route>
    </Switch>
  )
});
