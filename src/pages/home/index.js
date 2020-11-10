import React, {useEffect} from 'react'
import Css from "../../assets/css/home/index/index.module.css"

function IndexComponent() {
    useEffect(() => {
        // eslint-disable-next-line no-undef
        // console.log($(".app").html())
    }, [])
    return (
        <div className="app">
            我是首页
            <div className={Css['header']}>我是头部</div>
        </div>
    )
}

export default IndexComponent
