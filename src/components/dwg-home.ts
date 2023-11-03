import {html, css, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import {AnimationType} from './dwg-text-animation';
import {until, untilTimer} from '../scripts/util';
import {DwgLink} from './dwg-link';

import './dwg-link';
import './dwg-text-animation';

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
      top: 3em;
      transition-duration: 1s;
      transition-property: none;

      &.show {
        opacity: 100%;
        top: 0;
        transition-property: opacity, top;
      }
    }
  }
  `;

  @state()
  title_text = "I'm not a great programmer; I'm a good programmer with great habits. ~ Kent Beck";

  @state()
  body_text1 = `
  I'm a full-stack engineer passionate about writing efficient, scalable code
  and cultivating instantiations of best practices. I believe that collaboration
  and individual contribution has more value than rigid processes or tools. I
  find more value in working software than I do in comprehensive documentation.
  I will typically advocate for user feedback before guessing how software will
  be used. Lastly, I embrace challenges as opportunities for growth and
  continuous learning rather than following a short-sighted plan.
  `;

  @state()
  body_text2 = `
  In other words, I'm an agile developer who takes pride in my work.
  `;

  @state()
  agile_manifesto: DwgLink = undefined;

  async connectedCallback() {
    super.connectedCallback();
    await untilTimer(1200);
    await until(() => {
      this.agile_manifesto = this.shadowRoot.querySelector('#hero-section dwg-link.body');
      return !!this.agile_manifesto;
    });
    this.agile_manifesto.classList.add('show');
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
    `;
  }
}