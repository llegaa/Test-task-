import {HorizontalBarChart} from "../../components/Charts/HotizontalBarCharts/HotizontalBarCharts.jsx";
import {arraysFromObject, eachCount, getMaritalStatusStatistics} from "../../data/analyse.js";
import {useSelector} from "react-redux";
import style from "./Dashroard.module.css"
import {DoughnutChart} from "../../components/Charts/DoughnutChart/DoughnutChart.jsx";
import {BarChart} from "../../components/Charts/BarChart/BarChart.jsx";

let getDatasets = (stat1, stat2) => {
    return ([
        {
            label: 'Женщины',
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: stat1.values
        },
        {
            label: 'Мужчины',
            backgroundColor: "rgb(53, 162, 235)",
            borderColor: "rgb(53, 162, 235)",
            data: stat2.values
        }
    ])
}

export function DashBoard() {
    const peopleList = useSelector(s => s.user);
    const maritalStatusStatistics = getMaritalStatusStatistics(peopleList)
    return (<div className={style['container']}>
            <div className={style['country']}><HorizontalBarChart title='Количество людей по странам'
                                                                  stat={arraysFromObject(eachCount(peopleList, 'citizenship'))}/>
            </div>
            <div className={style['posts']}><DoughnutChart stat={arraysFromObject(eachCount(peopleList, 'post'))}/>
            </div>
            <div className={style['maritalStatus']}><BarChart statKeys={maritalStatusStatistics.uniqueMaritalStatuses}
                                                              title='Семейной положение'
                                                              datasets={getDatasets(maritalStatusStatistics.arrayWoman, maritalStatusStatistics.arrayMan)}/>
            </div>
        </div>
    )
}