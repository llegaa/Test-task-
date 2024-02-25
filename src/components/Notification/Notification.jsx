import {useState, useEffect} from 'react';
import style from './Notification.module.css';
import cn from "classnames"

const Notification = ({children}) => {

    return (
        <div className={style['notification']}>
            {children}
        </div>
    );
};

export default Notification;