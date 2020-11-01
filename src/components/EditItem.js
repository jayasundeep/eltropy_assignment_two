import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { startEditItem } from '../actions/items';

class EditItem extends React.Component {
    onSubmit = (item) => {
        this.props.editItem(this.props.match.params.id, item);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <p> From edit item </p>
                
                <div>
                    <p>Hey this is with id.. {this.props.match.params.id} </p>
                    
                    {
                        <ItemForm item={this.props.items.find(item =>  item.id === this.props.match.params.id)} 
                            onSubmit={this.onSubmit}/>
                    }
                    
                </div>
                
            </div>
        )
    }
}
    

const mapStateToProps = (state) => {
    return {
        items : state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editItem : (id, item) => dispatch(startEditItem(id, item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);