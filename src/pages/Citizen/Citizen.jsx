import {RightSideContainer} from "../../components/RightSideContainer/RightSideContainer.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import style from "./Citizen.module.css"
import {Input} from "../../components/Input/Input.jsx";
import {Dropdown} from "../../components/Dropdown/Dropdown.jsx";
import {userActions} from "../../store/userSlice.js";
import Notification from "../../components/Notification/Notification.jsx";

const gender = ["Мужской", "Женский"]
const maritalStatus = ["Свободен", "Разведен", "В браке"]

export function Citizen() {
    const peopleList = useSelector(s => s.user);
    const dispatch = useDispatch()
    const {id} = useParams()
    const [citizen, setCitizen] = useState({})
    const [image, setImage] = useState()
    const [isValid, setIsValid] = useState(true)
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()
    const nameRef = useRef()
    const birthdayRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const postRef = useRef()
    const citizenshipRef = useRef()
    useEffect(() => {
        const one = peopleList.find(i => i.id == id)
        one.gender === 'Мужской' ? setImage('/man.png') : setImage('/women.png')
        setCitizen(one)
    }, [peopleList, id])
    const seting = (input) => {
        return (set) => {
            setCitizen(prevState => {
                let mass = input === 'gender' ? gender : maritalStatus
                return {...prevState, [`${input}`]: mass[set - 1]}
            })
        }
    }
    const checkValid = (citizen) => {
        for (let key in citizen) {
            if (!citizen[key]) {
                return false
            }
        }
        return true
    }
    const save = (e) => {
        e.preventDefault()
        if (checkValid(citizen)) {
            dispatch(userActions.update(citizen))
            setIsValid(true)
            setEdit(false)
        } else {
            setIsValid(false);
            setTimeout(() => {
                setIsValid(true);
            }, 2000);
        }
    }
    const cancel = () => {
        setCitizen(peopleList.find(i => i.id == id))
        setEdit(false)
    }
    const inputChange = (e) => {
        setCitizen(p => ({
            ...p,
            [e.target.name]: e.target.value
        }));
    }
    return (
        <RightSideContainer>
            <div className={style['container']}>
                {!isValid && <Notification>Заполните все поля!</Notification>}
                <div className={style['left-part']}>
                    <Link to='/list' className={style['back']}><img src='/back.svg'/> Назад</Link>
                    <img className={style['image']} src={image} alt='Фото'/>
                </div>
                <form className={style['inputs']}>
                    <Input readOnly={!edit} onChange={(e) => inputChange(e)} name='name' ref={nameRef}
                           appearence='title' value={citizen.name}/>
                    <Input readOnly={!edit} onChange={(e) => inputChange(e)} ref={birthdayRef} name='birthday'
                           type='date'
                           value={citizen.birthday ? new Date(citizen.birthday).toISOString().slice(0, 10) : ""}/>
                    <Input readOnly={!edit} onChange={(e) => inputChange(e)} ref={emailRef} name='email' type='email'
                           value={citizen.email}/>
                    <Input readOnly={!edit} onChange={(e) => inputChange(e)} ref={phoneRef} name='phone'
                           value={citizen.phone}/>
                    <Input readOnly={!edit} onChange={(e) => inputChange(e)} ref={postRef} name='post'
                           value={citizen.post}/>
                    <Input readOnly={!edit} onChange={(e) => inputChange(e)} ref={citizenshipRef} name='citizenship'
                           value={citizen.citizenship}/>
                    <Dropdown readOnly={!edit} set={0} params={seting('maritalStatus')} title={citizen.maritalStatus}
                              inside={maritalStatus}/>
                    <Dropdown readOnly={!edit} set={0} params={seting('gender')} title={citizen.gender}
                              inside={gender}/>
                    {edit && <div className={style['buttons']}>
                        <button onClick={cancel} className={style['save']}>Отменить</button>
                        <button onClick={(e) => save(e)} className={style['save']}>Сохранить</button>
                    </div>}
                    {!edit && <button onClick={() => {
                        setEdit(true);
                        nameRef.current.focus()
                    }} className={style['save']}>Редактировать</button>}
                </form>
            </div>
        </RightSideContainer>
    )
}