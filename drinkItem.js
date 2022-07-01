import fetchDrinks from "./fetchDrinks.js";
import showDrink from "./showDrink.js";


const getDrink = async() => {
    const id = localStorage.getItem('drink');
    if (!id) {
        window.location.replace('index.html');
    } else {
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
        showDrink(drink);
    }
};

window.addEventListener('DOMContentLoaded', getDrink);