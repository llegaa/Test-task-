import {Bar} from "react-chartjs-2";
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);


export function BarChart({statKeys, datasets}) {
    const labels = statKeys
    const data = {
        labels: labels,
        datasets: datasets,
    };
    return (
        <div>
            <div>
                <Bar data={data}/>
            </div>
        </div>
    );
};

