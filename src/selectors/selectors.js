const getVisibleItems = (items, filters) => {
    let filteredItems = [];
    items.filter((item) => {
        if(item.description.toLowerCase().includes(filters.text.toLowerCase())) {
            filteredItems.push(item);
        } 
    })
    return filteredItems;
};

export default getVisibleItems;