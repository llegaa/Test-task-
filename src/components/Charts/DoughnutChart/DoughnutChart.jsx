import {Doughnut} from "react-chartjs-2";

export function DoughnutChart({stat, title}) {
    const data = {
        labels: stat.keys,
        datasets: [
            {
                label: title,
                backgroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 255, 0)',
                    'rgb(255, 99, 132)',
                    'rgb(0, 0, 255)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 0, 0)',
                    'rgb(0, 128, 0)',
                    'rgb(128, 0, 128)',
                    'rgb(255, 140, 0)',
                    'rgb(0, 128, 128)'
                ],
                borderColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 255, 0)',
                    'rgb(255, 99, 132)',
                    'rgb(0, 0, 255)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 0, 0)',
                    'rgb(0, 128, 0)',
                    'rgb(128, 0, 128)',
                    'rgb(255, 140, 0)',
                    'rgb(0, 128, 128)'

                ],
                borderWidth: 1,
                responsive: false,
                data: stat.values,
            },
        ],
    };
    return (<Doughnut data={data}/>);
}

