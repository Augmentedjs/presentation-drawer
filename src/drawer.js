import { DirectiveView } from "presentation-decorator";
import Dom from "presentation-dom";

const createCard = (name, drawer, first, second, dataId, firstTitle, secondTitle, innerDrawer, listItems) => {
  let list = ``;
  for(let i in listItems) {
    list = list + `<li>${listItems[i]}</li>`
  }
  return `<ul>
    <li class="${drawer}" data-id="${dataId}" data-${name}="${drawer}" data-click="hide_ingredients">
      <span class="${first}">${secondTitle}</span>
      <span class="${second}" data-${name}="${second}" data-click="click_recipe">${firstTitle}</span>
      <ul class="${innerDrawer}">
        ${list}
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

    if(!options.drawer) {
      this._drawer = "";
    } else {
      this._drawer = options.drawer;
    }

    if(!options.first) {
      this._first = "";
    } else {
      this._first = options.first;
    }

    if(!options.second) {
      this._second = "";
    } else {
      this._second = options.second
    }

    if(!options.dataId) {
      this._dataId = "";
    } else {
      this._dataId = options.dataId;
    }

    if(!options.firstTitle) {
      this._firstTitle = "";
    } else {
      this._firstTitle = options.firstTitle;
    }

    if(!options.secondTitle) {
      this._secondTitle = "";
    } else {
      this._secondTitle = options.secondTitle;
    }

    if(!options.innerDrawer) {
      this._innerDrawer = "";
    } else {
      this._innerDrawer = options.innerDrawer;
    }

    if(!options.listItems) {
      this._listItems = "";
    } else {
      this._listItems = options.listItems;
    }

  };

  _template() {
    return createCard(this.name, this._drawer, this._first, this._second, this._dataId, this._firstTitle, this._secondTitle, this._innerDrawer, this._listItems);
  };

  hide_ingredients(e) {
    const ingredients = e.target.querySelector(".ingredients");
    if(ingredients) {
      ingredients.classList.toggle("visible");
    }
  };

  click_recipe(e) {
    const target = e.target.innerText.replace(/ /gi, "-");
    const recipe = `${target}-${e.target.parentNode.dataset.id}`;
    window.open(`https://www.yummly.com/recipe/${recipe}`);
  };

  click_ingredient(e) {
    const ingredient = e.target.childNodes[e.target.childNodes.length-1].textContent;
    window.open(`https://www.yummly.com/recipes?allowedIngredient=${ingredient}`);
  };

  // nodeObj() {
  //   // const list_ingredient = element.querySelectorAll("ul.ingredients > li");
  //   //
  //   // list_ingredient.forEach((child) => {
  //   //   child.addEventListener("click", this.click_ingredient);
  //   // });
  //
  //   element.querySelector(".name").addEventListener("click", this.click_recipe);
  //   element.addEventListener("click", this.hide_ingredients);
  // };

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
