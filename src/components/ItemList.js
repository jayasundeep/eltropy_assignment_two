import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import getVisibleItems from '../selectors/selectors';

export const ItemList = (props) => (
    <div>
        {
            props.itemsTolist.length === 0 ?
            <span> No items </span> 
            :
            <div>
                {props.itemsTolist.map((item) => {
                    return <Item item={item} key={item.id}/>
                })}
            </div>
        }
    </div>
);

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        itemsTolist : getVisibleItems(state.items, state.filters) 
    }
}

export default connect(mapStateToProps)(ItemList);