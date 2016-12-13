import React from 'react';
import AddFishForm from './AddFishForm';

const Inventory = React.createClass({
    render() {
        // console.log(this.props.addFish);
        return (
            <div>
                <AddFishForm addFish={this.props.addFish} />
            </div>
        )
    }
});

export default Inventory;