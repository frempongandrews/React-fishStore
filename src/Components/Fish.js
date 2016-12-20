import React from 'react';
import h from '../scripts/helpers';

const Fish = React.createClass({
    addToOrderHandler () {
        var key = this.props.index;
      this.props.addToOrder(key);
    },
    render () {
        // console.log(this.props.index);
        var details = this.props.details;
        var isAvailable = (details.status === "available" ? true : false);
        var buttonText = (isAvailable ? "Add To Order" : "Sold Out")
        return (
            <li className="menu-fish">
                <img src={details.image} alt="fish"/>
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{h.formatPrice(details.price)}</span>
                    <p>{details.desc}</p>
                    <button disabled={!isAvailable} onClick={this.addToOrderHandler}>{buttonText}</button>
                </h3>
            </li>
        )
    }
});

export default Fish;