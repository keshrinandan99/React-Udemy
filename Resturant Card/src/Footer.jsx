import React from 'react'
import './index.css'
function Footer() {
    const hours=new Date().getHours();
    const isOpen=hours>=9 && hours<=5
  return (
    <>
        <footer className='footer'>{`${new Date().toLocaleDateString()}. ${isOpen ? "We're currently open" : "We're currently closed"}`}</footer>
    </>
    
  )
}

export default Footer