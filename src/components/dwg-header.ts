import {html, css, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import {clientOnMobile, until} from '../scripts/util';

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

    > #hamburger-overlay {
      background-color: rgba(240, 240, 240, 0.3);
      height: 110vh;
      left: 0;
      opacity: 1;
      position: absolute;
      top: 0;
      transition: opacity 0.7s ease;
      width: 100vw;
      z-index: 2;

      &:not(.show) {
        opacity: 0;
        visibility: hidden;
      }
    }

    > #link-wrapper {
      align-items: center;
      display: none;
      flex-flow: row nowrap;
      font-size: calc(0.4 * var(--font-size-largest));
      gap: 2em;
      display: none;
      margin-left: auto;
      margin-right: 2em;

      &.not-mobile {
        display: flex;
      }

      &.mobile {
        background-color: rgb(40, 40, 40);
        display: flex;
        flex-direction: column;
        height: 100vh;
        margin: 0;
        position: absolute;
        right: -40vw;
        top: 0;
        transition: right 0.7s ease;
        width: 40vw;
        z-index: 3;

        :first-child {
          margin-top: calc(2.4 * var(--font-size-largest));
        }

        &.show {
          right: 0;
        }
      }
    }

    #hamburger {
      background-color: rgba(200, 200, 200, 0.1);
      border: none;
      border-radius: calc(0.8 * var(--font-size-largest));
      height: calc(1.6 * var(--font-size-largest));
      margin: 0;
      padding: 0;
      position: absolute;
      right: calc(0.4 * var(--font-size-largest));
      top: calc(0.2 * var(--font-size-largest));
      width: calc(1.6 * var(--font-size-largest));
      z-index: 4;

      &:not(.mobile) {
        display: none;
      }

      &:hover {
        background-color: rgba(200, 200, 200, 0.3);
      }

      &:active {
        background-color: rgba(200, 200, 200, 0.5);
      }

      > img {
        height: 100%;
        min-height: 0;
        min-width: 0;
        width: 100%;
      }
    }
  }
  `;

  @state()
  name = 'Daniel Gray';

  @state()
  link_wrapper: HTMLDivElement = undefined;

  @state()
  hamburger: HTMLButtonElement = undefined;

  @state()
  hamburger_overlay: HTMLDivElement = undefined;

  async connectedCallback() {
    super.connectedCallback();
    await until(() => {
      this.link_wrapper = this.shadowRoot.querySelector('#link-wrapper');
      this.hamburger = this.shadowRoot.querySelector('#hamburger');
      this.hamburger_overlay = this.shadowRoot.querySelector('#hamburger-overlay');
      return !!this.link_wrapper && !!this.hamburger && !!this.hamburger_overlay;
    });
    if (clientOnMobile()) {
      this.link_wrapper.classList.add('mobile');
      this.hamburger.classList.add('mobile');
      this.hamburger.addEventListener('click', () => {
        this.link_wrapper.classList.toggle('show');
        this.hamburger_overlay.classList.toggle('show');
      });
    } else {
      this.link_wrapper.classList.add('not-mobile');
    }
  }

  render() {
    return html`
    <div id="wrapper">
      <dwg-text-animation id="name" blink text="${this.name}"></dwg-text-animation>
      <div id="hamburger-overlay"></div>
      <div id="link-wrapper">
        <dwg-link text="Resume" src="resume" href="/files/resume.pdf"></dwg-link>
        <dwg-link text="GCP Cert." src="cert" href="https://google.accredible.com/e70751dd-9a41-4046-b326-bd44008bba78"></dwg-link>
        <dwg-link text="LinkedIn" src="linkedin" href="https://www.linkedin.com/in/daniel-gray-8a6ba2108/"></dwg-link>
        <dwg-link text="GitHub" src="github" href="https://github.com/dgray001?tab=repositories"></dwg-link>
      </div>
      <button id="hamburger"><img draggable="false" alt="" src="/images/hamburger.png"></button>
    </div>
    `;
  }
}