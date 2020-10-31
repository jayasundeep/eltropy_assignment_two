import React from 'react';

export default () => (
    <div>
        <input
            className="text-input"
            placeholder='Enter item name'
            type='text'
        >
        </input>
        <input
            className="text-input"
            placeholder='Enter value of the item'
            type='number'
        >
        </input>
        <div>
            <button className="button"> Add item </button>
        </div>
        
    </div>
);