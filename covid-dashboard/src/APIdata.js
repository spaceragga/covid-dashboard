// Список стран
// async function getCountries() {
//     const response = await fetch('https://api.covid19api.com/countries')
//     return await response.json();
// }


// Получение массива с данными по каждой стране
export async function getAllCountries() {
    const response = await fetch('https://corona.lmao.ninja/v2/countries')
    const obj = await response.json();
    return obj;
}

// Данные по По каждой стране за все время
async function getData() {
    const countries = await getAllCountries();
    let countriesMap = new Map()
    for (let i of countries) {
        let data = {totalConfirmed: i['TotalConfirmed'], totalDeaths: i['TotalDeaths'], totalRecovered: i['TotalRecovered']};
        countriesMap.set(i['Country'], data);
    }
}

//Получение всей информации по странам(координаты, флаг, название, население, случаи...)
export async function getCountriesInformation() {
    const response = await fetch('https://corona.lmao.ninja/v2/countries');
    return await response.json();
}

// getData();


// По стране за каждый день (для получения графика)
// async function getDataByCountry(country) {
//     const response = await fetch(`https://api.covid19api.com/total/dayone/country/${country}`)
//     const arr = await response.json();
//     if (arr.length !== 0) {
//         const lastDay = arr[arr.length - 1];
//         return {confirmed: lastDay['Confirmed'], deaths: lastDay['Deaths'], recovered: lastDay['Recovered']};
//     }
//     return {confirmed: 0, deaths: 0, recovered: 0};
// }
