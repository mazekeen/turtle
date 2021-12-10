import React from "react";
import { Line } from "react-chartjs-2";
import { useGlobalContext } from '../Context';

function Statistics() {
    const { activityList } = useGlobalContext();
    const date = new Date();
    let dayArr = [];
    let weekArr = [];
    let monthArr = [];
    let yearArr = [];

    const currentDay = activityList.map(item => {
        if (date.getDay() === new Date(item.executedAt).getDay()) {
            return dayArr.push(activityList.map(item => ([item.duration])));
        }
        return dayArr;
    });

    const data = {
        labels: activityList.map(item => ([item.name])),
        datasets: [
            {
                label: 'Today',
                data: currentDay,
                fill: false,
                borderColor: "#e27923"
            },
            {
                label: "This Week",
                data: [55, 10, 14, 45, 12],//sum of hours for every activityname=>[]
                fill: false,
                borderColor: "#5eac65"
            },
            {
                label: "This Month",
                data: [210, 40, 56, 180, 48], //sum of hours for every activityname=>[]
                fill: false,
                borderColor: "#e8de1c"
            },
            {
                label: "This Year",
                data: [2130, 560, 129, 1997, 138],//sum of hours for every activityname=>[]
                fill: false,
                borderColor: "#e77798"
            }
        ]
    }

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
    return (
        <div className="statistics">
            <Line data={data} options={options} legend={legend} />
        </div>
    );
}

export default Statistics;
