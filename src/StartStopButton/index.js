import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ index'
class StartStopButton extends React.Component{
 render(){
 
   if(!this.props.clockOn){
     
   return (
   
   <button id="start_stop"
       onClick={this.props.actions.clockIsOn}>
       Start
   </button>
       
   )
  }else{
     return (
       <button id="start_stop"
         onClick={this.props.actions.doStopTheClock}>
       Stop
      </button>)
  }
 }
}

const mapStateToProps=(state)=>({...state})
const mapDispatchToProps =(dispatch)=>({
  actions: bindActionCreators(actions, dispatch)
}) 
export default 
connect(mapStateToProps,mapDispatchToProps)(StartStopButton)