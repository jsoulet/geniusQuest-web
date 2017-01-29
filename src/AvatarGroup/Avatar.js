import React, {Component, PropTypes} from 'react';
import './Avatar.css'
export default class Avatar extends Component {
  render() {
    return (
      <div className="Avatar">
        <img src={this.props.picture}/>
      </div>
    );
  }
}

Avatar.propTypes = {
  picture: PropTypes.string
};
