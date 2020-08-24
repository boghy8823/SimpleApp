import axios from 'axios-jsonp-pro';

class LiveMatchesApi {

  static getLiveMatches() {
    const request = {
      url: 'http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a',
      method: 'get'
    };

    return axios.jsonp('http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a').then(response => {
      return response;
    }).catch(error => {
      return error;
    });
  }
}

export default LiveMatchesApi;