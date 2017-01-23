import challengeService from './ChallengeService';
import ChallengeView from './ChallengeView';
import ChallengeList from './ChallengeList';

export default [{
    name: 'challenges',
    url: '/challenges',
    component: ChallengeList,
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
      resolveFn: (trans) => challengeService.getChallenge(trans.params().challengeId)
    }]
  }
];
