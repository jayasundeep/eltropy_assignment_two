import React from 'react';
import Item from './Item';

export const ItemList = (props) => (
    <div>
        {
            props.items.length === 0 ?
            <span> No items in store </span> 
            :
            props.items.map((item) => {
                return <Item item={item} key={item.id}/>
            })
        }
    </div>
)