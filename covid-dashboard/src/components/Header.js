import create from '../services/create.js';
import Component from '../services/component.js';

export default class Header extends Component{
  render() {
    this.component = create('header', { classes: ['header_content'] }, '', [
      create('div', { classes: ['header_body'] }, '', [
        create('div', { classes: ['header_title'] }, 'COVID-19 Dashboard')
      ])
    ]);
  }
}