import create from '../services/create.js';
import Component from '../services/component.js';
// create('', { classes: [''] }, '', [])

import Header from './Header.js';
import CountryBlock from './CountryBlock.js';
import Map from './Map.js';
import Table from './Table.js';
import Chart from './Chart.js';
import Footer from './Footer.js';

export default class App extends Component {
  constructor() {
    super();
    this.header = new Header().init();
    this.countryBlock = new CountryBlock().init();
    this.map = new Map().init();
    this.table = new Table().init();
    this.chart = new Chart().init();
    this.footer = new Footer().init();
  }

  render() {
    this.component = create('div', { classes: ['wrapper'] }, '', [
      this.header,
      create('main', { classes: ['main_content'] }, '', [
        create('div', { classes: ['main_body'] }, '', [
          this.countryBlock,
          this.map,
          create('div', { classes: ['wrap'], attributes: [['data-wrap', true]] }, '', [
            this.table,
            this.chart
          ])
        ])
      ]),
      this.footer
    ]);
  }
}