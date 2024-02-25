import {Bar, Line} from "react-chartjs-2";
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);


export function LineChart({stat, title}) {
    const labels = stat.keys
    const data = {
        labels: labels,
        datasets: [
            {
                label: title,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: stat.values,
            },
        ],
    };
    console.log(stat)
    return (
        <div>
            <div>
                <Line data={data}/>
            </div>
        </div>
    );
};

