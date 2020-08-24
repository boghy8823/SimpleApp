import * as types from './actionTypes';
import liveMatchesApi from '../api/LiveMatchesApi';
import { isCacheExpired, loadState } from  './../utils/localStorage';

export function LoadLiveMatchesSuccess(liveMatches) {
  return {type: types.LOAD_LIVE_MATCHES_SUCCESS, liveMatches};
}

export function LoadCachedLiveMatchesSuccess(liveMatches) {
  return {type: types.LOAD_CACHED_LIVE_MATCHES, liveMatches};
}

export function loadLiveMatches() {
  return function(dispatch) {

  	if (!isCacheExpired('cachedLiveMatchesExpiry')) {
  		dispatch(LoadCachedLiveMatchesSuccess(loadState()));
  		return;
  	}
  	
    return liveMatchesApi.getLiveMatches().then(liveMatches => {
      dispatch(LoadLiveMatchesSuccess(liveMatches));
    }).catch(error => {
      throw(error);
    });
  };
}