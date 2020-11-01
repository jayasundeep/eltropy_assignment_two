import React from 'react';
import { connect } from 'react-redux';
import getVisibleItems from '../selectors/selectors';
import { visibleItemsTotal } from '../selectors/selectors';

const ItemSummary = (props) => (
    <div> 
        {props.visibleItems.length === 0 ?
            <div> <h3> No of items : {props.visibleItems.length} </h3>  </div>
            :
            <div>
                <h3> No of items : {props.visibleItems.length} </h3> 
                <h3> {visibleItemsTotal(props.visibleItems)} </h3>
            </div>
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        visibleItems : getVisibleItems(state.items, state.filters),
    }
}

export default connect(mapStateToProps)(ItemSummary);