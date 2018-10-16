import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ index';
class SessionLength extends Component {
  render() {
    return (
      <div id="session-label">
        Session Length
        <div className="selectors">
        <button id="session-increment"
          onClick={this.props.actions.incrementSession}
        >+</button>
        <div id="session-length">
          {this.props.sessionTime}
         </div>
        <button id="session-decrement"
          onClick={this.props.actions.decrementSession}>-</button>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({ ...state });
const mapDispatchToProps=(dispatch)=>({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(SessionLength);
