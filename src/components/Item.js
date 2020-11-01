import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startRemoveItem } from '../actions/items';

export const Item = (props) => {
    const onRemove = () => {
        return props.onRemoveItem(props.item.id)
    };

    return (
        <div>
            <Link to={`/edit/${props.item.id}`}>
                {props.item.description} 
            </Link>

            - {props.item.value}
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