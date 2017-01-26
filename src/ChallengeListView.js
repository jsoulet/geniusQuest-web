import React, {Component, PropTypes} from 'react';
import ChallengeList from './ChallengeList/ChallengeList'

export default class ChallengeListView extends Component {
  render() {
    const {challenges} = this.props.resolves;
    return (
      <div className="ChallengeListView">
        <ChallengeList challenges={challenges}/>
      </div>
    );
  }
}

ChallengeListView.propTypes = {
  resolves: PropTypes.shape({
    challenges: PropTypes.arrayOf(PropTypes.object)
  })
};
