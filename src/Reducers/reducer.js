
export default function reducer(state, action){
  switch (action.type){
     case 'INCREMENT_BREAKTIME':{
       if(state.breakTime < 60){
        return {
        ...state,
         breakTime: state.breakTime + 1,
           
        }
        }else{
          return state
        }
        
       }
    case 'DECREMENT_BREAKTIME':{
      if(state.breakTime > 1){
      return {
        ...state,
        breakTime: state.breakTime -1,
      }
      }else{
       return state
        
      }
      
    }
    case 'INCREMENT_SESSION' :{
      if(state.sessionTime < 60 ){
          return{
        ...state,
        sessionTime: state.sessionTime +1,
        stopSetInterval: true,
        timer: state.sessionTime + 1,
        reset: false,
        counter: 0
        }
       }else{
        return state
      }
    }
    case 'DECREMENT_SESSION' :{
      if(state.sessionTime > 1){
        
        return {
        ...state,
        sessionTime: state.sessionTime - 1,
        stopSetInterval : true, 
        timer: state.sessionTime - 1,
        reset: false,
       counter: 0
       
      }
      }else{
        return state
      }
    }

    case 'COUNTING' : {
      if(state.counter > 0){
      return {
        ...state,
        counter: state.counter - 1,
       clockOn: true,
       reset: false,
       sound: false,
       pauseTime: false, 
       }
      }else if(state.counter === 0 && state.timer > 0){
        return {
          ...state,
          timer: state.timer - 1,
          counter: 59,  
          clockOn: true,
          reset: false,
          } 
      }
      else{
        return{
          ...state,
          stopSetInterval: true,
          sessionEnded: true,
          }
      }
    }

    case 'STOPED' :{
      return {
        ...state,
        stopSetInterval: true,
        clockOn: false,
        reset: true,
      
      }
    }
  case 'STARTED' :{
      return {
        ...state,
        clockOn: true,
        stopSetInterval: false,
        sessionEnded: false,
        updatedValuesForNewSession: false,
        modal: false 

      }
    }
    case 'STOP_THE_CLOCK' :{
      return { 
        ...state,
        stopSetInterval: true,
       }
    }
    case 'UPDATE_VALUES' :{
      if(state.userInfoText === 'Session'){
          return {
            ...state,
            stopSetInterval: false,
           sessionEnded: false,
           timer: state.breakTime, 
           counter: 0,
          updatedValuesForNewSession: true,
          userInfoText: 'BREAK',
          modal: true  
          }
      }else if(state.userInfoText === 'BREAK')
      return {
        ...state,
       stopSetInterval: false,
       sessionEnded: false,
       timer: state.sessionTime,
       counter: 0 ,
       updatedValuesForNewSession: true,
       userInfoText: 'Session',
       modal: true,
       
       }

    }
    case 'RESET' :{
      return {
        ...state,
        stopSetInterval: true,
        timer: 25,
        breakTime: 5,
        sessionTime: 25,
        counter: 0,
        currentAudio: 0,
        reset: true
     
        }
    }
   
   
    
    default:
      return state;
  }
}


