import {useEffect, useRef, useState} from 'react';
import style from "./Dropdown.module.css"
import cn from "classnames"

export const Dropdown = ({set, title, inside, params, readOnly}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [titleInput, setTitleInput] = useState()
    const dropdownRef = useRef(null);
    useEffect(() => {
        if (!set) {
            setTitleInput(undefined)
        }
    }, [set])
    const toggleDropdown = () => {
        if (!readOnly) {
            setIsOpen(!isOpen);
        }
    };
    const setParam = (e) => {
        setTitleInput(e.target.innerText)
        params(e.target.value)
        toggleDropdown()
    }
    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', closeDropdown)
        return () => {
            document.removeEventListener('click', closeDropdown)
        }
    }, [])
    return (
        <div className={style['dropdown']} ref={dropdownRef}>
            <button type='button' className={
                cn(style['dropdown-toggle'], {[style['opened']]: isOpen})
            } onClick={toggleDropdown}>
                {!readOnly && <img src='/input.png' alt='стрелка вниз'/>}
                {titleInput || title}
            </button>
            {isOpen && (
                <div className={style['dropdown-menu']}>
                    {inside.map((i, index) => {
                        return <li value={index + 1} onClick={(e) => {
                            setParam(e)
                        }} key={index}>{i}</li>;
                    })}
                </div>
            )}
        </div>
    );
};

