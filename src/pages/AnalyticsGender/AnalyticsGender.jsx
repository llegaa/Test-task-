import {PieChart} from "../../components/Charts/PieChart/PieChart.jsx";
import {arraysFromObject, eachCount} from "../../data/analyse.js";
import {useSelector} from "react-redux";
import style from "./AnalyticsGender.module.css"

export function AnalyticsGender() {
    const peopleList = useSelector(s => s.user);
    return (
        <div className={style['container']}>
            <PieChart title='gender' stat={arraysFromObject(eachCount(peopleList, 'gender'))}/>
        </div>
    )
}