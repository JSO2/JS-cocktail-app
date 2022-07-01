import get from "./elem.js";

const showDrink = (data) => {

    const drink = data.drinks[0];
    const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
    const list1 = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
        drink.strIngredient9,
        drink.strIngredient10,
        drink.strIngredient11,
        drink.strIngredient12,
        drink.strIngredient13,
        drink.strIngredient14,
        drink.strIngredient15
    ]

    const img = get('.drink-img');
    const drinkName = get('.drink-name');
    const instructions = get('.drink-info');
    const ingredients = get('.drink-ingredients');
    img.src = image;
    document.title = name;
    drinkName.textContent = name;
    instructions.textContent = ["Instructions: " + desc];
    ingredients.innerHTML = list1.map((item) => {
        if (!item) return;
        return `<li class="list"> ${item}</li>`
    }).join('');

};


export default showDrink;