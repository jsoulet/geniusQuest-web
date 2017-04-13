import challengeService from './ChallengeService';
import ChallengeView from './ChallengeView';
import ChallengeListView from './ChallengeListView';
import TheatreView from './TheatreView';
import PresentationView from './PresentationView';
import _ from 'lodash'

export default [{
    name: 'challenges',
    url: '/web/challenges',
    component: ChallengeListView,
    resolve: [{
      token: 'challenges',
      resolveFn: () => challengeService.getAllChallenges()
    }]
  },
  {
    name: 'challenge',
    url: '/web/challenges/:challengeId',
    component: ChallengeView,
    resolve: [{
      token: 'challenge',
      deps: ['$transition$'],
      resolveFn: (trans) => {
        const challenge = challengeService.getChallenge(trans.params().challengeId);
        challenge.achievements = _.chain(challenge.achievements).sortBy('createdDate').reverse().take(40).value();
        return challenge;
      }
    }]
  },
  {
    name: 'challenge.theatre',
    url: '/web/theatre/:achievementId',
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
  },
  {
    name: 'presentation',
    url: '/web/presentation',
    component: PresentationView,
    resolve: [{
      token: 'achievements',
      resolveFn: () => {
        return challengeService
          .getAllChallenges()
          .then((challenges) => {
            return challenges.reduce((result, challenge) => _.concat(result, challenge.achievements.map((achievement) => _.assign({}, achievement, {title_en: challenge.title_en}))), [])
          })
          .then((achievements) => _.chain(achievements).sortBy('createdDate').reverse().take(30).value());
      }
    }]
  }
];
