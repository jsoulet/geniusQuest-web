import Avatar from './AvatarGroup/Avatar';
import React, { Component, PropTypes } from 'react';

class PresentationItem extends Component {

  render (){
    const {achievement} = this.props;

    return (<div className={`col-xs-4`}>
      <div className={`PresentationItem bounceIn`} style={{backgroundImage:`url('${achievement.photo}')`}} ref={(e) => {this.domElement = e;}}>
          <div className="data questName">
            {achievement.title_en}
          </div>
          <div className="data author">
              <Avatar picture={achievement.userPhoto}/><span className="authorName">{achievement.name}</span>
          </div>
      </div>
    </div>);
  }
}

PresentationItem.propTypes = {
  achievement: PropTypes.shape({
    photo: PropTypes.string,
    userPhoto: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default PresentationItem;
