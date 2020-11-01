const defaultFilters = {
    text : ''
};

const filterReducer = (state = defaultFilters, action = {}) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text : action.text
            }
        default :
            return state;
    }
}

export default filterReducer;