import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);
/*   const multiply = ()=>{
    console.log("multiply func")// this function will call always
    return item * 5
  } */
  const multiply = useMemo(()=>{
    console.log("multiply func")// this function will call when item will be change
    return item * 5
  },[item])

  return (
    <div className=" bg-slate-950 text-[30px] text-white px-20 py-10">
      <h1>07. UesMemo 🚀 </h1>
      <p className="mt-[50px] text-[15px]">
        useMemo is used to increse performance of application
      </p>
    {/*   <h2>Multiply : {multiply()} </h2> */}
      <h2>Multiply : {multiply} </h2>
      <h2>Count : {count} </h2>
      <h2>Item : {item} </h2>
      <button onClick={()=>{setCount(count +1)}} >Update Count</button>
      <button onClick={()=>setItem(item+5)}>Update Item</button>
    </div>
  );
}

export default UseMemo;
