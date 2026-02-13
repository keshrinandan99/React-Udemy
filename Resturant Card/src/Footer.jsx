import React from 'react'
import './index.css'
function Footer() {
    const hours=new Date().getHours();
    const isOpen=hours>=9 && hours<=23
  return (
    
        <footer className='footer'>
        {isOpen ? ( <div className='order'>
        <p>We're open until 6:00. Come Visit us or order online.</p>

        <button className='btn'>
          Order
        </button>
         </div> 
         
         ):(<p>
          We're closed for the day
         </p>)}  
        
        


        </footer>
   
    
  )
}

export default Footer