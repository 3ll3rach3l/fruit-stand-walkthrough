import React from 'react';
import store from '../store';
import {sellFruit, sellOut} from '../actions/fruitActions';

class FruitSeller extends React.Component {
  sellFruitClick = (event) => {
    const fruit = event.target.innerText;
    // TODO Dispatch to the store an action to sell the fruit.
    store.dispatch(sellFruit(fruit))
  }

  sellOutClick = () => {
    // TODO Dispatch to the store an action to sell out.
    store.dispatch(sellout())
  }

  componentDidMount() {
    // TODO Subscribe to the store to listen for state updates.
    this.unsubscribe = store.subscribe(()=> this.forceUpdate())
  }

  componentWillUnmount() {
    // TODO Unsubscribe the listener from the store.
    if(this.unsubscribe) this.unsubscribe()
  }

  render() {
    // TODO Get the fruit state from the store.
    const fruit = store.getState();
    const distinctFruit = Array.from(new Set(fruit)).sort();

    if (distinctFruit.length === 0) {
      return null;
    }

    return (
      <div>
        <h3>Sell</h3>
        {distinctFruit.map((fruitName, index) => (
          <button key={index} onClick={this.sellFruitClick}>{fruitName}</button>
        ))}
        <button onClick={this.sellOutClick}>SELL OUT</button>
      </div>
    );
  }
}

export default FruitSeller;
