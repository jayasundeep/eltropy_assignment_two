const getVisibleItems = (items, filters) => {
    let filteredItems = [];
    items.filter((item) => {
        if(item.description.toLowerCase().includes(filters.text.toLowerCase())) {
            filteredItems.push(item);
            return true;
        } else {
            return false;
        }
    })
    return filteredItems;
};

export default getVisibleItems;

export const visibleItemsTotal = (items) => {
    let sum = 0;
    items.map((item) => {
        let val = parseInt(item.value);
        sum = sum + val;
        return item;
    })
    return sum;
}