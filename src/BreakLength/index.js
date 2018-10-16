import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ index';
class BreakLength extends Component {
  render() {
  
    return (
      <div id="break-label">
        Break Length
       <div className="selectors"> 
        <button id="break-increment"
        onClick={this.props.actions.incrementPause}>+</button>
        <div id="break-length">{this.props.breakTime}</div>
        <button id="break-decrement"
        onClick={this.props.actions.decrementPause}>-</button>
       </div> 
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps=(dispatch)=>({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(BreakLength);
