import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('dwg-header')
export class DwgHeader extends LitElement {
  static styles = css`
  #wrapper {
    > #name {
      font-size: 28px;
      font-weight: bold;
    }
  }
  `;

  @property({type: String})
  name = 'Somebody';

  render() {
    return html`
    <div id="wrapper">
      <span id="name">Daniel Gray</span>
    </div>
    `;
  }
}