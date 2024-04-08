import React from 'react'


function Note(props) {
    
  return (
    <div className='flex'>
      <div className='note-container'>
      <div className='heading'><h2>{props.title}</h2></div>
        
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Note;
