import style from "./Button.module.css"

export function Button({...props}) {
    return <button {...props} className={style['button']}>Сбросить настройки</button>
}