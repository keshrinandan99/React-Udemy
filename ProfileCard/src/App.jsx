import React from 'react'
import Avatar from './Avatar'
import Intro from './Intro'
import SkillSet from './SkillSet'
import './index.css'
function App() {
  return (
    <div className='card'>
      
        <Avatar/>
      
      <div className='data'>
        <Intro/>
        <div className='skill-list'>
        <SkillSet content="HTML+CSS" color="cyan" icon="💪"/>
        <SkillSet content="JavaScript" color="yellow" icon="💪"/>
        <SkillSet content="WebDesign" color="green" icon="👍"/>
        <SkillSet content="Git and Github" color="red" icon="👍"/>
        <SkillSet content="React" color="cyan" icon="💪"/>
        <SkillSet content="Svelete" color="orange" icon="👍"/>
        </div>
      </div>


    </div>
  )
}

export default App