import React from 'react'


const Child_Component = (props) => {

    const update_proper_handle = ()=>{
        props.update_handle("Value Update Props")
    }
  return (
    <div>
      <div>{props.lable}</div>
      <button className='border border-red-600 bg-zinc-600 text-blue-50' onClick={update_proper_handle}>Update value</button>
    </div>
  )
}

export default Child_Component
