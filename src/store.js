import { compose, createStore } from 'redux';
import rootReducer from './reducer';
import { includeMeaningOfLife, sayHiOnDispatch } from './exampleAddons/enhancers';

let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

const composeEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

const store = createStore(rootReducer, preloadedState, composeEnhancer);

export default store;