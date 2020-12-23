import create from '../services/create.js';
import Component from '../services/component.js';
// create('', { classes: [''] }, '', [])

export default class Chart extends Component {
  constructor() {
    super();
    this.state = {
      btns: [
        {
          id: 'cases',
          label: 'Cases'
        },
        {
          id: 'deaths',
          label: 'Deaths'
        },
        {
          id: 'recovered',
          label: 'Recovered'
        }
      ]
    }
  }
  render() {
    this.component = create('div', { classes: ['chart'], attributes: [['data-chart', true]] }, '', [
      create('canvas', { attributes: [['id', 'chart']] }),
      create('div', { classes: ['chartPagination'] }, '', [
        ...this.state.btns.map(({ id, label }) => create('button', { attributes: [['id', id]] }, label)),
        create('h2', { attributes: [['id', 'chartTitle']] }, 'Daily Cases')
      ]),
      create('div', { classes: ['btn'], attributes: [['data-btn-chart', true]] }, '', [
        create('i', { classes: ['fas', 'fa-expand-arrows-alt'] })
      ])
    ])
  }
}