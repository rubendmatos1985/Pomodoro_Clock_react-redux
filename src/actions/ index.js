export function incrementPause(){
  return{
    type: 'INCREMENT_BREAKTIME',

  }
}

export function decrementPause(){
  return{
    type: 'DECREMENT_BREAKTIME'
  }
}

export function incrementSession(){
  return {
    type: 'INCREMENT_SESSION',

  }
}

export function decrementSession(){
  return {
   type: 'DECREMENT_SESSION'
  }
}
export function clockIsOn(){
 return function(dispatch, getState){
   dispatch({
        type: 'STARTED'
      })
      let timer = setInterval(()=>{
       if(getState().stopSetInterval){
         clearInterval(timer);
         return dispatch({
           type: 'STOPED',
           }) 
       }
        return dispatch({
          type: 'COUNTING'
         })
        
       },1000) 
     
    }
      
  }
export function Reset(){
  return {
    type: 'RESET',
    
  }
}

export function doStopTheClock(){
  return { type: 'STOP_THE_CLOCK' }
}
export function doUpdateValues(){
  return {
    type: 'UPDATE_VALUES'
  }
}


  
 

