import React from 'react';
import h from '../scripts/helpers';
import {browserHistory } from 'react-router';

const StorePicker = React.createClass({
    gotoStore(e) {
        e.preventDefault();
        var storeId = this.refs.storeId.value;
        // alert(storeId.trim());
        // console.log(browserHistory);
        browserHistory.replace(`/store/` + storeId);

    },
    render() {
        return (
            <form className="store-selector" onSubmit={this.gotoStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" ref="storeId" defaultValue={h.getFunName()} required/>
                <input type="submit"/>
            </form>
        )
    }
});

export default StorePicker;