import create from '../services/create.js';
import Component from '../services/component.js';

export default class Map extends Component {
  render() {
    this.component = create('div', { classes: ['map'], attributes: [['data-map', true], ['id', 'mapid']] }, '', [
      create('div', { classes: ['btn'], attributes: [['data-btn-map', true]] }, '', [
        create('i', { classes: ['fas', 'fa-expand-arrows-alt'] })
      ])
    ]);
  }
}
