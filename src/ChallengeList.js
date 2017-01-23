import React, {Component, PropTypes} from 'react';
import {UISref} from 'ui-router-react';

export default class ChallengeList extends Component {
  render() {
    const {challenges} = this.props.resolves;
    return (
      <div className="ChallengeList">
        {challenges.map((challenge) => <div key={challenge.id}>
          <UISref to={'challenge'} params={{challengeId:challenge.id}}><a>{challenge.title_en}</a></UISref>
        </div>)}
      </div>
    );
  }
}

ChallengeList.propTypes = {
  resolves: PropTypes.shape({
    challenges: PropTypes.arrayOf(PropTypes.object)
  })
};
