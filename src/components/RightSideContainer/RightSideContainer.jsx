import style from "./RightSideContainer.module.css"

export function RightSideContainer({children}) {
    return <div className={style['container']}>{children}</div>
}