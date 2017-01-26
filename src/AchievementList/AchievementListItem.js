import React, {Component, PropTypes} from 'react';


export default class AchievementListItem extends Component {
  render() {
    return (
      <div className="AchievementListItem">
        {this.props.achievement.photo}
      </div>
    );
  }
}

AchievementListItem.propTypes = {
  achievement: PropTypes.object
};
