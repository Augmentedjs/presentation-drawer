import { DirectiveView } from "presentation-decorator";
import Dom from "presentation-dom";

const createCard = (title) => {
  return `<ul>
  <li class="recipe" data-id="356872">
    <span class="calories">230</span>
    <span class="name">${title}</span>
    <ul class="ingredients">
      <li><span class="amount">3 cups</span>broccoli florets</li>
      <li><span class="amount">1 tbsp</span>butter</li>
      <li><span class="amount">1 tbsp</span>olive oil</li>
      <li><span class="amount">1 clove</span>minced garlic</li>
      <li><span class="amount">1</span>chopped onion</li>
      <li><span class="amount">1/2 tsp</span>chopped basil</li>
      <li><span class="amount">1/2 tsp</span>chopped parsley</li>
      <li><span class="amount">8</span>eggs</li>
      <li><span class="amount">2</span>egg whites</li>
      <li><span class="amount">1/2 cup</span>parmigiano reggiano cheese</li>
    </ul>
  </li>
</ul>`
};

class Drawer extends DirectiveView {

  constructor(options){

    if(!options) {
        options = {};
    }

    if(!options.name) {
      options.name = "drawer";
    }

    if(!options.style) {
      options.style = "drawer";
    } else {
      options.style = `drawer ${options.style}`;
    }

    super(options);

    if(options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }

    if(!options.title) {
      this._title = "";
    } else {
      this._title = options.title;
    }

  };

  _template() {
    return createCard(this._title);
  };

  render() {
    this.injectTemplate(this._template());
    return super.render();
  };

  remove() {
    this.removeTemplate(this.el, true);
    return super.remove();
  };

};

export default Drawer;
