/*eslint-disable */
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import GreetingReducer from './greetings/greetings';


const rootReducer = combineReducers({
  greeting: GreetingReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
  ),
);

export default store
