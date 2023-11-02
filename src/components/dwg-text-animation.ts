import {html, css, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

import {untilTimer} from '../scripts/util';

@customElement('dwg-text-animation')
export class DwgTextAnimation extends LitElement {
  static styles = css`
  `;

  @property({type: String})
  text = '';

  @property({type: Number})
  animation_speed = 50;

  @property({type: Boolean})
  blink = true;

  @state({hasChanged: (a: string, b: string) => a !== b})
  current_text = '_';

  connectedCallback(): void {
    super.connectedCallback();
    setTimeout(
      async () => {
        for(let i = 0; i <= this.text.length; i++) {
          await untilTimer(this.animation_speed);
          this.current_text = this.text.substring(0, i) + '_';
        }
        if (this.blink) {
          setInterval(() => {
            this.current_text = this.blink ? this.text : this.text + '_';
            this.blink = !this.blink;
          }, 600);
        }
      }, 1);
  }

  render() {
    return html`
    <div id="wrapper">${this.current_text}</div>
    `;
  }
}