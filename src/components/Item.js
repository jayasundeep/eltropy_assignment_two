import React from 'react';

const Item = (props) => (
    <div>
        {props.item.description} - {props.item.value}
    </div>
);

export default Item;