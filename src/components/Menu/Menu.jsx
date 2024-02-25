import style from "./Menu.module.css"
import {NavLink} from "react-router-dom";
import cn from "classnames"

export function Menu() {
    return (
        <div className={style['sidebar']}>
            <img className={style['grath']} src="/grath.png" alt="Изображение графика"/>
            <NavLink className={({isActive}) => cn(style['link'], {
                [style.active]: isActive
            })}
                     to={'/analytics/dashboard'}>
                <img src='/analytic.png' alt='Иконка анализ'/>
                Аналитика
            </NavLink>
            <NavLink className={({isActive}) => cn(style['link'], {
                [style.active]: isActive
            })}
                     to={'/list'}>
                <img src='/list.png' alt='Иконка список'/>
                Список
            </NavLink>
        </div>
    )
}