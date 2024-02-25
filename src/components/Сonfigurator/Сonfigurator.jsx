import {Dropdown} from "../Dropdown/Dropdown.jsx";
import style from "./Configurator.module.css"
import {useContext, useEffect, useRef, useState} from "react";
import {TableContext} from "../../context/table.context.jsx";
import {Button} from "../Button/Button.jsx";
import TableSets from "../TableSets/TableSets.jsx";
import cn from "classnames"

const age = ["Возрастание", "Убывание"]
const gender = ["Мужской", "Женский"]
const marytal = ["Свободен", "Разведен", "В браке"]

function Configurator() {
    const {sets, setSets} = useContext(TableContext)
    const [tableSetsActive, setTableSetsActive] = useState(false)
    const [tableSets, setTableSets] = useState({
        name: true,
        gender: true,
        birthday: true,
        email: true,
        phone: true,
        post: true,
        maritalStatus: true,
        citizenship: true
    })
    const setButRef = useRef(null)
    const setWinRef = useRef(null)
    const seting = (input) => {
        return (set) => {
            setSets(prevState => {
                return {...prevState, [`${input}`]: set, curPage: 0}
            })
        }
    }
    const clear = () => {
        setSets(prevState => {
            return {
                ...prevState,
                age: 0, gender: 0, marytal: 0
            }
        })
    }

    const closeDropdown = (event) => {
        if (setButRef.current && !setButRef.current.contains(event.target)) {
            if (setWinRef.current && !setWinRef.current.contains(event.target)) {
                setTableSetsActive(false);
            }
        }
    };
    useEffect(() => {
        document.addEventListener('click', closeDropdown)
        return () => {
            document.removeEventListener('click', closeDropdown)
        }
    }, [])
    return (
        <div className={style['container']}>
            <div className={style['inputs']}>
                <Dropdown set={sets.age} params={seting('age')} title={age[sets.age - 1] ?? 'Возраст'} inside={age}/>
                <Dropdown set={sets.gender} params={seting('gender')} title={gender[sets.gender - 1] ?? 'Пол'}
                          inside={gender}/>
                <Dropdown set={sets.marytal} params={seting('marytal')}
                          title={marytal[sets.marytal - 1] ?? 'Семейной положение'} inside={marytal}/>
            </div>
            <div className={style['right-part']}>
                {(sets.age !== 0 || sets.gender !== 0 || sets.marytal !== 0) && <Button onClick={clear}/>}
                <button ref={setButRef} className={style['sets']} onClick={() => {
                    setTableSetsActive(p => !p)
                }}>
                    <img className={cn({[style['activeImg']]: tableSetsActive})} src='/set.png' alt='Настройки'/>
                </button>
                {tableSetsActive && <TableSets ref={setWinRef} tableSets={tableSets} setTableSets={setTableSets}/>}
            </div>
        </div>
    )
}

export default Configurator