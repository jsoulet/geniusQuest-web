import React, {Component, PropTypes} from 'react';
import AchievementListItem from './AchievementListItem'
import './AchievementList.css'

export default class AchievementList extends Component {
  render() {
    return (
      <div className="AchievementList row">
        {this.props.achievements.map((achievement) => <AchievementListItem key={achievement.id} achievement={achievement}/>)}
      </div>
    );
  }
}

AchievementList.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.object)
};
