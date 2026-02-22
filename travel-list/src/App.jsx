import React from 'react'
import { useState } from 'react';
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


function App() {
  return (
    <div>
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>

    </div>
  )
}

function Logo(){
  return (
   <h1>🧳FAR AWAY 🎒</h1>
  )
  
}
function Form(){
 const [inputText,setInputText]=useState("");
 const [quantity,setQuantity]=useState(5);
  function handleSubmit(e){
  
    e.preventDefault();
    const new_item={inputText,quantity,packed:false}
    console.log(new_item);
    setInputText("");
    setQuantity(1);
 //   console.log(e.target.input.value);
    
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
    <h3>What do you need for your trip </h3>
    <select value={quantity} onChange={(e)=>(setQuantity(e.target.value))}>
     {Array.from({length:20},(_,i)=>i+1).map((num)=>{
      return (
      <option value={num} key={num}>
        {num}
      </option>
      )
     })}
    </select>
    <input type='text' placeholder='Items...' value={inputText} onChange={(e)=>{
      setInputText(e.target.value)
    }}/>
    <button>ADD</button>

    </form>
  )

}
function PackingList(){
  return (
    
      <ul className='list'>
        {initialItems.map((item)=> <Items key={item.id}description={item.description} quantity={item.quantity} packed={item.packed}/>)}
      </ul>
    
  )

}
function Items({id,description,packed, quantity}){
  return (
    <li style={packed?{textDecoration:"line-through"}:{}}>
    
     <span>{description} {quantity}</span>
     
    <button>❌</button>
    
     

    </li>
  )

}
function Stats(){
  return (
    <footer className='stats'>
      You've X items on the list and you packed X (X%)
    </footer>
  )

}



export default App