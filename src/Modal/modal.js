import React from 'react';
import { connect } from 'react-redux';

class Modal extends React.Component{
  render(){
    return( 
    <div id="modal">
        <img src="https://loading.io/spinners/hourglass/lg.sandglass-time-loading-gif.gif"></img>
    </div> );
  }
}

const mapStateToProps=(state)=>({...state})

export default connect(mapStateToProps)(Modal)