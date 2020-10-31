import React from 'react';
import { connect } from 'react-redux';

import ItemForm from './ItemForm';
import { startAddItem } from '../actions/items';

class AddItem extends React.Component {
   onSubmit = (item) => {
        this.props.addItem(item);
   }
   
    render(){
       return (
            <div>
                <h2> Add Expense </h2>
                <ItemForm onSubmit={this.onSubmit}/>
            </div>
       );
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem : (item) => dispatch(startAddItem(item))
    }
}

export default connect(undefined, mapDispatchToProps)(AddItem);