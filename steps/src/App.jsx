import './index.css'
import { useState } from 'react';
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App (){
  const[step,setStep]=useState(1);
  const[isOpen,setIsOpen]=useState(true);
  const handlePrev=()=>{
    setStep(step>1?step-1:1)
  }
  const handleNext=()=>{
    setStep(step<3?step+1:1)
  }
  
  return (
    <>
    <button className="close" onClick={()=>setIsOpen(!isOpen)}>
      {isOpen?<>&times;</>:<>&equiv;</>}


    </button>

    {isOpen && (<div className='steps'>
    <button className='close'></button>
      <div className='numbers'>
        <div className={step>=1 ? 'active': ''}> 1</div>
        <div className={step>=2?'active':''}>2</div>
        <div className={step>=3?'active':''}>3</div>

      </div>

      <p className='message'>Step {step}:{messages[step-1]}</p>
      <div className='buttons'>

      <Button background={'#7950f2'} color={'#fff'} onClick={handlePrev} children ><span>👈</span>Previous </Button>
      <Button background={'#7950f2'} color={'#fff'} text={'Next👉'} onClick={handleNext} children>Next
        <span>👉</span> 
      </Button>
       {/* <button onClick={()=>setStep(step>1?step-1:1)} className='button' style={{background:"#7950f2", color:"#fff"}}>Previous</button>
       <button onClick={()=>setStep(step<3?step+1:3)} className='button' style={{background:"#7950f2", color:"#fff"}}>Next</button> */}
      </div>

    </div>)}
    
    </>
    
  )
}

function Button({background,color,onClick,children}){
  return (
  <button style={{backgroundColor:background, color:color}} onClick={onClick}>
    {children}
  </button>
  )
}