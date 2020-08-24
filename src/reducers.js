import {combineReducers} from 'redux';
import liveMatches from './components/LiveMatchesCard/reducer';

const rootReducer = combineReducers({
  liveMatches
})

export default rootReducer;