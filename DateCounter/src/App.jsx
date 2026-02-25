import React, { useState } from 'react'

export default function App() {
  const [step,setStep]=useState(1);
  const [counter,setCounter]=useState(0)
  const date=new Date();
  date.setDate(date.getDate()+counter);


  const handleStepIncrement=()=>{
    setStep((s)=>s+1);
  }
  const handleStepDecrement=()=>{
    setStep((s)=>s-1)
  }
  const handleCounterIncrement=()=>{
    setCounter((s)=>s+step);
  }
  const handleCounterDecrement=()=>{
    setCounter((s)=>s-step)
  }
  function  handleReset(){
    setCounter(0);
    setStep(1);

  }
    return (
    <>
    <div >
      <div className='header'>
      <input type="range" min="1" max="10" value={step} onChange={(e)=>setStep(Number(e.target.value))}/>
        <h1>Step:{step}</h1>
      
      </div>
      <div className='header'>
        <input type='text' value={counter} onChange={(e)=>setCounter(Number(e.target.value))}/>
      </div>

      <p style={{display:"flex",justifyContent:"center"}}>
      <span>
        {counter===0?"Today is ":counter>0?`${counter} day from now is `:`${-counter} days ago is `}
      </span>
       {date.toDateString()} 
       
       </p>
      </div>
      {counter!==0 && step!==1 && (<div style={{display:'flex', justifyContent:'center'}}>
         <button onClick={handleReset}>
          Reset
        </button>
      </div>) }
      
      
      
    </>
  )
}
