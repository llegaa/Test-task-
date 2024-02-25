import style from "./Error.module.css"
import {Link} from "react-router-dom";

export function Error() {
    return (<div className={style['container']}>
        <img src='/error.jpg' alt='Error'/>
        <div>Что-то пошло не так...</div>
        <div className={style['main-text']}>Такой страницы не существует</div>
        <Link to={'/analytics/dashboard'}>Вернуться на главную страницу</Link>
    </div>)
}