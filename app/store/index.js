import {createStore, combineReducers} from 'redux';
import {appReducer} from './reducers/appReducer';

export const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer);
