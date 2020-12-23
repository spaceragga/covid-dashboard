export function createTotalStat() {
    const score = document.querySelector('.totalCases_score');

    axios.get('https://disease.sh/v3/covid-19/all').then( response => {
        let res = response['data'];
        getStat(res);
    });

    const getStat = (data) => {
        score.innerHTML = data.cases;
    }
}