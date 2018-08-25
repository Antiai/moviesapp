import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import { rootReducer } from './rootReducer';

const enhancers = composeWithDevTools(
  applyMiddleware(thunkMiddleware),
  persistState({
    key: 'moviesapp-store',
  }),
);

export const rootStore = createStore(rootReducer, enhancers);
