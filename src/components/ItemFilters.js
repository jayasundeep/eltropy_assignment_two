import React from 'react';
import { connect } from 'react-redux';
import { setFilterText } from '../actions/filters';

class ItemFilters extends React.Component {
    onTextChange = (e) => {
        const textValue = e.target.value;
        this.props.onTextChange(textValue);
    }
    render(){
        return (
            <div>
                <input 
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
            </div>
        )
    }
}

const mapFilterStateToProps = (state) => {
    // console.log(state.filters);
    return {
        filters : state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange : (text) => dispatch(setFilterText(text))
    }
}

export default connect(mapFilterStateToProps, mapDispatchToProps)(ItemFilters);