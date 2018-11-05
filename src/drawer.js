import { DirectiveView } from "presentation-decorator";
import Dom from "presentation-dom";

const createCard = (drawer, first, second, dataId, firstTitle, secondTitle, innerDrawer, listItems) => {
  let list = ``;
  for(let i in listItems) {
    list = list + `<li>${listItems[i]}</li>`
  }
  return `<ul>
    <li class=${drawer} data-id=${dataId}>
      <span class=${first}>${secondTitle}</span>
      <span class=${second}>${firstTitle}</span>
      <ul class=${innerDrawer}>
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
    return createCard(this._drawer, this._first, this._second, this._dataId, this._firstTitle, this._secondTitle, this._innerDrawer, this._listItems);
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
