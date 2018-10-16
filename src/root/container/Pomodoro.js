import React from 'react';
import { connect } from 'react-redux';
import BreakLength from '../../BreakLength';
import SessionLength from '../../SessionLength';
import UserInfo from '../../UserInfo'
import StartStopButton from '../../StartStopButton'
import ResetButton from '../../ResetButton';
import Audio from '../../Audio/audio'; 
import Modal from '../../Modal/modal';
class Pomodoro extends React.Component{
  render(){
    return (
    <div id="pomodoro-container">
    <div className="clock">
    <UserInfo/>
    <BreakLength/>
    <SessionLength/>
    <StartStopButton/>
    <ResetButton/>
    <Audio/>
    </div>

    {
     this.props.modal ? 
      <Modal/>:
      null
     }
    </div>
  )
  };
}

const mapStateToProps = (state, props) => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Pomodoro);
