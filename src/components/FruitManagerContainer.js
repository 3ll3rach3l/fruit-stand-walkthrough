import React from 'react';
import store from '../store';
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

    render() {
        const { fruit } = store.getState();

        return (
            <FruitManager fruit={fruit} />
        );
    }
}

export default FruitManagerContainer;