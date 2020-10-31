const itemReducerDefault = [];

const itemReducer = (state = itemReducerDefault, action = {}) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return state.concat(action.item);
        default :
            return state;
    }
}