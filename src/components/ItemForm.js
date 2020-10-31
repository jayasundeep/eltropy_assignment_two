import React from 'react';


export default class ItemForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            description : "",
            value : "",
            error : undefined
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onValueChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({value}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.value){
            this.setState(() => ({error : 'Please fill both item description and value'}));
        }else {
            this.setState(() => ({error : undefined}));
            const item = {
                description : this.state.description,
                value : this.state.value
            };
            /*
            const itemsInStorage = localStorage.getItem('items');
            
            let items = itemsInStorage.length === 0 ? [] : JSON.parse(itemsInStorage);
            items.push(item);
            console.log(items);
            localStorage.setItem('items', JSON.stringify(items));
            */
            this.props.onSubmit(item);
            // console.log('I am here');
            this.setState(() => ({description : "", value : ""}));
            // use reducer to update state
            
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    placeholder='Enter Description (item name)'
                    type='text'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                >
                </input>
                <input
                    placeholder='Enter value of the item'
                    type='number'
                    value={this.state.value}
                    onChange={this.onValueChange}
                >
                </input>
                <div>
                    <button 
                        className="button" 

                    > Add item </button>
                </div>
                
            </form>
        );
    }
        
};