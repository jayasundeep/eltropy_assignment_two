import React from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';

const Home = () => (
    <div>
        <div>
            <AddItem />
        </div>
        <div>
            <ItemList />
        </div>

    </div>
)

export default Home;