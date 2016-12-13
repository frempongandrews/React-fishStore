import React from 'react';
import Header from './Components/Header';
import Order from './Components/Order';
import Inventory from './Components/Inventory';
import './App.css';


const App = React.createClass({
    getInitialState () {
      return {
          fishes: {

          },
          order: {}
      }
    },
    addFish (fish) {
        var timestamp = (new Date()).getTime();

        //making copy of state

        var updatedState = JSON.parse(JSON.stringify(this.state.fishes));
        updatedState[`fish-` + timestamp] = fish;
        // console.log(updatedState);

        ////update state / set state
        this.setState({
            fishes: updatedState
        });
    },
    render () {
        console.log(this.state);
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="The fish market"/>
                </div>

                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
});

export default App;



