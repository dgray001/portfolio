import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('dwg-link')
export class DwgLink extends LitElement {
  static styles = css`
  a {
    align-items: center;
    color: rgb(51, 255, 255);
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5em;
    height: 2em;

    &:link, :link {
      color: rgb(51, 255, 255);

      &:hover, :hover {
        color: rgb(120, 255, 255);
      }
    }

    &:visited, :visited {
      color: rgb(51, 180, 255);

      &:hover, :hover {
        color: rgb(100, 240, 255);
      }
    }

    &:active, :active {
      color: rgb(50, 140, 140) !important;
    }

    img {
      height: 1.6em;
    }

    span {
      line-height: 2em;
    }
  }
  `;

  @property({type: String})
  href = '';

  @property({type: String})
  text = '';

  @property({type: String})
  src = 50;

  render() {
    return html`
    <a href="${this.href}" target="_blank">
      <img draggable="false" alt="" src="/images/${this.src}.png">
      <span>${this.text}</span>
    </a>
    `;
  }
}