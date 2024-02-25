import {useSelector} from "react-redux";
import style from "./AnalyticsAge.module.css";
import {averageAgeCountry} from "../../data/analyse.js";
import {PolarAreaChart} from "../../components/Charts/PolarAreaChart/PolarAreaChart.jsx";

export function AnaliticsAge() {
    const peopleList = useSelector(s => s.user);
    return (
        <div className={style['container']}>
            <PolarAreaChart title='Средний возраст в странах' stat={averageAgeCountry(peopleList)}/>
        </div>
    )
}