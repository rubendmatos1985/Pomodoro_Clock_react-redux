import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/ index';
import { bindActionCreators } from 'redux';

const Reset = (props)=>(
   <button id="reset"
    onClick={props.actions.Reset}>Reset</button>

);
  

const mapStateToProps = (state)=>({...state});
const mapDispatchToProps=(dispatch)=>({
  actions: bindActionCreators(actions, dispatch)
})
export default 
connect(mapStateToProps, mapDispatchToProps)(Reset);
