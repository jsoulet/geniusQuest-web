import React, {Component, PropTypes} from 'react';
import ChallengeListItem from './ChallengeListItem'


export default class ChallengeList extends Component {
  render() {
    return (
      <div className="ChallengeList row">
        {this.props.challenges.map((challenge) => <ChallengeListItem key={challenge.id} challenge={challenge}/>)}
      </div>
    );
  }
}

ChallengeList.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.object)
};
