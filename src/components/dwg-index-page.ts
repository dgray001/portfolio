import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import {clientOnMobile} from '../scripts/util';

import './dwg-header';
import './dwg-home';

export enum Page {
  UNKNOWN,
  HOME,
}

@customElement('dwg-index-page')
export class DwgIndexPage extends LitElement {
  static styles = css`
  dwg-header {
    box-shadow: 0px 2px 2px 2px rgb(200, 200, 200);
    display: block;
    margin-bottom: 6px;
  }

  #content {
    box-sizing: border-box;
    --height: calc(100vh - 3 * var(--font-size-largest));
    height: var(--height);
    max-height: var(--height);
    min-height: var(--height);
    margin-top: var(--font-size-larger);
    overflow: auto;
    padding: var(--font-size-largest);

    #min-height-container {
      min-height: calc(100vh - 1.9 * var(--font-size-largest));
    }
  }
  `;

  @property({type: Page})
  page = Page.HOME;

  @property({type: Boolean})
  client_on_mobile = false;

  async connectedCallback() {
    super.connectedCallback();
    this.client_on_mobile = clientOnMobile();
    if (this.client_on_mobile) {
      document.body.classList.add('mobile');
    }
  }

  pageComponent() {
    switch(this.page) {
      case Page.HOME:
        return html`<dwg-home></dwg-home>`;
      default:
        return html`<p>404</p>`;
    }
  }

  render() {
    return html`
    <dwg-header></dwg-header>
    <div id="content">
      <div id="min-height-container">
        ${this.pageComponent()}
      </div>
    </div>
    `;
  }
}