import React, { useContext, useEffect, useState } from "react";
 

function UseEffect() {
      /* 
1. - no dependancy passed
 useEffect(()=>{
    Runs on every render
    }) 

2. - an empty array
 useEffect(()=>{
    Runs only first render
    },[]) 

3. -  props or state value passed
 useEffect(()=>{
    runs on every state and value change 
    }) 
 */
//👇 useEffect Hook
 
const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 0) {
      console.log("useEffect");
      document.title = `React Hook ${count}`;
    }
   
  }, [count]);

  return (
    <div className=" bg-slate-950 text-[30px] text-white px-20 py-10">
      <h1 className=" text-[35px]">02. useEffect 🚀 </h1>

      <button
        className=" bg-slate-900 w-20 rounded-3xl mt-5"
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

      <CleanUpFunction />
    </div>
  );
}

//?👇 CleanUp function
const CleanUpFunction = () => {
  const [size, setSize] = useState(window.innerWidth);
  const currentWidth = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", currentWidth);
    return () => {
      window.removeEventListener("resize", currentWidth);
    };
  });

  return (
    <div className="mt-10">
      <h1>👇useEffect CleanUp👇</h1>
      <h2>
        The Size Of Window is{" "}
        <span className="text-blue-600 font-[700]">{size}</span>
      </h2>
    </div>
  );
};

export default UseEffect;
