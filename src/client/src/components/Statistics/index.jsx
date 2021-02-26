import React from "react";
import { Line } from "react-chartjs-2";

const data = {
    labels: ["Sleeping", "Sport", "Eating", "Job", "Cooking"],
    datasets: [
        {
            label: "Today",
            data: [8, 2, 1, 9, 4],
            fill: false,
            borderColor: "#dea918",
        },
        {
            label: "This Week",
            data: [55, 10, 14, 45, 12],
            fill: false,
            borderColor: "#8fc244"
        },
        {
            label: "This Month",
            data: [210, 40, 56, 180, 48],
            fill: false,
            borderColor: "#e8de1c"
        },
        {
            label: "This Year",
            data: [2130, 560, 129, 1997, 138],
            fill: false,
            borderColor: "#c9538c"
        },
    ]
};
const options = {
    scales: {
        xAxes: [{
            ticks: {
                fontFamily: "Raleway-Regular",
                fontSize: 12
            }
        }],
        yAxes: [{
            ticks: {
                fontFamily: "Raleway-Regular",
                fontsize: 12,
                beginAtZero: true,
                callback: (value) => {
                    return `${value}h`;
                }
            }
        }],
    },
    tooltips: {
        callbacks: {
            label: (tooltipItems, data) => {
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.yLabel + ' h';
            }
        }
    }
}
const legend = {
    onHover: (event) => {
        event.target.style.cursor = 'pointer';
    },
    onLeave: (event) => {
        event.target.style.cursor = 'default';
    },
    labels: {
        fontFamily: 'Raleway-Regular',
        fontSize: 12
    }
}
function Statistics() {
    return (
        <div className="statistics">
            <Line data={data} options={options} legend={legend} />
        </div>
    );
}

export default Statistics;
