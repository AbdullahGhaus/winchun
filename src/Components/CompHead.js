import React from 'react'
import "./Components.css"
function CompHead(props) {
  return (
    <div className='CompHead'>
        <h1>{props.h1} <span>{props.span}</span> {props.h2}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default CompHead