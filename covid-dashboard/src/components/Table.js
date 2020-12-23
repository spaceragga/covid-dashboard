import create from '../services/create.js';
import Component from '../services/component.js';

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      btns: [
        {
          id: 'allDay',
          label: 'All Day'
        },
        {
          id: 'lastDay',
          label: 'Last Day'
        },
        {
          id: 'absol',
          label: '%100k All Day'
        },
        {
          id: 'absolDay',
          label: '%100k Last Day'
        }
      ]
    }
  }
  render() {
    this.component = create('div', { classes: ['table'], attributes: [['data-table', true]] }, '', [
      create('div', { classes: ['btn'], attributes: [['data-btn-table', true]] }, '', [
        create('i', { classes: ['fas', 'fa-expand-arrows-alt'] })
      ]), create('div', { classes: ['globalDeaths'] }, '', [
        create('div', { classes: ['globalDeathsWrapp'] }, '', [
          create('div', { classes: ['globalDeathsTitle'] }, '', [
            create('h2', { classes: ['titleGB'] }, 'Global Deaths')
          ])
        ]), create('div', { classes: ['globalDeathsPagination'] }, '', [
          ...this.state.btns.map(({ id, label }) => create('button', { attributes: [['id', id]] }, label))
        ])
      ]), create('div', { classes: ['stateLevel'] }, '', [
        create('div', { classes: ['globalRecoveredWrapp'] }, '', [
          create('div', { classes: ['globalRecoveredTitle'] }, '', [
            create('h2', { classes: ['titleGB'] }, 'Global Recovered')
          ])
        ])
      ])
    ]);
  }
}