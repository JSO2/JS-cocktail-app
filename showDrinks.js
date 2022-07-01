import fetchDrinks from "./fetchDrinks.js";
import execDrinks from "./execDrinks.js";
import setupDrink from "./setupDrink.js";



const showDrinks = async(Url) => {
    const data = await fetchDrinks(Url);
    //fetch drinks
    console.log(data);

    //display drinks
    const section = await execDrinks(data);
    if (section) {
        setupDrink(section);
    }
}


export default showDrinks;