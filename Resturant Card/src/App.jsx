import React from "react"
import { pizzaData } from "./assets/data"
import Pizza from "./Pizza"
import Header from "./Header"
import Footer from "./Footer"
import './index.css';
export const App=()=>{
 
  

   return (
    
      <>
      <div className="container">
        
      <main className="menu">
        <Header className="header"/>
        <h2>Our Menu</h2>
        <p>All authentic itallian cusine at one place.</p>
          <div className="pizzas">
            
            {pizzaData.map((a)=>(
         <Pizza 
         key={a.name}
          name={a.name}
         ingredients={a.ingredients}
         price={a.price}
        photoName={a.photoName}
         soldOut={a.soldOut}
        />
        ))}
        </div>
          </main>
          
        <Footer />
        </div>
        
        
     
      </>

      
  )
     
      }
    
  
