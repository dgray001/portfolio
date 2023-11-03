import {html, css, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

/** Type describing a project */
export declare interface Project {
  title: string;
  description: string;
  link: string;
  technologies: ProjectTechnology[];
}

declare interface ProjectTechnology {
  name: string;
  type: string;
}

@customElement('dwg-project')
export class DwgProject extends LitElement {
  static styles = css`
  #wrapper {
    background-color: rgba(50, 50, 70, 0.3);
    border: 1px solid rgba(120, 120, 120, 0.5);
    border-radius: 1em;
    box-sizing: border-box;
    color: var(--text-color);
    display: block;
    font-size: var(--font-size-medium);
    min-height: 8em;
    padding: 1.5em;
    text-decoration: none;
    user-select: none;
    width: 100%;

    &:hover {
      background-color: rgba(50, 50, 90, 0.4);
      cursor: pointer;
    }

    &:active {
      background-color: rgba(50, 50, 110, 0.5);
      cursor: pointer;
    }

    #header {
      #title {
        font-size: var(--font-size-medium);
        font-weight: bold;
      }
    }

    #description {
      font-size: var(--font-size-small);
    }
  }
  `;

  @property({type: String})
  project = '';

  @state({hasChanged: (a: Project, b: Project) => (a?.title !== b?.title)})
  project_data: Project = {
    title: '',
    description: '',
    link: '',
    technologies: [],
  };

  connectedCallback() {
    super.connectedCallback();
    switch(this.project) {
      case 'fiddlesticks':
        this.project_data = {
          title: 'Game Lobby',
          description: `
          A web-based game lobby where users can chat, join rooms, and launch
          esoteric games. Currently only supports the card game fiddlesticks.
          `,
          link: 'https://fiddlesticks.live',
          technologies: [
            {name: 'Golang', type: 'lang'},
          ],
        };
        break;
      default:
        break;
    }
  }

  render() {
    return html`
    <a id="wrapper" href="${this.project_data.link}" target="_blank">
      <div id="header">
        <span id="title">${this.project_data.title}</span>
        ${map(this.project_data.technologies, (tech: ProjectTechnology) => html`
        <span class="tech ${tech.type}">${tech.name}</span>
        `)}
      </div>
      <div id="description">${this.project_data.description}</div>
    </a>
    `;
  }
}