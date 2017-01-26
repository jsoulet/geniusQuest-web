import challengeService from './ChallengeService';
import ChallengeView from './ChallengeView';
import ChallengeListView from './ChallengeListView';

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
      resolveFn: (trans) => challengeService.getChallenge(trans.params().challengeId)
    }]
  }
];
