import {html, css, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import {AnimationType, DwgTextAnimation} from './dwg-text-animation';
import {until, untilTimer} from '../scripts/util';
import {DwgLink} from './dwg-link';
import {Project} from './dwg-project';

import './dwg-link';
import './dwg-text-animation';
import './dwg-project';

@customElement('dwg-home')
export class DwgHome extends LitElement {
  static styles = css`
  #hero-section {
    max-width: 1000px;
    margin: 0 auto;

    > #title {
      display: block;
      font-size: var(--font-size-large);
    }

    > .body {
      display: block;
      font-size: var(--font-size-small);
      margin-top: 2.5rem;
    }

    > dwg-link {
      opacity: 0%;
      position: relative;
      top: 1.5em;
      transition-duration: 1s;
      transition-property: none;

      &.show {
        opacity: 100%;
        top: 0;
        transition-property: opacity, top;
      }
    }
  }

  #content-section {
    display: flex;
    flex-flow: column nowrap;
    font-size: var(--font-size-large);
    gap: 1em;
    margin: 3em auto;
    max-width: 1000px;
    opacity: 0%;
    position: relative;
    top: 3em;
    transition-duration: 1s;
    transition-property: none;

    &.show {
      opacity: 100%;
      top: 0;
      transition-property: opacity, top;
    }

    .content-header {
      margin-top: 3em;
    }
  }
  `;

  @state()
  title_text = "“I'm not a great programmer; I'm a good programmer with great habits.” ~Kent Beck";

  @state()
  body_text1 = `
  I'm a full-stack engineer with a background in molecular modeling. I am passionate about writing efficient, scalable code and cultivating instantiations of best practices. Embracing the unique complexities of each project by determining context-appropriate solutions and quickly filling gaps in my knowledge is where I thrive in my work.
  `;

  @state()
  body_text2 = `
  Below is a summary of personal and freelance projects which demonstrate a wide breadth of knowledge and experience beyond my work as a professional software engineer.
  `;

  @state()
  agile_manifesto: DwgLink = undefined;

  @state()
  title_el: DwgTextAnimation = undefined;
  @state()
  body_el1: DwgTextAnimation = undefined;
  @state()
  body_el2: DwgTextAnimation = undefined;
  @state()
  content_section: HTMLDivElement = undefined;

  @state()
  project_data_fiddlesticks: Project = {
    title: 'Game Lobby',
    description: '',
    link: 'https://fiddlesticks.live',
    technologies: [
      {name: 'Golang', type: 'lang'},
    ],
  };

  async connectedCallback() {
    super.connectedCallback();
    await untilTimer(600);
    await until(() => {
      this.title_el = this.shadowRoot.querySelector('#title');
      this.body_el1 = this.shadowRoot.querySelector('#body1');
      this.body_el2 = this.shadowRoot.querySelector('#body2');
      this.content_section = this.shadowRoot.querySelector('#content-section');
      return !!this.title_el && !!this.body_el1 && !!this.body_el2 && !!this.content_section;
    });
    this.title_el.paused = false;
    this.body_el1.paused = false;
    this.body_el2.paused = false;
    await untilTimer(1500);
    this.content_section.classList.add('show');
  }

  render() {
    return html`
    <div id="hero-section">
      <dwg-text-animation
        id="title"
        animation_delay="100"
        animation_speed="1000"
        justify
        paused
        animation_type="${AnimationType.FADE_IN}"
        text="${this.title_text}"
      ></dwg-text-animation>
      <dwg-text-animation
        id="body1"
        class="body"
        animation_delay="400"
        animation_speed="1000"
        justify
        paused
        animation_type="${AnimationType.FADE_IN}"
        text="${this.body_text1}"
      ></dwg-text-animation>
      <dwg-text-animation
        id="body2"
        class="body"
        animation_delay="600"
        animation_speed="1000"
        justify
        paused
        animation_type="${AnimationType.FADE_IN}"
        text="${this.body_text2}"
      ></dwg-text-animation>
    </div>
    <div id="content-section">
      <div class="content-header">Project Highlights</div>
      <dwg-project project="fiddlesticks"></dwg-project>
      <dwg-project project="chessonium"></dwg-project>
      <dwg-project project="missio"></dwg-project>
      <dwg-project project="cuf_site"></dwg-project>
      <div class="content-header">Additional Projects</div>
      <dwg-project project="calculator"></dwg-project>
      <dwg-project project="pocket_search"></dwg-project>
      <dwg-project project="lnz"></dwg-project>
      <dwg-project project="tetris"></dwg-project>
      <dwg-project project="rise_of_the_frogs"></dwg-project>
      <dwg-project project="thesis"></dwg-project>
      <dwg-project project="rust_rise_of_the_frogs"></dwg-project>
    </div>
    `;
  }
}