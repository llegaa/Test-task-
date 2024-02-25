import style from "./Layout.module.css"
import {Menu} from "../components/Menu/Menu.jsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {TextContextProvider} from "../context/table.context.jsx";
import {useEffect} from "react";

export function Layout() {
    const navigate = useNavigate()
    const url = useLocation()
    useEffect(() => {
        if (url.pathname === '/')
            navigate('/analytics/dashboard')
    }, [])
    return (
        <div className={style['container']}>
            <div className={style['left-side']}><Menu/></div>
            <div className={style['right-side']}><TextContextProvider><Outlet/></TextContextProvider></div>
        </div>
    )
}
