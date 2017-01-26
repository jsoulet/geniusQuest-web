import request from 'superagent';
const BASE_URI = 'https://geniusquest.iadvize.net/api';

const challengeService = {
  getAllChallenges() {
    return new Promise((resolve, reject) => {
      return request
        .get(BASE_URI + '/challenges')
        .send()
        .end((error, response) => error ? reject(error) : resolve(response.body));
    });
  },
  getChallenge(challengeId) {
    return new Promise((resolve, reject) => {
      return request
        .get(BASE_URI + '/challenges/' + challengeId)
        .send()
        .end((error, response) => error ? reject(error) : resolve(response.body));
    });
  }
};

export default challengeService;
