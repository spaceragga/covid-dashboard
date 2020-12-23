import { countriesInfo } from './index.js';
import { getAllCountries } from './APIdata.js';

export const btnEvent = {

    addBtnEvent() {
        let round = function (num) { // Округление 2 знака после запятой
            return Math.round(num * 100)/100;
        };

        document.querySelector('#allDay').addEventListener('click', () => {

            document.querySelectorAll('#casesBlockCont').forEach((el) => el.remove());
            document.querySelectorAll('#deathsBlockCont').forEach((el) => el.remove());
            document.querySelectorAll('#recoveredBlockCont').forEach((el) => el.remove());

            countriesInfo.getCountriesInfo();
        });

        document.querySelector('#lastDay').addEventListener('click', () => {
            document.querySelectorAll('#casesBlockCont').forEach((el) => el.remove());
            document.querySelectorAll('#deathsBlockCont').forEach((el) => el.remove());
            document.querySelectorAll('#recoveredBlockCont').forEach((el) => el.remove());

            const obj = getAllCountries();
            
            obj.then( result => {
                result.sort((a, b) => b['todayCases'] > a['todayCases'] ? 1 : -1);
                    result.map(el => {
                        const casesBlock = document.querySelector('.totalCountry_block');
                        const newBlock = document.createElement('div');
                        const h3 = document.createElement('h3');
                        newBlock.innerHTML = el.country;
                        newBlock.id = 'casesBlockCont';
                        newBlock.insertAdjacentHTML('beforeend', '<img src="'+ el.countryInfo.flag +'">');
                        h3.innerHTML = el.todayCases;
                        h3.id = 'casesBlock';
                        casesBlock.appendChild(newBlock);
                        newBlock.appendChild(h3);
                        // console.log(el.country);
                        // console.log(el.countryInfo.flag);
                });
                console.log(result)
            });

            obj.then( result => {
                result.sort((a, b) => b['todayDeaths'] > a['todayDeaths'] ? 1 : -1);
                    result.map(el => {
                        const deathsBlock = document.querySelector('.globalDeathsWrapp');
                        const newBlock = document.createElement('div');
                        const h3 = document.createElement('h3');
                        newBlock.innerHTML = el.country;
                        newBlock.id = 'deathsBlockCont';
                        newBlock.insertAdjacentHTML('beforeend', '<img src="'+ el.countryInfo.flag +'">');
                        h3.innerHTML = el.todayDeaths;
                        h3.id = 'deathsBlock';
                        deathsBlock.appendChild(newBlock);
                        newBlock.appendChild(h3);
                });
            });

            obj.then( result => {
                result.sort((a, b) => b['todayRecovered'] > a['todayRecovered'] ? 1 : -1);
                    result.map(el => {
                        const recoveredBlock = document.querySelector('.globalRecoveredWrapp');
                        const newBlock = document.createElement('div');
                        const h3 = document.createElement('h3');
                        newBlock.innerHTML = el.country;
                        newBlock.id = 'recoveredBlockCont';
                        newBlock.insertAdjacentHTML('beforeend', '<img src="'+ el.countryInfo.flag +'">');
                        h3.innerHTML = el.todayRecovered;
                        h3.id = 'recoveredBlock';
                        recoveredBlock.appendChild(newBlock);
                        newBlock.appendChild(h3);
                });
            });
        });

        document.querySelector('#absol').addEventListener('click', () => {
            document.querySelectorAll('#casesBlockCont').forEach((el) => el.remove());
            document.querySelectorAll('#deathsBlockCont').forEach((el) => el.remove());
            document.querySelectorAll('#recoveredBlockCont').forEach((el) => el.remove());

            const obj = getAllCountries();
            
            obj.then( result => {
                result.sort((a, b) => b['cases'] > a['cases'] ? 1 : -1);
                    result.map(el => {
                        const casesBlock = document.querySelector('.totalCountry_block');
                        const newBlock = document.createElement('div');
                        const h3 = document.createElement('h3');
                        newBlock.innerHTML = el.country;
                        newBlock.id = 'casesBlockCont';
                        newBlock.insertAdjacentHTML('beforeend', '<img src="'+ el.countryInfo.flag +'">');
                        h3.innerHTML = round(el['casesPerOneMillion'] / 10);
                        h3.id = 'casesBlock';
                        casesBlock.appendChild(newBlock);
                        newBlock.appendChild(h3);
                        // console.log(el.country);
                        // console.log(el.countryInfo.flag);
                });
                console.log(result)
            });

            obj.then( result => {
                result.sort((a, b) => b['deaths'] > a['deaths'] ? 1 : -1);
                    result.map(el => {
                        const deathsBlock = document.querySelector('.globalDeathsWrapp');
                        const newBlock = document.createElement('div');
                        const h3 = document.createElement('h3');
                        newBlock.innerHTML = el.country;
                        newBlock.id = 'deathsBlockCont';
                        newBlock.insertAdjacentHTML('beforeend', '<img src="'+ el.countryInfo.flag +'">');
                        h3.innerHTML = round(el['deathsPerOneMillion'] / 10);
                        h3.id = 'deathsBlock';
                        deathsBlock.appendChild(newBlock);
                        newBlock.appendChild(h3);
                });
            });

            obj.then( result => {
                result.sort((a, b) => b['recovered'] > a['recovered'] ? 1 : -1);
                    result.map(el => {
                        const recoveredBlock = document.querySelector('.globalRecoveredWrapp');
                        const newBlock = document.createElement('div');
                        const h3 = document.createElement('h3');
                        newBlock.innerHTML = el.country;
                        newBlock.id = 'recoveredBlockCont';
                        newBlock.insertAdjacentHTML('beforeend', '<img src="'+ el.countryInfo.flag +'">');
                        h3.innerHTML = round(el['recoveredPerOneMillion'] / 10);
                        h3.id = 'recoveredBlock';
                        recoveredBlock.appendChild(newBlock);
                        newBlock.appendChild(h3);
                });
            });
        });

        document.querySelector('#absolDay').addEventListener('click', () => {
            document.querySelectorAll('#casesBlockCont').forEach((el) => el.remove());
            document.querySelectorAll('#deathsBlockCont').forEach((el) => el.remove());
            document.querySelectorAll('#recoveredBlockCont').forEach((el) => el.remove());

            const obj = getAllCountries();
            
            obj.then( result => {
                result.sort((a, b) => b['todayCases'] > a['todayCases'] ? 1 : -1);
                    result.map(el => {
                        const casesBlock = document.querySelector('.totalCountry_block');
                        const newBlock = document.createElement('div');
                        const h3 = document.createElement('h3');
                        newBlock.innerHTML = el.country;
                        newBlock.id = 'casesBlockCont';
                        newBlock.insertAdjacentHTML('beforeend', '<img src="'+ el.countryInfo.flag +'">');
                        h3.innerHTML = round(el['todayCases'] / el['population'] * 100000);
                        h3.id = 'casesBlock';
                        casesBlock.appendChild(newBlock);
                        newBlock.appendChild(h3);
                        // console.log(el.country);
                        // console.log(el.countryInfo.flag);
                });
                console.log(result)
            });

            obj.then( result => {
                result.sort((a, b) => b['todayDeaths'] > a['todayDeaths'] ? 1 : -1);
                    result.map(el => {
                        const deathsBlock = document.querySelector('.globalDeathsWrapp');
                        const newBlock = document.createElement('div');
                        const h3 = document.createElement('h3');
                        newBlock.innerHTML = el.country;
                        newBlock.id = 'deathsBlockCont';
                        newBlock.insertAdjacentHTML('beforeend', '<img src="'+ el.countryInfo.flag +'">');
                        h3.innerHTML = round(el['todayDeaths'] / el['population'] * 100000);
                        h3.id = 'deathsBlock';
                        deathsBlock.appendChild(newBlock);
                        newBlock.appendChild(h3);
                });
            });

            obj.then( result => {
                result.sort((a, b) => b['todayRecovered'] > a['todayRecovered'] ? 1 : -1);
                    result.map(el => {
                        const recoveredBlock = document.querySelector('.globalRecoveredWrapp');
                        const newBlock = document.createElement('div');
                        const h3 = document.createElement('h3');
                        newBlock.innerHTML = el.country;
                        newBlock.id = 'recoveredBlockCont';
                        newBlock.insertAdjacentHTML('beforeend', '<img src="'+ el.countryInfo.flag +'">');
                        h3.innerHTML = round(el['todayRecovered'] / el['population'] * 100000);
                        h3.id = 'recoveredBlock';
                        recoveredBlock.appendChild(newBlock);
                        newBlock.appendChild(h3);
                });
            });
        });
    }
}