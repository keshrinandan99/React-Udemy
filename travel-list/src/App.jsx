import React from 'react'
import { useState } from 'react';
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


function App() {
  
  const [items,setItems]=useState([]);
  function handleAddItem(new_item){
   
    setItems((prevItem)=>[...prevItem,new_item])
  }
  const handleDelete=(id)=>{
    setItems(items.filter((item)=>item.id!==id));
  }
  const handleSelect=(id)=>{
    setItems((items)=>items.map((item)=>item.id===id?{...item,packed:!item.packed}:item))
  }
  const handleClearList=()=>{
    const confirm=window.confirm("Are you sure you want to delete all items?");
    if(confirm)setItems([]);
  }
  return (
    <div>
      <Logo/>
      <Form onAddItem={handleAddItem}/>
      <PackingList 
        handleClearList={handleClearList}
      items={items} onDeleteItem={handleDelete} onSelect={handleSelect}/>
      <Stats items={items}/>

    </div>
  )
}

function Logo(){
  return (
   <h1>🧳FAR AWAY 🎒</h1>
  )
  
}
function Form({onAddItem}){
 const [inputText,setInputText]=useState("");
 const [quantity,setQuantity]=useState(5);

 
  function handleSubmit(e){
  
    e.preventDefault();
    const new_item={description:inputText,quantity,packed:false,id:Date.now()}
    console.log(new_item);
    onAddItem(new_item)
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
function PackingList({items,onDeleteItem,onSelect,handleClearList}){
  const [sortBy,setSortBy]=useState("input");
  let sortedItems;
  if(sortBy=="input"){
    sortedItems=items;
  }
  if(sortBy=="alphabatically"){
    sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description));
  }
  if(sortBy=="packed"){
    sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
  }
 
  return (
    <>
    <div>

      <ul className='list'>
        
        {sortedItems.map((item)=> <Items onSelect= {onSelect} onDeleteItem={onDeleteItem} key={item.id} description={item.description} quantity={item.quantity} packed={item.packed} id={item.id}/>)}
      </ul>

     <div className='actions aligning'>
      <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="alphabatically">Sort Alphabatically </option>
        <option value="packed">Sort by packed order</option>

      </select>
     <button onClick={()=>handleClearList()}>Clear list</button>
     </div>

     </div>
      
    </>
    
  )

}
function Items({id,description,packed, quantity,onDeleteItem,onSelect}){
  
  return (
    <li >
      <input type='checkbox' checked={packed} onChange={()=>onSelect(id)}/>
     <span className={packed?"item-packed":""}> {quantity}  {description}</span>
     
    <button onClick={()=>onDeleteItem(id)}>❌</button>
    
    </li>
  )

}
function Stats({items}){
  const num=items.length;
  const packedNumber=items.filter((item)=>item.packed).length
  const percentage=(packedNumber/num)*100;
  if(num===0){
    return (
      <footer className='stats'>
        <em>
        Start adding some items to your packing list 🛫
      </em>
      </footer>
     
    )
  }

  return (
    <footer className='stats'>
      You've {num} items on the list and you packed {packedNumber} ({Math.round(percentage)}%)
    </footer>
  )

}



export default App