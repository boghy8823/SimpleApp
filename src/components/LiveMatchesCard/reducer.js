import * as types from '../../actions/actionTypes';

const InitialState = {
	liveMatches: null,
  currentLiveMatchIndex: 0
};

export default function liveMatches(state = InitialState, action) {
  switch (action.type) {
  	case types.LOAD_LIVE_MATCHES_SUCCESS:
  		return {
  			...state,
  			liveMatches: action.liveMatches
  		}
    case types.LOAD_CACHED_LIVE_MATCHES:
      return {
        ...state
      }
    default: 
        return state;
  }
}