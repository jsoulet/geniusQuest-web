import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-image-lightbox';
import Avatar from './AvatarGroup/Avatar';
import './TheatreView.css';

class TheatreView extends Component {

  render() {
      const achievement = this.props.resolves.achievement;
      return (
    <div className="TheatreView">
      <Lightbox
          mainSrc={achievement.photo}
          nextSrc={achievement.next.photo}
          prevSrc={achievement.previous.photo}
          enableZoom={false}
          onCloseRequest={() => this.props.transition.router.stateService.go('^')}
          onMovePrevRequest={() => this.props.transition.router.stateService.go('challenge.theatre', {achievementId:achievement.previous.id})}
          onMoveNextRequest={() => this.props.transition.router.stateService.go('challenge.theatre', {achievementId:achievement.next.id})}
          imageCaption={<div className="TheatreViewCaption"><Avatar picture={achievement.userPhoto}/><span className="authorName">{achievement.name}</span></div>}
      />
    </div>
    );
  }
}

TheatreView.propTypes = {
  resolves: PropTypes.shape({
    achievement: PropTypes.object
  }),
  transition: PropTypes.object
};

export default TheatreView;
