import Drawer from "./drawer.js";

const options = {
  "firstTitle":"Broccoli Frittata",
  "dataId":"356872",
  "secondTitle":"230",
  "titleLink":"https://www.yummly.com/recipe/",
  "ingredientLink":"https://www.yummly.com/recipes?allowedIngredient=",
  "listItems":[
    `<span class="amount">3 cups</span>broccoli florets`,
    `<span class="amount">1 tbsp</span>butter`,
    `<span class="amount">1 tbsp</span>olive oil`,
    `<span class="amount">1 clove</span>minced garlic`,
    `<span class="amount">1</span>chopped onion`,
    `<span class="amount">1/2 tsp</span>chopped basil`,
    `<span class="amount">1/2 tsp</span>chopped parsley`,
    `<span class="amount">8</span>eggs`,
    `<span class="amount">2</span>egg whites`,
    `<span class="amount">1/2 cup</span>parmigiano reggiano cheese`
  ],
    "drawer":"recipe",
    "first":"calories",
    "second":"name",
    "innerDrawer":"ingredients"
};

const view = new Drawer(options);
view.render();
