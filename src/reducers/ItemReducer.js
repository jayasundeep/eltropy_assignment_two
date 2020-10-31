const itemReducerDefault = [];

const itemReducer = (state = itemReducerDefault, action = {}) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return state.concat(action.item)
        case 'SET_ITEM':
            return action.item
        case 'REMOVE_ITEM':
            return state.filter((item) => item.id !== action.id)
        default :
            return state;
    }
    return state;
}

export default itemReducer;