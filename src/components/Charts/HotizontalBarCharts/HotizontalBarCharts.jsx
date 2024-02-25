import {Bar} from "react-chartjs-2";
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);


export function HorizontalBarChart({title, stat}) {
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    const labels = stat.keys

    const data = {
        labels,
        datasets: [
            {
                label: "Страна",
                data: stat.values,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Bar options={options} data={data}/>;
}
