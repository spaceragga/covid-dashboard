import create from '../services/create.js';
import Component from '../services/component.js';

export default class Footer extends Component  {
  constructor() {
    super();
    this.state = {
      links: [
        { 
          label: 'temirWlan',
          path: 'https://github.com/temirWlan'
        },
        {
          label: 'spaceragga',
          path: 'https://github.com/spaceragga'
        },
        {
          label: 'AksultanAitkozha',
          path: 'https://github.com/AksultanAitkozha'
        },
        {
          label: 'OlgaMazurina',
          path: 'https://github.com/OlgaMazurina'
        }
      ]
    };
  }

  render() {
    this.component = create('footer', { classes: ['footer_content'] }, '', [
      create('div', { classes: ['footer_body'] }, '', [
        create('a', { classes: ['footer_logo'], attributes: [['href', 'https://rs.school/js/']] }),
        create('div', { classes: ['footer_year'] }, 'Dec 2020'),
        create('div', { classes: ['footer_github'] }, '', [
          create('div', null, '', [
            create('span', { classes: ['footer_list-title'] }, 'authors:'),
            create('ul', { classes: ['footer_list'] }, '', [
              ...this.state.links.map(({ label, path }) => {
                return create('li', null, '', [
                  create('a', { attributes: [['href', path], ['target', '_blank']] }, label)
                ])
              })
            ])
          ])
        ])
      ])
    ]);
    // add 'br' after each 'a' tag
  }
}