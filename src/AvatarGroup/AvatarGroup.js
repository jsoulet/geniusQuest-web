import React, {Component, PropTypes} from 'react';
import Avatar from './Avatar';
import _ from 'lodash'
import './AvatarGroup.css'

export default class AvatarGroup extends Component {
  renderRemainingAvatars(pictures, displayedAvatars) {
      const remainingAvatars = displayedAvatars.length < pictures.length ? pictures.length - displayedAvatars.length:0;
      if(remainingAvatars > 0) {
        return <span className="remainingAvatars">+ {remainingAvatars}</span>;
      }
  }

  render() {
    const displayedAvatars = _.take(this.props.pictures, 3).reverse();
    return (
      <div className="AvatarGroup">
      <div className="displayedAvatars">
        {displayedAvatars.map((displayedAvatar) => <Avatar picture={displayedAvatar} key={displayedAvatar}/>)}
      </div>
      <span className="reset"/>
      {this.renderRemainingAvatars(this.props.pictures, displayedAvatars)}
      </div>
    );
  }
}

AvatarGroup.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string)
};
