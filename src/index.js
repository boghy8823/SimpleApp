
import   React from "react";
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './defaultStyles';
import { loadLiveMatches } from './actions/liveMatchesActions';

import App from './App';

import configureStore from './configureStore';

const store = configureStore();
const MOUNT_NODE = document.getElementById('root');

store.dispatch(loadLiveMatches());

render(
  <Provider store={store}>
  		<App />
  </Provider>,
  MOUNT_NODE,
);
