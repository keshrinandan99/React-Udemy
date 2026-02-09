import React from 'react'

function Pizza({name,ingredients,price,photoName,soldOut}) {
  return (
        <>
        <div className='pizza'>
        <img src={`./${photoName}`} alt={name}/>
        <div>
            <h3>{name}</h3>
            <p>{ingredients}</p>
            <span>{`Price:${price}`}</span>
        
        </div>
        

        </div>
        
        </>
        
    
  )
}

export default Pizza