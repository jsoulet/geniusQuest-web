import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import PresentationItem from './PresentationItem';

import './PresentationView.css';

class PresentationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedAchievements : _.take(this.props.resolves.achievements, 6),
      remainingAchievements: _.takeRight(this.props.resolves.achievements, this.props.resolves.achievements.length - 6)
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      2000
    );
  }

  tick() {
    let randomIndex = -1;
    do {
        randomIndex = _.random(this.state.displayedAchievements.length - 1);
    } while (randomIndex === this.randomIndex);
    this.randomIndex = randomIndex;


    const newDisplayed = _.map(this.state.displayedAchievements, (achievement, index) => {
      if (index === randomIndex) {
        return _.head(this.state.remainingAchievements);
      }
      return achievement;
    });
    let newRemaining = _.drop(this.state.remainingAchievements);
    if (this.state.remainingAchievements.length === 1) {
      newRemaining = this.props.resolves.achievements;
    }
    this.setState({
        displayedAchievements: newDisplayed ,
        remainingAchievements: newRemaining
      });
  }


  render() {
      const {displayedAchievements, remainingAchievements} = this.state;
      return (
        <div className="container">
        <div className="PresentationView row">
          {displayedAchievements.map((achievement, i) => {
            if(typeof achievement==='undefined') {
              console.log({displayedAchievements, remainingAchievements})
              clearInterval(this.timerID)
            }
            return <PresentationItem achievement={achievement} key={i + '-' + achievement.id}/>})}
        </div>
        <div className="buffer">
          {remainingAchievements.map((achievement, i) => <span key={achievement.id} style={{backgroundImage:`url('${achievement.photo}')`}}/>)}
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

PresentationView.randomIndex = -1;

export default PresentationView;
