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

    > #header {
      display: flex;
      flex-flow: row wrap;
      gap: 0.5em;

      > #title {
        font-size: var(--font-size-medium);
        font-weight: bold;
        margin-right: 2em;
      }

      > .tech {
        background-color: rgb(70, 70, 70);
        border-radius: 0.6em;
        box-sizing: border-box;
        color: white;
        font-size: var(--font-size-small);
        padding: 0.3em 0.7em;

        &.language {
          background-color: rgb(90, 20, 20);
        }

        &.framework {
          background-color: rgb(90, 90, 20);
        }

        &.database {
          background-color: rgb(20, 20, 90);
        }

        &.tool {
          background-color: rgb(90, 20, 90);
        }
      }
    }

    > #description {
      font-size: var(--font-size-small);
      margin-top: 0.8em;
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
          A web-based game lobby where users can chat, join rooms, and play
          esoteric games. Can reconnect you to your room or game if the your
          connection is lost.
          `,
          link: 'https://fiddlesticks.cloud',
          technologies: [
            {name: 'Golang', type: 'language'},
            {name: 'Typescript', type: 'language'},
            {name: 'Gin', type: 'framework'},
            {name: 'PostgresQL', type: 'database'},
            {name: 'GCP', type: 'tool'},
            {name: 'Webpack', type: 'tool'},
            {name: 'Sass', type: 'tool'},
          ],
        };
        break;
      case 'chessonium':
        this.project_data = {
          title: 'Chess Engine',
          description: `
          Chess engine which utilizes bitboards, iterative deepening, negamax
          search, quiescence, piece-square tables, configurable search and
          evaluation functions, and transposition tables.
          `,
          link: 'https://github.com/dgray001/chessonium',
          technologies: [
            {name: 'Java', type: 'language'},
            {name: 'JavaFX', type: 'framework'},
            {name: 'Gradle', type: 'tool'},
          ],
        };
        break;
      case 'missio':
        this.project_data = {
          title: 'Missio Homepage',
          description: `
          Helped make website (specifically I made the homepage) of a startup
          given a design and animation descriptions.
          `,
          link: 'https://missio.ai',
          technologies: [
            {name: 'Typescript', type: 'language'},
            {name: 'Next.JS', type: 'framework'},
            {name: 'Tailwind', type: 'framework'},
            {name: 'React', type: 'tool'},
            {name: 'Framer Motion', type: 'tool'},
          ],
        };
        break;
      case 'pocket_search':
        this.project_data = {
          title: 'Pocket Search',
          description: `Graduate school side-project to search PDB database for
          proteins with pockets of an input size/shape. The program uses VASP,
          fpocket, the python Bio module, and some data analysis to find and
          rank possible proteins that have pockets similar in size/shape to the
          input protein.
          `,
          link: 'https://github.com/dgray001/pocketSearch',
          technologies: [
            {name: 'Python', type: 'language'},
            {name: 'C', type: 'language'},
            {name: 'PDB', type: 'database'},
            {name: 'VASP', type: 'tool'},
            {name: 'fpocket', type: 'tool'},
            {name: 'Molecular Modeling', type: 'tool'},
          ],
        };
        break;
      case 'cuf_site':
        this.project_data = {
          title: 'CUF Site',
          description: `
          Made website for small non-profit run by a family friend using their
          design. Work included working with the authorize.net and reCaptcha
          APIs, user login and profile pages, an admin dashboard, a custom
          testing library, and data caching all in vanilla JS without external
          dependencies.
          `,
          link: 'https://cuf.org/',
          technologies: [
            {name: 'Javascript', type: 'language'},
            {name: 'PHP', type: 'language'},
            {name: 'MySQL', type: 'database'},
            {name: 'MS SQL Server', type: 'database'},
            {name: 'Apache Server', type: 'tool'},
          ],
        };
        break;
      case 'calculator':
        this.project_data = {
          title: 'Exact Calculator',
          description: `
          Command-line calculator returning exact results. Demonstrates
          interpreter skills of (tokenize => parse => evaluate). Utilizes a
          versatile AST so extending to further math functionality is
          programmatically trivial.
          `,
          link: 'https://github.com/dgray001/calculator',
          technologies: [
            {name: 'Golang', type: 'language'},
            {name: 'Interpreter', type: 'tool'},
          ],
        };
        break;
      case 'lnz':
        this.project_data = {
          title: 'LNZ',
          description: `
          Relatively large (>100k lines of code) desktop RPG with 3D graphics
          and pseudo-physics, infinite terrain generation, and complex parallel
          computations. Also includes a button/form library written from scratch
          with testing in JUnit.
          `,
          link: 'https://github.com/dgray001/LNZ_public',
          technologies: [
            {name: 'Java', type: 'language'},
            {name: 'JUnit', type: 'framework'},
            {name: 'Processing', type: 'framework'},
            {name: 'Maven', type: 'tool'},
          ],
        };
        break;
      case 'tetris':
        this.project_data = {
          title: 'Tetris',
          description: `Simple implementation of a Tetris-like game in
          Processing, with support for LAN multiplayer (2 players) and a
          chatbox, using the Processing library and standard Java libraries.
          `,
          link: 'https://github.com/dgray001/Tetris',
          technologies: [
            {name: 'Java', type: 'language'},
            {name: 'Processing', type: 'framework'},
            {name: 'JUnit', type: 'framework'},
          ],
        };
        break;
      case 'rise_of_the_frogs':
        this.project_data = {
          title: 'Rise of the Frogs',
          description: `
          Command-line RPG utilizing only the standard libraries of C++,
          featuring 3D physics, several maps, and complex turn-based
          combat. Gain sentience, escape the aquarium, and conquer the world!
          `,
          link: 'https://github.com/dgray001/RiseOfTheFrogs',
          technologies: [
            {name: 'C++', type: 'language'},
          ],
        };
        break;
      case 'thesis':
        this.project_data = {
          title: '"Mercedes-Benz" Water',
          description: `
          Undergraduate thesis project implementing a simple, 2D model of water
          that mimics the unique thermodynamic characteristics of real water.
          This model was characterized further than any published research had
          gone and subsequently used to qualitatively simulate the thermodynamic
          effects of macromolecular crowding.
          `,
          link: 'https://github.com/dgray001/MB/blob/master/thesis.pdf',
          technologies: [
            {name: 'Java', type: 'language'},
            {name: 'Python', type: 'language'},
            {name: 'MatPlotLib', type: 'tool'},
            {name: 'Molecular Modeling', type: 'tool'},
          ],
        };
        break;
      case 'rust_rise_of_the_frogs':
        this.project_data = {
          title: 'Rise of the Frogs (rust ed.)',
          description: `
          Command-line RPG similar to the previous C++ version utilizing only
          the standard library of Rust and select low-level crates. Rise from
          the bottom of the food chain to develop your frog empire and conquer
          the universe!
          `,
          link: 'https://github.com/dgray001/rise_of_the_frogs_rust',
          technologies: [
            {name: 'Rust', type: 'language'},
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