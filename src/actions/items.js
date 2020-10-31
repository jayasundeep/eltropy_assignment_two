// setting items from local storage
import { v4 as uuid } from 'uuid';

const setItem = (item = {}) => ({
    type : 'SET_ITEM',
    item
});

export const startSetItem = () => {
    return (dispatch, getState) => {
        return new Promise (
            function() {
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
        const itemToAdd = {
            id : uuid(),
            description : itemData.description,
            value : itemData.value
        }
        
        console.log('I was here');
        return new Promise (
            function () {
                const itemsString = localStorage.getItem('items');
                const itemsInLocalStorage = JSON.parse(itemsString);
                itemsInLocalStorage.push(itemToAdd);
                localStorage.setItem('items', JSON.stringify(itemsInLocalStorage));
            }
        ).then(
            dispatch(addItem(itemToAdd))
        );
    }
}