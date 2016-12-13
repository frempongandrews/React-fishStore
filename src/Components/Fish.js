import React from 'react';
import h from '../scripts/helpers';

const Fish = React.createClass({
    render () {
        var details = this.props.details;
        return (
            <li className="menu-fish">
                <img src={details.image}/>
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{h.formatPrice(details.price)}</span>
                    <p>{details.desc}</p>
                </h3>
            </li>
        )
    }
});

export default Fish;