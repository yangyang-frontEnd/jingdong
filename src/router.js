import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import IndexComponent from "./pages/home";

function RouterComponent() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={IndexComponent}/>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterComponent
