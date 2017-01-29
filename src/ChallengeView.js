import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import {UIView} from 'ui-router-react';
import AchievementList from './AchievementList/AchievementList';
import AvatarGroup from './AvatarGroup/AvatarGroup';
import './ChallengeView.css';

class ChallengeView extends Component {

  render() {
      const {challenge} = this.props.resolves;
      return (
    <div className="ChallengeView row">
      <div className="col-xs-12 col-md-8 col-md-offset-2">
        <div className="header" style={{backgroundImage: `url('${challenge.photo}')`}}>
            <div className="overlay"/>
            <div className="title">{challenge.title_en} | {challenge.points}pts</div>
            <AvatarGroup pictures={challenge.achievements.map((achievement) => achievement.userPhoto)}/>
        </div>
        <div className="description">{challenge.description_en}</div>
        <AchievementList achievements={challenge.achievements}/>
      </div>
      <UIView/>
    </div>
    );
  }
}

ChallengeView.propTypes = {
  resolves: PropTypes.shape({
    challenge: PropTypes.object
  })
};

export default ChallengeView;
