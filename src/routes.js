import challengeService from './ChallengeService';
import ChallengeView from './ChallengeView';
import ChallengeListView from './ChallengeListView';
import TheatreView from './TheatreView';
import _ from 'lodash'

export default [{
    name: 'challenges',
    url: '/challenges',
    component: ChallengeListView,
    resolve: [{
      token: 'challenges',
      resolveFn: () => challengeService.getAllChallenges()
    }]
  },
  {
    name: 'challenge',
    url: '/challenges/:challengeId',
    component: ChallengeView,
    resolve: [{
      token: 'challenge',
      deps: ['$transition$'],
      resolveFn: (trans) => {
        const challenge = challengeService.getChallenge(trans.params().challengeId);
        challenge.achievements = _.chain(challenge.achievements).sortBy('createdDate').reverse().value();
        return challenge;
      }
    }]
  },
  {
    name: 'challenge.theatre',
    url: '/theatre/:achievementId',
    component: TheatreView,
    resolve: [{
      token: 'achievement',
      deps: ['$transition$', 'challenge'],
      resolveFn: (trans, challenge) => {
        const achievementIndex = _.findIndex(challenge.achievements, {id: trans.params().achievementId});
        const achievement = challenge.achievements[achievementIndex];
        achievement.previous = achievementIndex === 0 ? _.last(challenge.achievements) : challenge.achievements[achievementIndex - 1];
        achievement.next = achievementIndex === challenge.achievements.length - 1 ? _.head(challenge.achievements) : challenge.achievements[achievementIndex + 1];
        return achievement;
      }
    }]
  }
];
