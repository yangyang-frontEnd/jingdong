import React, {useEffect} from 'react'
import {Switch, Route} from "react-router-dom"
import Css from "../../../assets/css/home/home/index.module.css"
import IndexComponent from "../../../pages/home/index/index"
import config from "../../../assets/js/config/config";

function HomeComponent() {
    useEffect(() => {
        // <Redirect to={"home/index"}/>
    }, [])
    return (
        <div>
            <React.Fragment>
                <Switch>
                    <Route path={config.path+"home/index"} component={IndexComponent} />
                    {/*<Route path={"/home/cart"} component={CartIndex} ></Route>*/}
                    {/*<Route path={"/home/my"} component={UserIndex} ></Route>*/}
                </Switch>
            </React.Fragment>
            <div className={Css['bottom-nav']}>
                <ul>
                    <li className={Css['home']}></li>
                    <li className={Css['text']}>首页</li>
                </ul>
                <ul>
                    <li className={Css['cart']}></li>
                    <li className={Css['text']}>购物车</li>
                </ul>
                <ul>
                    <li className={Css['my']}></li>
                    <li className={Css['text']}>我的</li>
                </ul>
            </div>
        </div>
    )
}

export default HomeComponent
