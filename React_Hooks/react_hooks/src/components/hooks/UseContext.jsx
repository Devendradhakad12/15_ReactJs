import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/Context'
 

function UseContext() {
  

    const {name,dispatch} = useContext(AppContext)
    const [name1,setName1] = useState(name)
 
    const upData =(e)=>{
      setName1(e.target.value)
      dispatch({type:"update",payload:name1})
    }
 
  return (
    <div className=" bg-blue-900 text-[30px] text-white px-20 py-10">
      <h1>03. useContext </h1>
      <h1>name {name1} </h1>
      <input type="text" onChange={upData}  className=' text-black'/>
    </div>
  )

}

 
export default UseContext
 