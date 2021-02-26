export const ACTIVITIES = [
    { text: 'Sleeping' },
    { text: 'Shower' },
    { text: 'Eating' },
    { text: 'Sport' },
    { text: 'Cooking' },
    { text: 'Reading' },
    { text: 'Movies' },
    { text: 'Series' },
    { text: 'Books' },
    { text: 'Walking' },
    { text: 'Job' },
    { text: 'Massage' },
    { text: 'Socializing' },
    { text: 'Spa' },
    { text: 'Music' },
    { text: 'Shopping' },
    { text: 'Holiday' },
    { text: 'Homework' },
    { text: 'Party' },
    { text: 'Medicine' },
    { text: 'Houseclean' },
    { text: 'Learning' },
    { text: 'Plants' },
    { text: 'Pets' },
    { text: 'Coding' },
];

export const DAY = {
    height: 270,
    title: {
        text: "Today",
        fontFamily: 'Arial',
        fontSize: 18,
        fontColor: "#404040",
    },
    toolTip: {
        fontFamily: "Raleway-Regular",
        fontColor: "#6c757d",
        Content: "{x} : {y}"
    },
    axisY: {
        labelFontFamily: "Raleway-Regular",
        labelFontColor: "#6c757d",
        labelFontSize: 14,
        gridColor: "#f3f3f3",
        suffix: "h"
    },
    axisX: {
        labelFontFamily: "Raleway-Regular",
        labelFontColor: "#6c757d",
        labelFontSize: 16,
        labelAngle: 30
    },

    data: [
        {
            type: "column",
            color: "red",
            toolTipContent: "{label}: <strong>{y}</strong>h ",
            dataPoints: [
                { label: "Sleeping", y: 7, color: "rgba(224, 180, 76, 0.5)" },
                { label: "Sport", y: 1.5, color: "rgba(148, 82, 203, 0.23)" },
                { label: "Eating", y: 3, color: "rgba(241, 230, 74, 0.5)" },
                { label: "Job", y: 8, color: "rgba(76, 224, 113, 0.3)" },
                { label: "Cooking", y: 2, color: "rgba(247, 83, 86, 0.4)" },
            ]
        }
    ]
}

export const WEEK = {
    height: 270,
    title: {
        text: "This Week",
        fontFamily: 'Arial',
        fontSize: 18,
        fontColor: "#404040",
    },
    toolTip: {
        fontFamily: "Raleway-Regular",
        fontColor: "#6c757d",
        Content: "{x} : {y}"
    },
    axisY: {
        labelFontFamily: "Raleway-Regular",
        labelFontColor: "#6c757d",
        labelFontSize: 14,
        gridColor: "#f3f3f3",
        suffix: "h"
    },
    axisX: {
        labelFontFamily: "Raleway-Regular",
        labelFontColor: "#6c757d",
        labelFontSize: 16,
        labelAngle: 30
    },

    data: [
        {
            type: "column",
            color: "red",
            toolTipContent: "{label}: <strong>{y}</strong>h ",
            dataPoints: [
                { label: "Sleeping", y: 46, color: "rgba(241, 230, 74, 0.5)" },
                { label: "Sport", y: 6, color: "rgba(224, 180, 76, 0.5)" },
                { label: "Eating", y: 17, color: "rgba(148, 82, 203, 0.23)" },
                { label: "Job", y: 40, color: "rgba(247, 83, 86, 0.4)" },
                { label: "Cooking", y: 11, color: "rgba(76, 224, 113, 0.3)" },
            ]
        }
    ]
}

export const MONTH = {
    height: 270,
    title: {
        text: "This Month",
        fontFamily: 'Arial',
        fontSize: 18,
        fontColor: "#404040",
    },
    toolTip: {
        fontFamily: "Raleway-Regular",
        fontColor: "#6c757d",
        Content: "{x} : {y}"
    },
    axisY: {
        labelFontFamily: "Raleway-Regular",
        labelFontColor: "#6c757d",
        labelFontSize: 14,
        gridColor: "#f3f3f3",
        suffix: "h"
    },
    axisX: {
        labelFontFamily: "Raleway-Regular",
        labelFontColor: "#6c757d",
        labelFontSize: 16,
        labelAngle: 30
    },

    data: [
        {
            type: "column",
            color: "red",
            toolTipContent: "{label}: <strong>{y}</strong>h ",
            dataPoints: [
                { label: "Sleeping", y: 180, color: "rgba(247, 83, 86, 0.4)"},
                { label: "Sport", y: 24, color: "rgba(76, 224, 113, 0.3)" },
                { label: "Eating", y: 68, color: "rgba(241, 230, 74, 0.5)" },
                { label: "Job", y: 160, color: "rgba(148, 82, 203, 0.23)" },
                { label: "Cooking", y: 44, color: "rgba(224, 180, 76, 0.5)" },
            ]
        }
    ]
}


export const COLORS = [
    'green',
    'yellow',
    'orange',
    'red',
    'purple',
];
