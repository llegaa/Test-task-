import style from './Table.module.css';
import {useContext, useEffect, useState} from "react";
import {TableContext} from "../../context/table.context.jsx";
import {useNavigate} from "react-router-dom";

const headers = {
    name: "Имя",
    gender: "Пол",
    birthday: "Дата рождения",
    email: "Почта",
    phone: "Телефон",
    post: "Должность",
    maritalStatus: "Семейное положение",
    citizenship: "Гражданство"
}
const Table = ({peopleList}) => {
    const {sets} = useContext(TableContext);
    const navigate = useNavigate()
    const formatedDate = (date) => {
        return new Intl.DateTimeFormat('ru-RU').format(new Date(date))
    }
    const getBody = () => {
        return peopleList.map((i) => (
            <tr onClick={() => navigate(`/citizen/${i.id}`)} key={i.id}>
                {Object.keys(sets.sets).filter(item => sets.sets[item]).map((key) => {
                    let curValue = i[key]
                    if (key === 'birthday') {
                        curValue = formatedDate(i[key])
                    }
                    return (
                        <td key={key}>
                            {curValue}
                        </td>
                    );
                })}
            </tr>
        ))
    }

    const getHeader = () => {
        return Object.keys(sets.sets).filter(item => sets.sets[item]).map((key) => (
            <th key={key}>
                {headers[key]}
            </th>
        ))
    }
    return (
        <div className={style['container']}>
            {peopleList.length ? (
                <table className={style['table']}>
                    <thead>
                    <tr>
                        {getHeader()}
                    </tr>
                    </thead>
                    <tbody>
                    {getBody()}
                    </tbody>
                </table>
            ) : (
                <div>Нет записей</div>
            )}

        </div>
    );
};

export default Table;