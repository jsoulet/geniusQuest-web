import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Avatar from './AvatarGroup/Avatar';
import './PresentationView.css';

class PresentationView extends Component {
  render() {
      return (
        <div className="container">
        <div className="PresentationView row">
          {this.props.resolves.achievements.map((achievement, i) => {
            return <div className={`col-xs-4`} key={i}>
            <div className={`PresentationItem`} style={{backgroundImage:`url('${achievement.photo}')`}}>
                <div className="author">
                    <Avatar picture={achievement.userPhoto}/><span className="authorName">{achievement.name}</span>
                </div>
            </div>
            </div>
          })}
        </div>
        </div>
    );
  }
}

PresentationView.propTypes = {
  resolves: PropTypes.shape({
    achievement: PropTypes.object
  }),
};

export default PresentationView;
