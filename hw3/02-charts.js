const url = 'https://thronesapi.com/api/v2/Characters';

const backgroundColors = [
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)',
    'rgba(199, 199, 199, 0.8)',
    'rgba(83, 102, 255, 0.8)',
    'rgba(40, 159, 64, 0.8)',
    'rgba(210, 199, 199, 0.8)',
    'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(159, 159, 159, 1)',
    'rgba(83, 102, 255, 1)',
    'rgba(40, 159, 64, 1)',
    'rgba(210, 199, 199, 1)',
    'rgba(78, 52, 199, 1)',
];

const sanitizedFamilyNames = {
    "Stark": 'House Stark',
    "Baratheon": 'House Baratheon',
    "Lanister": 'House Lannister',
    "Lannister": 'House Lannister',
    'House Lanister': 'House Lannister',
    "Targaryan": 'House Targaryen',
    "Targaryn": 'House Targaryen',
    "Tyrell": 'House Tyrell',
    "Lorath": 'Lorathi',
    "None": 'Unknown',
    "Unkown": 'Unknown',
    '': 'Unknown',
};

const sanitizeFamilyName = (family) => sanitizedFamilyNames[family] || family;

const sanitizeData = (data) => {
    const houseCounts = {};
    data.forEach((character) => {
        const family = sanitizeFamilyName(character.family);
        houseCounts[family] = (houseCounts[family] || 0) + 1;
    });
    return houseCounts;
};

const fetchData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const cleanedData = sanitizeData(data);
        const labels = Object.keys(cleanedData)
        const values = Object.values(cleanedData)
        renderChart(labels,values)
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

fetchData()

const renderChart = (labels,values) => {
    const donutChart = document.querySelector('.donut-chart');

    new Chart(donutChart, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [
                {
                    data: values,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                },
            ],
        },
    });
};

renderChart();
