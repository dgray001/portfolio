import {html, css, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import {AnimationType} from './dwg-text-animation';
import {until, untilTimer} from '../scripts/util';
import {DwgLink} from './dwg-link';

import './dwg-link';
import './dwg-text-animation';
import './dwg-project';
import { Project } from './dwg-project';

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
  I'm a full-stack engineer with a background in molecular modeling. I am
  passionate about writing efficient, scalable code and cultivating
  instantiations of best practices. I believe in collaboration more than rigid
  processes. I find more value in working software than I do in documentation.
  I will advocate for user feedback before guessing how software should be used.
  Lastly, I embrace challenges as opportunities for growth and continuous
  learning rather than lamenting the loss of a short-sighted plan.
  `;

  @state()
  body_text2 = `
  In other words, I'm an agile developer who takes pride in my work.
  `;

  @state()
  agile_manifesto: DwgLink = undefined;

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
    await untilTimer(1200);
    await until(() => {
      this.agile_manifesto = this.shadowRoot.querySelector('#hero-section dwg-link.body');
      this.content_section = this.shadowRoot.querySelector('#content-section');
      return !!this.agile_manifesto && !!this.content_section;
    });
    this.agile_manifesto.classList.add('show');
    await untilTimer(900);
    this.content_section.classList.add('show');
  }

  render() {
    return html`
    <div id="hero-section">
      <dwg-text-animation
        id="title"
        animation_delay="400"
        animation_speed="1000"
        justify animation_type="${AnimationType.FADE_IN}"
        text="${this.title_text}"
      ></dwg-text-animation>
      <dwg-text-animation
        class="body"
        animation_delay="700"
        animation_speed="1000"
        justify animation_type="${AnimationType.FADE_IN}"
        text="${this.body_text1}"
      ></dwg-text-animation>
      <dwg-text-animation
        class="body"
        animation_delay="1000"
        animation_speed="1000"
        justify animation_type="${AnimationType.FADE_IN}"
        text="${this.body_text2}"
      ></dwg-text-animation>
      <dwg-link
        class="body"
        href="https://agilemanifesto.org/"
        text="Agile Manifesto"
      ></dwg-link>
    </div>
    <div id="content-section">
      <div class="content-header">Project Highlights</div>
      <dwg-project project="fiddlesticks"></dwg-project>
      <dwg-project project="missio"></dwg-project>
      <dwg-project project="pocket_search"></dwg-project>
      <dwg-project project="cuf_site"></dwg-project>
      <div class="content-header">Additional Projects</div>
      <dwg-project project="calculator"></dwg-project>
      <dwg-project project="lnz"></dwg-project>
      <dwg-project project="tetris"></dwg-project>
      <dwg-project project="rise_of_the_frogs"></dwg-project>
      <dwg-project project="thesis"></dwg-project>
      <dwg-project project="rust_rise_of_the_frogs"></dwg-project>
    </div>
    `;
  }
}