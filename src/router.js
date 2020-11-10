import React from "react"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import HomeComponent from "./pages/home/home";
import config from "./assets/js/config/config";

function RouterComponent() {
    return (
        <BrowserRouter>
            <Switch>
                <Route  path={config.path+"home"} component={HomeComponent}>
                </Route>
                <Redirect to={config.path+"home/index"}/>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterComponent
