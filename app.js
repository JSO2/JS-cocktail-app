import showDrinks from "./showDrinks.js";
import './searchForm.js';


const Url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


window.addEventListener("DOMContentLoaded", () => {
    showDrinks(Url);
});