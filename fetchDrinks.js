const fetchDrinks = async(Url) => {
    try {
        const response = await fetch(Url);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
};


export default fetchDrinks;