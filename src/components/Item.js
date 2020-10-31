import React from 'react';
import { connect } from 'react-redux'

import { startRemoveItem } from '../actions/items';

export const Item = (props) => {
    const onRemove = () => {
        return props.onRemoveItem(props.item.id)
    };

    return (
        <div>
            {props.item.description} - {props.item.value}
            <button onClick={onRemove}>X</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return ({
        onRemoveItem : (id) => dispatch(startRemoveItem(id))
    })
}


export default connect(undefined, mapDispatchToProps)(Item);