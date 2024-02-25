import style from './Input.module.css'
import classNames from "classnames";
import {forwardRef} from "react";

export const Input = forwardRef(function Input({readOnly, className, isValid = true, appearence, ...props}, ref) {
    return (
        <input {...props} ref={ref} readOnly={readOnly} className={classNames(className, style['input'], {
            [style['invalid']]: !isValid,
            [style['input-title']]: appearence === 'title',
            [style['not-active']]: readOnly,
        })}/>
    )
})
