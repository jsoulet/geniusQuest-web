import React, { Component, PropTypes } from 'react';
import {UISref} from 'ui-router-react';
import AchievementList from './AchievementList/AchievementList';

class ChallengeView extends Component {

  render() {
      const {challenge} = this.props.resolves;
      return (
    <div className="ChallengeView">
      <UISref to="challenges"><a>Campagin list</a></UISref>
      <div><img src={challenge.photo} alt={challenge.title_en}/></div>
      <div>{challenge.title_en} | {challenge.points}pts</div>
      <div>{challenge.description_en}</div>
      <AchievementList achievements={challenge.achievements}/>
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
