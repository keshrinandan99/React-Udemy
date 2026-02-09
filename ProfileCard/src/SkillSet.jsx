import React from 'react'

function SkillSet(props) {
  return (
    <div>

    <div className='skill' style={{background:props.color}}>
        {props.content}
        {props.icon}

    </div>
    </div>
  )
}

export default SkillSet