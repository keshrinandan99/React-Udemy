import React from 'react'
import './index.css'
import { useState } from 'react';

const num="01";
const title="Where are chairs assembled?"
const text ="loren fakshdfasfa"

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];
function App() {
  return (
    <div>
      <Accordian data={faqs}/>
    </div>
  )

}
function Accordian({data}){
  return (
    <div className='accordion'>
    {data.map((ele,i)=>(<AccodianItem num={i+1} title={ele.title} text={ele.text} key={i}/>))}
    </div>
  )
}
function AccodianItem({num,title,text}){
  const [show,setShow]=useState(false);
  const handleClick=()=>{
    setShow((s)=>!s);
  }
  return (
  <div className={`item ${show?"open":""}`}>
    <p className='number'>{num<9?`0${num}`:num}</p>
    <p className="title" >{title}</p>
    <p className='icon' onClick={handleClick}>{show?"-":"+"}</p>

    <div className="content-box" style={{ display :show?"block":"none"}}>{text}</div>
    </div>

  )
}

export default App