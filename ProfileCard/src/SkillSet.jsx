import React from 'react'

function SkillSet(props) {
  return (
    <>

    <div className='skill' style={{background:props.color}}>
        {props.content}
        <span>
        {props.icon==="intermediate" && '👍'}
        {props.icon==="beginner" && '👩‍🦲'}
        {props.icon==="advanced" && '💪'}</span>
       

    </div>
    </>
  )
}

export default SkillSet