import {BarChart} from "../../components/Charts/BarChart/BarChart.jsx";
import {arraysFromObject, eachCount} from "../../data/analyse.js";
import {useSelector} from "react-redux";
import style from "./AnalyticsCountry.module.css"

let getDatasets = (stat1) => {
    return ([
        {
            label: 'Количество человек по странам',
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: stat1
        }
    ])
}

export function AnalyticsCountry() {
    const peopleList = useSelector(s => s.user);
    const stat = arraysFromObject(eachCount(peopleList, 'citizenship'))
    return (
        <div className={style['container']}>
            <BarChart statKeys={stat.keys} datasets={getDatasets(stat.values)}/>
        </div>
    )
}