import create from '../services/create.js';
import Component from '../services/component.js';

export default class CountryBlock extends Component {
  
  render() {
    this.component = create('div', { classes: ['country'], attributes: [['data-country', true]] }, '', [
      create('div', { classes: ['btn'], attributes: [['data-btn-country', true]] }, '', [
        create('i', { classes: ['fas', 'fa-expand-arrows-alt'] })
      ]), create('div', { classes: ['totalCases'] }, '',  [
        create('div', { classes: ['totalCases_wrapp'] }, '', [
          create('h1', { classes: ['totalCases_title'] }, 'Global Cases'),
          create('h1', { classes: ['totalCases_score'] })
        ])
      ]), create('div', { classes: ['totalCountry'] }, '', [
        create('div', { classes: ['totalCountry_wrapp'] }, '', [
          create('h2', { classes: ['totalCountry_title'] }, 'Cases by Country/Region/Sovereignty'), '',
        create('div', { classes: ['totalCountry_block'] })])
      ])
    ]);
  }
}