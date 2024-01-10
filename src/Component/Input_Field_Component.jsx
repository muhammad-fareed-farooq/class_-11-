import React from 'react'

const Input_Field_Component = (props) => {
  return (
    <div>
      <input 
      id = {props.id}
      placeholder={props.placeholder}
      type ={props.type}
      onChange={(e)=>{
       props.onChangehandle(e.target.value, props.id)
      }}
      
      />
    </div>
  )
}

export default Input_Field_Component
