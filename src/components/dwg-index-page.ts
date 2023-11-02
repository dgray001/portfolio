import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import {clientOnMobile} from '../scripts/util';

import './dwg-header';

export enum Page {
  HOME,
}

@customElement('dwg-index-page')
export class DwgIndexPage extends LitElement {
  static styles = css`
  dwg-header {
    display: block;
    height: 50px;
  }
  `;

  @property({type: Page})
  page = Page.HOME;

  @property({type: Boolean})
  client_on_mobile = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.client_on_mobile = clientOnMobile();
    if (this.client_on_mobile) {
      document.body.classList.add('mobile');
    }
  }

  pageComponent() {
    switch(this.page) {
      case Page.HOME:
        return html`<div>home!</div>`;
      default:
        return html`<p>404</p>`;
    }
  }

  render() {
    return html`
    <dwg-header></dwg-header>
    ${this.pageComponent()}
    `;
  }
}