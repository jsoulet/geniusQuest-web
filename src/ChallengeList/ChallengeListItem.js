import React, {Component, PropTypes} from 'react';
import {UISref} from 'ui-router-react';
import './ChallengeListItem.css';

export default class ChallengeListItem extends Component {
  render() {
    const style = {backgroundImage: `url('${this.props.challenge.photo}')`};
    return (
      <div className="ChallengeListItem col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <UISref to={'challenge'} params={{challengeId:this.props.challenge.id}}>
          <div className="content" style={style}>
            <div className="title">
              <a>{this.props.challenge.title_en} | {this.props.challenge.points}pts</a>
            </div>
          </div>
      </UISref>
      </div>
    );
  }
}

ChallengeListItem.propTypes = {
  challenge: PropTypes.object
};
