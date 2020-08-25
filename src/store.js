import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'
import {saveState} from './localStorage';

const preloadedState = loadState();

const store = createStore(rootReducer, preloadedState);


store.subscribe(()=>{
    saveState(store.getState())
})
// const preloadedState = {
//     fruit: [
//         'APPLE',
//         'ORANGE',
//     ],
//     farmers: {
//         1: {
//             id: 1,
//             name: 'John Smith',
//             paid: false,
//         },
//         2: {
//             id: 2,
//             name: 'Sally Jones',
//             paid: false,
//         },
//     }
// };


export default store;