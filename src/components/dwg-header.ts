import {html, css, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import './dwg-text-animation';

@customElement('dwg-header')
export class DwgHeader extends LitElement {
  static styles = css`
  #wrapper {
    height: calc(1.9 * var(--font-size-largest));

    > #name {
      display: block;
      font-size: var(--font-size-largest);
      line-height: calc(1.9 * var(--font-size-largest));
      margin-left: 1em;
    }
  }
  `;

  @state()
  name = 'Daniel Gray';

  render() {
    return html`
    <div id="wrapper">
      <dwg-text-animation id="name" text="${this.name}"></dwg-text-animation>
    </div>
    `;
  }
}