// setting items from local storage

const setItem = (item = {}) => ({
    type : 'SET_ITEM',
    item
});

export const startSetItem = () => {
    return (dispatch, getState) => {
        return new Promise(function() {
                const itemsString = localStorage.getItem('items');
                // console.log(itemsStirng);
                const itemsInLocalStorage = JSON.parse(itemsString);
                dispatch(setItem(itemsInLocalStorage));
            }
        )
    }
}


// console.log(itemsInLocalStorage);

// adding a new item

export const addItem = (item = {}) => ({
    type : 'ADD_ITEM',
    item
});

export const startAddItem = (itemData = {}) => {
    return (dispatch, getState) => {

    }
}