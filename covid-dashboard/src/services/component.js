export default class Component {
  constructor() {
    this.state = {};
    this.component = document.createElement('div');
  }

  init() {
    this.render();
    this.addEventHandlers();
    return this.component;
  }

  render() {}
  addEventHandlers() {}
}