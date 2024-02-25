import {Card} from "../Card/Сard.jsx";
import style from "./ListStatistic.module.css"
import {memo} from "react";
import {averageAge, eachCount} from "../../data/analyse.js";

function ListStatistic({peopleList}) {
    return (
        <div className={style['list-statistic']}>
            <Card>Средний возраст <span>{averageAge(peopleList)}</span></Card>
            <Card>Национальности <span>{Object.keys(eachCount(peopleList, 'citizenship')).length}</span></Card>
            <Card>Женщины <span>{Math.round(eachCount(peopleList, 'gender')['Женский'] / peopleList.length * 100)}&nbsp;%</span></Card>
            <Card>Мужчины <span>{Math.round(eachCount(peopleList, 'gender')['Мужской'] / peopleList.length * 100)}&nbsp;%</span></Card>
            <Card>Должности <span>{Object.keys(eachCount(peopleList, 'post')).length}</span></Card>
        </div>
    )
}

export default memo(ListStatistic)