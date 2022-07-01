import get from './elem.js';


const execDrinks = ({ drinks }) => {
    const section = get('.section-center');
    const title = get('.title');
    if (!drinks) {

        title.textContent = 'Sorry, no drinks found.'
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `<h3 class="main-title">${name}</h3>
                <a href="drink.html">
                    <article class="img-wrapper" data-id="${name}">
                        <img class="main-img" src="${image}" alt="${name}" />
                    </article>
                 </a>`
    }).join('');

    title.textContent = '';
    section.innerHTML = newDrinks;
    return section;
};

export default execDrinks;