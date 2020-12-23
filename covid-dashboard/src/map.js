import { getCountriesInformation } from './APIdata.js';
import create from './services/create.js';
let mymap;
let circles;

export async function createMap() {
    mymap = L.map('mapid').setView([30, 10], 2);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 15,
        id: '0lga/ckiugj6p52uyc19s30c3ye3px',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiMGxnYSIsImEiOiJja2l1OW16dTEydnNxMnJsYmxmN29kZHQ0In0.8aKToKJUpLWf0fzGd3NAIg'
    }).addTo(mymap);

    drawCircles(1);

    const legend = createLegend();
    document.querySelector(".leaflet-right.leaflet-top").appendChild(legend);

    document.querySelector('.drop').onchange = function() {
        drawCircles(this.value);
        console.log(this.value);
    }
}

let drawCircles = async function(numOfList) {
    let radius;
    if (circles) {
        circles.clearLayers();
    }

    let circlesArr = [];
    let popupText;


    for (let country of await getCountriesInformation()) {
        if (country['population'] == 0) {
            continue;
        }
        if (numOfList == 1) { //number of cases total (abs)
            radius = country['cases'] / 25;
            popupText = `Total cases (abs): ${country['cases']}`;
        } else if (numOfList == 2) { //number of cases total (per 100k)
            radius = country['casesPerOneMillion'] * 2;
            popupText = `Total cases (per 100k): ${round(country['casesPerOneMillion'] / 10)}`;
        } else if (numOfList == 3) { //number of cases last day (abs)
            radius = country['todayCases'] * 5
            popupText = `Last day cases (abs): ${country['todayCases']}`;
        } else if (numOfList == 4) { //number of cases last day (per 100k)
            radius = country['todayCases'] / country['population'] * 100000 * 2000
            popupText = `Last day cases (per 100k): ${round(country['todayCases'] / country['population'] * 100000)}`;
        } else if (numOfList == 5) { //number of deaths total (abs)
            radius = country['deaths'] * 1.5;
            popupText = `Total deaths (abs): ${country['deaths']}`;
        } else if (numOfList == 6) { //number of deaths total (per 100k)
            radius = country['deathsPerOneMillion'] * 100;
            popupText = `Last day deaths (per 100k): ${round(country['deathsPerOneMillion'] / 10)}`;
        } else if (numOfList == 7) { //number of deaths last day (abs)
            radius = country['todayDeaths'] * 200;
            popupText = `Last day deaths (abs): ${country['todayDeaths']}`;
        } else if (numOfList == 8) { //number of deaths last day (per 100k)
            radius = country['todayDeaths'] / country['population'] * 100000 * 100000
            popupText = `Last day deaths (per 100k): ${round(country['todayDeaths'] / country['population'] * 100000)}`;
        } else if (numOfList == 9) { //number of recovered total (abs)
            radius = country['recovered'] / 20;
            popupText = `Total recovered (abs): ${country['recovered']}`;
        } else if (numOfList == 10) { //number of recovered total (per 100k)
            radius = country['recoveredPerOneMillion'] * 3;
            popupText = `Total recovered (per 100k): ${round(country['recoveredPerOneMillion'] / 10)}`;
        } else if (numOfList == 11) { //number of recovered last day (abs)
            radius = country['todayRecovered'] * 5;
            popupText = `Last day recovered (abs): ${country['todayRecovered']}`;
        } else if (numOfList == 12) { //number of recovered last day (per 100k)
            radius = country['todayRecovered'] / country['population'] * 100000 * 2000 //ничего нет!!!!
            popupText = `Last day recovered (per 100k): ${round(country['todayRecovered'] / country['population'] * 100000)}`;
        }

        let circle = L.circle([country['countryInfo']['lat'], country['countryInfo']['long']], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: radius
        })
        circlesArr.push(circle);
        circle.bindPopup(`<b>${country['country']}</b><br>${popupText}`);
    }

    circles = L.layerGroup(circlesArr).addTo(mymap);
}

let round = function (num) { // Округление 2 знака после запятой
    return Math.round(num * 100)/100;
}

let createLegend = function () {
    return create('select', { classes: ['drop', 'leaflet-control'], attributes: [] }, '', [
        create('option', { classes: ['drop-opt'], attributes: [['selected', 'selected'], ['value', '1']]}, 'number of cases total (abs)'),
        create('option', { classes: ['drop-opt'], attributes: [['value', '2']]}, 'number of cases total (per 100k)'),
        create('option', { classes: ['drop-opt'], attributes: [['value', '3']]}, 'number of cases last day (abs)'),
        create('option', { classes: ['drop-opt'], attributes: [['value', '4']]}, 'number of cases last day (per 100k)'),

        create('option', { classes: ['drop-opt'], attributes: [['value', '5']]}, 'number of deaths total (abs)'),
        create('option', { classes: ['drop-opt'], attributes: [['value', '6']]}, 'number of deaths total (per 100k)'),
        create('option', { classes: ['drop-opt'], attributes: [['value', '7']]}, 'number of deaths last day (abs)'),
        create('option', { classes: ['drop-opt'], attributes: [['value', '8']]}, 'number of deaths last day (per 100k)'),

        create('option', { classes: ['drop-opt'], attributes: [['value', '9']]}, 'number of recovered total (abs)'),
        create('option', { classes: ['drop-opt'], attributes: [['value', '10']]}, 'number of recovered total (per 100k)'),
        create('option', { classes: ['drop-opt'], attributes: [['value', '11']]}, 'number of recovered last day (abs)'),
        create('option', { classes: ['drop-opt'], attributes: [['value', '12']]}, 'number of recovered last day (per 100k)')
    ])
}
