import {html, css, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

import {until, untilTimer} from '../scripts/util';

export enum AnimationType {
  UNKNOWN,
  TYPING,
  FADE_IN,
}

@customElement('dwg-text-animation')
export class DwgTextAnimation extends LitElement {
  static styles = css`
  #wrapper {
    &.justified {
      text-align: justify;
    }

    &.fade-in {
      opacity: 0%;
      position: relative;
      top: 3em;
      transition-property: none;

      &.start {
        opacity: 100%;
        top: 0;
        transition-property: opacity, top;
      }
    }
  }
  `;

  @property({type: String})
  text = '';

  @property({type: Number})
  animation_delay = 0;

  @property({type: Number})
  animation_speed = 50;

  @property({type: AnimationType})
  animation_type = AnimationType.TYPING;

  @property({type: Boolean})
  blink = false;

  @property({type: Boolean})
  justify = false;

  @property({type: Boolean})
  paused = false;

  @state({hasChanged: (a: string, b: string) => a !== b})
  current_text = '';

  @state()
  wrapper: HTMLDivElement = undefined;

  async connectedCallback() {
    super.connectedCallback();
    await until(() => !this.paused);
    this.animation_type = parseInt(this.animation_type.toString()) ?? AnimationType.UNKNOWN;
    await until(() => {
      this.wrapper = this.shadowRoot.querySelector('#wrapper');
      return !!this.wrapper;
    });
    if (this.justify) {
      this.wrapper.classList.add('justified');
    }
    switch(this.animation_type) {
      case AnimationType.TYPING:
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
            } else {
              setTimeout(() => {
                this.current_text = this.text;
              }, 600);
            }
          }, this.animation_delay);
        break;
      case AnimationType.FADE_IN:
        this.wrapper.classList.add('fade-in');
        this.wrapper.style.transitionDuration = `${this.animation_speed.toString()}ms`;
        this.current_text = this.text;
        setTimeout(() => {
          this.wrapper.classList.add('start');
        }, this.animation_delay);
        break;
      default:
        this.current_text = this.text;
        break;
    }
  }

  render() {
    return html`
    <div id="wrapper" .innerHTML="${this.current_text}"></div>
    `;
  }
}