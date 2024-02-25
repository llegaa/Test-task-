import {Pie} from "react-chartjs-2";

export function PieChart({stat, title}) {
    const data = {
        labels: stat.keys,
        datasets: [
            {
                label: title,
                backgroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                responsive: false,
                data: stat.values,
            },
        ],
    };
    return (<Pie data={data} width={200} height={200}/>);
}

