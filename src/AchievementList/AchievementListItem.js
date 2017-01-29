import React, {Component, PropTypes} from 'react';
import Avatar from '../AvatarGroup/Avatar';
import './AchievementListItem.css';

export default class AchievementListItem extends Component {
  render() {
    return (
      <div className="AchievementListItem col-xs-6 col-md-4">
        <div className="achievementPhoto" style={{backgroundImage: `url('${this.props.achievement.photo}')`}}></div>
        <Avatar picture={this.props.achievement.userPhoto}/>
      </div>
    );
  }
}

AchievementListItem.propTypes = {
  achievement: PropTypes.object
};
