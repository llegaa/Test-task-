import {NavLink} from "react-router-dom";
import cn from "classnames";
import style from "./AnalysisNav.module.css";

export function AnalysisNav() {
    return (<div className={style['container']}>
        <NavLink className={({isActive}) => cn(style['link'], {
            [style.active]: isActive
        })} to='/analytics/gender'>Пол</NavLink>
        <NavLink className={({isActive}) => cn(style['link'], {
            [style.active]: isActive
        })} to='/analytics/country'>Страны</NavLink>
        <NavLink className={({isActive}) => cn(style['link'], {
            [style.active]: isActive
        })} to='/analytics/age'>Возраст</NavLink>
    </div>)
}