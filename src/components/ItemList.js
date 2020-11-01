import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

export const ItemList = (props) => (
    <div>
        {
            props.itemsTolist.length === 0 ?
            <span> No items in store </span> 
            :
            <div>
                {props.itemsTolist.map((item) => {
                    console.log(props);
                    return <Item item={item} key={item.id}/>
                })}
            </div>
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        itemsTolist : state.items
    }
}

export default connect(mapStateToProps)(ItemList);