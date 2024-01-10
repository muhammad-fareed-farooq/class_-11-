import React, { useState } from 'react'
import Child_Component from './Child_Component'

const Parent_Component = () => {
    const [lable,setlable] = useState("Component_Lable")
    const update_handle = (val)=>{
    console.log(val);
    setlable(val)
    }
  return (
    <div>
      <Child_Component
      update_handle = {update_handle}
      lable = {lable}
      />
    </div>
  )
}

export default Parent_Component
