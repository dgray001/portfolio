import {html, css, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import './dwg-text-animation';
import './dwg-link';

@customElement('dwg-header')
export class DwgHeader extends LitElement {
  static styles = css`
  #wrapper {
    display: flex;
    flex-flow: row nowrap;
    height: calc(2 * var(--font-size-largest));
    margin: 0 auto;
    max-width: 1500px;

    > #name {
      display: block;
      font-size: var(--font-size-largest);
      line-height: calc(1.9 * var(--font-size-largest));
      margin-left: 1em;
    }

    > #link-wrapper {
      display: flex;
      flex-flow: column nowrap;
      font-size: calc(0.4 * var(--font-size-largest));
      gap: 0.3em;
      justify-content: center;
      margin-left: auto;
      margin-right: 2em;
    }
  }
  `;

  @state()
  name = 'Daniel Gray';

  render() {
    return html`
    <div id="wrapper">
      <dwg-text-animation id="name" blink text="${this.name}"></dwg-text-animation>
      <div id="link-wrapper">
        <dwg-link text="LinkedIn" src="linkedin" href="https://www.linkedin.com/in/daniel-gray-8a6ba2108/"></dwg-link>
        <dwg-link text="GitHub" src="github" href="https://github.com/dgray001?tab=repositories"></dwg-link>
      </div>
    </div>
    `;
  }
}