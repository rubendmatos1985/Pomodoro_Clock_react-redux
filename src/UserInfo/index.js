import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/ index';
import { bindActionCreators } from 'redux';

class UserInfo extends React.Component{
componentWillUpdate(){
  if(this.props.sessionEnded && this.props.clockOn){
    this.props.actions.doUpdateValues()
  }
}
componentDidUpdate(){
  if(this.props.updatedValuesForNewSession){
    
    setTimeout(()=>{
      this.props.actions.clockIsOn()
    },5000);
   }
}
 render(){
  if(this.props.timer < 10){
    if(this.props.counter < 10){
      return (
        <div id="user-info">
          <div id="timer-label">{this.props.userInfoText}</div>
          <div id="time-left">0{this.props.timer}:0{this.props.counter}
          </div>
        </div>
      )
    }
    return (
      <div id="user-info">
        <div id="timer-label">{this.props.userInfoText}</div>
        <div id="time-left">0{this.props.timer}:{this.props.counter}
        </div>
      </div>
      )
  }else{
    if(this.props.counter < 10){
      return (
        <div id="user-info">
          <div id="timer-label">{this.props.userInfoText}</div>
          <div id="time-left">{this.props.timer}:0{this.props.counter}
          </div>
        </div>
      )  
    }
    return (
      <div id="user-info">
        <div id="timer-label">{this.props.userInfoText}</div>
        <div id="time-left">{this.props.timer}:{this.props.counter}
        </div>
      </div>
    )
  }
  
}
}

const mapStateToProps=(state)=>({...state})
const mapDispatchToProps=(dispatch)=>({
    actions: bindActionCreators(actions, dispatch)
  })


export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)