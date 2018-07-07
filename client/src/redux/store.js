import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './reducers';

const store = createStore(indexReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;