import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ index';

class Audio extends React.Component{
  componentWillUpdate(){
   const audio = document.getElementById('beep')
   if(this.props.timer === 0 && this.props.counter === 0 ){
     audio.play()
   }else if(this.props.reset){
     audio.currentTime = 0;
     audio.pause()
   }

  
  }
  render(){
    
    return (<audio id="beep" 
    src="https://uploads.codesandbox.io/uploads/user/7f43ac15-5b53-4c31-a6a3-f815740e1dad/lLyM-chimes-glassy.ogg"></audio>)
   }
  }

  
  const mapStateToProps=(state)=>({...state})
  const mapDispatchToProps=(dispatch)=>({
      actions: bindActionCreators(actions, dispatch)
    })
  export default connect(mapStateToProps, mapDispatchToProps)(Audio)