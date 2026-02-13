import React from 'react'
import Avatar from './Avatar'
import Intro from './Intro'
import SkillSet from './SkillSet'
import './index.css'
import { skills } from './data'
function App() {

  const data=skills;
 
  return (
    <div className='card'>
      
        <Avatar/>
      
      <div className='data'>
        <Intro/>
        <div className='skill-list'>
        {data.map((e)=>(
         
          <SkillSet
            key={e.skill}
           content={e.skill}
            color={e.color}
            icon={e.level}
            />
        )
            
        )}
        </div>
      </div>


    </div>
  )
}

export default App