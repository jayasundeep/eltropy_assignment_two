import React from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';
import ItemFilters from './ItemFilters';
import ItemSummary from './ItemSummary';

const Home = () => (
    <div>
        <div>
            <AddItem />
        </div>
        <div>
            <ItemFilters />
        </div>
        <div>
            <ItemList />
        </div>
        <div>
            <ItemSummary />
        </div>
    </div>
)

export default Home;