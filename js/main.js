import { Home } from './home.js';
import { Category } from './category.js';
import { Contact } from './contact.js';
import { Area } from './area.js';
import { Ingredients } from './ingredients.js';
import { Search } from './search.js';

let home = new Home();
await home.displayAll();

document.getElementById("home-btn").addEventListener("click", async function() {
    let home = new Home();
    await home.displayAll();
});



document.getElementById("search-btn").addEventListener("click", async function() {
    let search = new Search();
    await search.displayAll();
});


document.getElementById("category-btn").addEventListener("click", async function() {
    let category = new Category();
    await category.display();
});

document.getElementById("area-btn").addEventListener("click", async function() {
    let area = new Area();
    await area.display();
});

document.getElementById("ingredient-btn").addEventListener("click", async function() {
    let ingredients = new Ingredients();
    await ingredients.display();
});

document.getElementById("contact-btn").addEventListener("click", function() {
    let contact = new Contact();
    contact.display();
});
