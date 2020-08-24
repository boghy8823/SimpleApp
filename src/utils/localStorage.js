export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('cachedLiveMatches');
		if (serializedState === null) {
			return undefined;
		}

		return JSON.parse(serializedState);
	} catch(err) {
		return undefined;
	}
}

export const saveState = (state, cacheExpiry = 120000) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('cachedLiveMatches',serializedState);
		
		if ( isCacheExpired() ) {
			localStorage.setItem('cachedLiveMatchesExpiry', Date.now() + cacheExpiry);
		}
	} catch(err) {
		console.log("There was an error writing to the local storage.")
	}
}

export const isCacheExpired = (cacheKey) => {
	try {
		const cachedStateExpiration = localStorage.getItem('cachedLiveMatchesExpiry');
		return Date.now() > cachedStateExpiration ? true : false;
	} catch(err) {
		console.log('There was an error reading the cacheKey - ', cacheKey);
	}
}