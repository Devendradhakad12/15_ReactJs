import React, { useEffect, useState } from "react";

function UseState() {

  const [count, setCount] = useState(0);

  return (
    <div className=" bg-blue-900 text-[30px] text-white px-20 py-10">
      <h1 className=" text-[35px]">01. useState 🚀</h1>
      <br />

      <div className="flex w-[100%] justify-center items-center gap-20">
      {/* useState Hook 👇 */}
        <button
          className=" bg-slate-900 w-20 rounded-3xl"
          onClick={() => {
            count > 1 ? setCount(count - 1) : setCount(0);
          }}
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          className=" bg-slate-900 w-20 rounded-3xl"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>


     <ResisterationForm/>
    </div>
  );
}


function ResisterationForm(){
  const [data,setData] = useState({
    username:'',
    email:'',
    password:''
    
  })
  
  const handleChange = (e)=>{
  let name = e.target.name;
  let value = e.target.value 
  console.log(name,value)
 setData((pre)=>{
  return {...pre,[name]:value}
 })
}

 useEffect(()=>{
//console.log(data)
 },[data])
 
 {/* Resisteration form data */}
 return(
    <div className="pt-20">
        <h2>Registration form</h2>
        <div>
            <form >
              <input value={data.username} onChange={handleChange} type="text" name="username" id='name' placeholder="Username"  className=" bg-transparent border-2 mt-2 rounded-xl flex justify-center items-center p-2"/>
              <input value={data.email} onChange={handleChange} type="email" name="email" id='email' placeholder="Email" className=" bg-transparent border-2 mt-2 rounded-xl flex justify-center items-center p-2"/>
              <input value={data.password} onChange={handleChange} type="password" name="password" id='password'placeholder="Password" className=" bg-transparent border-2 mt-2 rounded-xl flex justify-center items-center p-2"/>
              <button type="submit" className=" bg-slate-800 rounded-xl mt-5 p-2">Submit</button>
            </form>
        </div>
    </div>
 )
}
export default UseState;
