import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import Avatar from './AvatarGroup/Avatar';
import './PresentationView.css';

class PresentationView extends Component {
  componentDidMount() {
      this.references.forEach((element, index) => {
        setTimeout(function(element) {
        element.style.display = 'initial';
      }, index * 1800, element);
      });
  }//<img className="achievement" style={{left, top}} src={achievement.photo} alt={achievement.id}/>;
  render() {
      return (
        <div className="PresentationView">
          {this.props.resolves.achievements.map((achievement, i) => {
            const left = Math.floor((Math.random() * 100) + 1).toFixed(2) + '%';
            const top = Math.floor((Math.random() * 100) + 1).toFixed(2) + '%';
            const num = Math.floor((Math.random() * 10) + 1);
            return <div key={i} className={`PresentationItem x${num}`} style={{backgroundImage:`url('${achievement.photo}')`, left, top}} ref={(e) => {
              if(_.isUndefined(this.references)) {
                this.references = [];
              }
              this.references[i] = e;
              return this.references;
            }}>
                <div className="author">
                    <Avatar picture={achievement.userPhoto}/><span className="authorName">{achievement.name}</span>
                </div>

            </div>
          })}
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
