import React, { Component, PropTypes } from 'react';
import {UISref} from 'ui-router-react';

class ChallengeView extends Component {

  render() {
      const {challenge} = this.props.resolves;
      return (
    <div className="ChallengeView">
      <UISref to="challenges"><a>Campagin list</a></UISref>
      <div>{challenge.title_en}</div>
    </div>
    );
  }
}

ChallengeView.propTypes = {
  resolves: PropTypes.shape({
    challenge: PropTypes.object
  })
};

export default ChallengeView;
