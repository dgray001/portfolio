import {html, css, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import {AnimationType} from './dwg-text-animation';

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
  
    > #body {
      display: block;
      font-size: var(--font-size-small);
      margin-top: 2.5rem;
    }
  }
  `;

  @state()
  title_text = "I'm not a great programmer; I'm a good programmer with great habits. ~ Kent Beck";

  @state()
  body_text = "Passionate about writing clean, efficient code and cultivating good programming habits. I believe in the power of collaboration, continuous learning, and embracing challenges as opportunities for growth. Let's build something amazing together.";

  render() {
    return html`
    <div id="hero-section">
      <dwg-text-animation
        id="title"
        animation_delay="500"
        animation_speed="8"
        text="${this.title_text}"
      ></dwg-text-animation>
      <dwg-text-animation
        id="body"
        animation_delay="1300"
        animation_speed="1000"
        justify animation_type="${AnimationType.FADE_IN}"
        text="${this.body_text}"
      ></dwg-text-animation>
    </div>
    `;
  }
}