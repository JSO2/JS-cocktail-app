const getElem = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error("No Found Element");
};

export default getElem;