import style from "./Pages.module.css"
import {useEffect, useState} from "react";
import cn from "classnames"

export function Pages({length, setPage, curPage}) {
    const [divArray, setDivArray] = useState([]);
    const [sliceArray, setSliceArray] = useState([]);
    useEffect(() => {
        const newDivArray = Array.from({length}, (_, index) => (
            <div onClick={() => setPage(index)} className={cn(style['page'], {
                [style['active']]: curPage === index
            })} key={index}>{index + 1}
            </div>
        ))
        let newSliceArray;
        if (length > 5) {
            if (curPage < 2) {
                newSliceArray = newDivArray.slice(0, 5);
            } else if (curPage > length - 3) {
                newSliceArray = newDivArray.slice(length - 5, length);
            } else {
                newSliceArray = newDivArray.slice(curPage - 2, curPage + 3);
            }
        } else {
            newSliceArray = newDivArray;
        }
        setDivArray(newDivArray);
        setSliceArray(newSliceArray);
    }, [length, curPage]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [curPage, setPage])
    return <div className={style['container']}>
        <img onClick={() => {
            setPage(curPage - 1)
            if (curPage < 1) {
                setPage(length - 1)
            }

        }} className={`${style['reverse']} ${style['image']}`} src='/wing.png' alt='Иконка влево трелки'/>
        {sliceArray}
        <img onClick={() => {
            setPage(curPage + 1)
            if (curPage === length - 1) {
                setPage(0)
            }
        }} className={style['image']} src='/wing.png' alt='Иконка вправо стрелки'/>
    </div>;
}