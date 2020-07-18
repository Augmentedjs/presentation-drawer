import { DirectiveView } from "presentation-decorator";

const INNER_DRAWER = "innerdrawer";
const INNER_DRAWER_CLASS = `.${INNER_DRAWER}`;

const CONTENT = "content";
const CONTENT_CLASS = `.${CONTENT}`;

const MAIN_DRAWER_CLASS ="drawer";
const VISIBLE_CLASS = "visible";

/**
 * A simple drawer with a sliding content drawer window.
 * Currently only supports drawers to the right of the main box.
 * <br/>
 *
 * Supported options:
 * <ul>
 * <li>content - The main content window</li>
 * <li>drawer - The slide-out drawer content</li>
 * </ul>
 * @param {Object} options Options for the class
 * @extends DirectiveView
 */
class DrawerView extends DirectiveView {
  constructor(options) {
    if (!options) {
      options = {};
    }

    if (!options.content) {
      options.content = "";
    }

    if (!options.drawer) {
      options.drawer = "";
    }

    if (!options.name) {
      options.name = "drawerview";
    }

    options.template = /*html*/`
      <div class="${MAIN_DRAWER_CLASS}">
        <div class="${CONTENT}" data-${options.name}="${CONTENT}" data-click="${CONTENT}">
          ${options.content}
        </div>
        <div class="${INNER_DRAWER}" data-${options.name}="${INNER_DRAWER}" data-click="${INNER_DRAWER}">
          ${options.drawer}
        </div>
      </div>
    `;
    super(options);
  };

  /**
   * The callback method for clicking/tapping the main content box
   * @param {Event} e The standard event
   * @returns {DrawerView} Returns 'this'
   */
  content(e) {
    let el;
    if (this.el && typeof this.el === "string") {
      el = document.querySelector(this.el);
    } else if (this.el && typeof this.el === HTMLDivElement) {
      el = this.el;
    } else {
      console.warn(`Drawer ${this.name} is not mounted`);
    }

    if (el) {
      const innerDrawer = el.querySelector(`.${INNER_DRAWER}`);
      if(innerDrawer) {
        innerDrawer.classList.toggle(VISIBLE_CLASS);
      }
    }
    return this;
  };

  /**
   * The callback method for clicking/tapping the innerdrawer
   * @param {Event} e The standard event
   * @returns {DrawerView} Returns 'this'
   */
  innerdrawer(e) {
    const el = document.querySelector(this.el);
    if (el) {
      const innerDrawer = el.querySelector(INNER_DRAWER_CLASS);
      if(innerDrawer) {
        innerDrawer.classList.toggle(VISIBLE_CLASS);
      }
    }
    return this;
  };

  /**
   * Main render method
   * @returns {DrawerView} Returns 'this'
   */
  async render() {
    await super.render();
    await this.delegateEvents();
    return this;
  };
};

export default DrawerView;
