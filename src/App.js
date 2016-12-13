import React from 'react';
import Header from './Components/Header';
import Order from './Components/Order';
import Inventory from './Components/Inventory';
import Fish from './Components/Fish';
import './App.css';



const App = React.createClass({
    getInitialState () {
      return {
          fishes: {

          },
          order: {}
      }
    },

    addToOrder (key) {
        //making copy of this.state.order
        var copyOrder = JSON.parse(JSON.stringify(this.state.order));
        copyOrder[key] = copyOrder[key] + 1 || 1;
        this.setState({
            order: copyOrder
        });
    },
    renderFish (key) {
        return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
    },
    addFish (fish) {
        var timestamp = (new Date()).getTime();

        //making copy of state

        var updatedState = JSON.parse(JSON.stringify(this.state.fishes));
        updatedState[`fish- ${timestamp}`] = fish;
        // console.log(updatedState);

        ////update state / set state
        this.setState({
            fishes: updatedState
        });
    },
    loadSamples () {
        this.setState ({
            fishes: require('../sample-fishes')
        })
    },
    render () {
        console.log(this.state);
        // console.log(sample);
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="The Fish Market"/>
                    <ul className="list-of-fishes">

                        {Object.keys(this.state.fishes).map(this.renderFish)}

                    </ul>
                </div>

                <Order fishes={this.state.fishes}/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
});

export default App;



