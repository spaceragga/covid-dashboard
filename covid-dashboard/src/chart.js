export function createChart() {
    const ctx = document.querySelector('#chart').getContext('2d');
    const chartTitle = document.querySelector('#chartTitle');

    const statusStat = ['cases', 'deaths', 'recovered'];

    const chartConfig = {
        type: 'bar',
        data: {
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: "#ffff00",
                    borderColor: "#ffff00",
                    barDatasetSpacing: 0,
                    barValueSpacing: 0,
                    // borderWidth: 0.1,
                    // categoryPercentage: 0,
                    // barPercentage: 0,
                    // barThickness: 'flex',
                    fill: false
                }
            ],
        },
        options: {
            legend: {
                display: false
              },
            scales: {
                xAxes: [{
                    categoryPercentage: 1.0,
                    barPercentage: 1.0
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    };

    const getCasesForStatus = (status, delta = 280) => {
            axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then( response => {
                let res = response['data'];
            setChartForStatus(res, status);
        });
    };

    let setChartForStatus = (data, status) => {
        for (let key in data[status]) {
            chartConfig.data.labels.push(key);
            chartConfig.data.datasets[0].data.push(data[status][key]);
        }
        chartConfig.data.labels = chartConfig.data.labels.slice(-140);
        chartConfig.data.datasets[0].data = chartConfig.data.datasets[0].data.slice(-140);


        // for (let i = 0; i < data.length; i = i + 1) {
        //     let d = new Date(data[i]['Date']);
        //     newConfirmed += data[i]['cases'];
        //     chartConfig.data.labels.push(d.getDate() + " " + months[d.getMonth()]);
        //     chartConfig.data.datasets[0].data.push(newConfirmed);
        // }
        // chartConfig.data.labels.push(new Date().getDate() + " " + months[new Date().getMonth()]);
        // chartConfig.data.datasets[0].data.push(data[data.length - 1]['cases']);
    };

    getCasesForStatus(statusStat[0], '280');

    const chart = new Chart(ctx, chartConfig);

    const switchStatus = (status) => {
        chartConfig.data.labels.length = 0;
        chartConfig.data.datasets[0].data.length = 0;

        chartTitle.innerHTML = `Daily ${status}`;

        getCasesForStatus(status);
        setTimeout(() => chart.update(), 500);
    };

    // const switchRigth = ({ data: { datasets } }, name) => {
    //     if (name) {
    //         const names = datasets.map(user => user.label);
    //         const index = names.indexOf(name);

    //         if (index === -1) {
    //             return;
    //         }

    //         datasets.splice(index, 1);
    //     } else {
    //         datasets.pop();
    //     }

    //     chart.update();
    // }

    document.querySelector('#cases').addEventListener('click', () => {
        switchStatus(statusStat[0]);
    });

    document.querySelector('#deaths').addEventListener('click', () => {
        switchStatus(statusStat[1]);
    });

    document.querySelector('#recovered').addEventListener('click', () => {
        switchStatus(statusStat[2]);
    });

    setTimeout(() => chart.update(), 500);
}