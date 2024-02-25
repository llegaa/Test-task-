import style from "./Card.module.css"

export function Card({children}) {
    return (
        <div className={style['card']}>{children}</div>
    )
}