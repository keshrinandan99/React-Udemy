import React, { useState } from 'react'

export default function App() {
  const [step,setStep]=useState(1);
  const [counter,setCounter]=useState(1)
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
    setCounter((s)=>s-1)
  }
    return (
    <>
    <div >
      <div className='header'>
        <button onClick={handleStepIncrement} className='btn'>+</button>
        <h1>Step:{step}</h1>
        <button onClick={handleStepDecrement} className='btn'>-</button>
      </div>
      <div className='header'>
        <button onClick={handleCounterIncrement}className='btn'>+</button>
        <h1>Counter:{counter}</h1>
        <button onClick={handleCounterDecrement} className='btn'>-</button>
      </div>

      <p style={{display:"flex",justifyContent:"center"}}>
      <span>
        {counter===0?"Today is ":counter>0?`${counter} day from now is `:`${-counter} days ago is `}
      </span>
      
       {date.toDateString()} </p>
      </div>
    </>
  )
}
