import React from 'react';
import store from '../store';
import {addFruit} from '../actions/fruitActions';
import FruitManager from './FruitManager';

class FruitManagerContainer extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    add = fruit => store.dispatch(addFruit(fruit))

    render() {
        const { fruit } = store.getState();

        return (
            <FruitManager fruit={fruit} add={this.add}/>
        );
    }
}

export default FruitManagerContainer;