import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import { loadState, saveState} from './utils/localStorage';


export default function configureStore() {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
  );

  store.subscribe(throttle(() => {
  	saveState({
  		liveMatches: store.getState().liveMatches
  	});
  }, 1000));

  return store;
}
