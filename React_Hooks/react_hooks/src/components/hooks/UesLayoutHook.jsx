import React, { useEffect, useLayoutEffect, useState } from "react";

function UesLayoutHook() {
  useEffect(() => {
    console.log("first useEffect");
  });
  useLayoutEffect(() => {
    console.log("second useEffect");
  });
  useEffect(() => {
    console.log("third useEffect");
  });

  const [num, setNum] = useState(0);

  /*     useEffect(()=>{
        if(num == 0){
            setNum(Math.floor(Math.random()*100))
        }
    }) */
  useLayoutEffect(() => {
    if (num == 0) {
      setNum(Math.floor(Math.random() * 100));
    }
  });

  return (
    <div className=" bg-blue-900 text-[30px] text-white px-20 py-10">
      <h1>05. UesLayoutEffect 🚀 </h1>
      <p className="mt-[50px] text-[15px]">
        UesLayoutEffect , runs synchronously after a render but before the
        screen update.
      </p>
      <p className="mt-[10px] text-[15px]">
        UseEffect runs asynchronously and after a render is painted to the
        screen.
      </p>

      <p>Random Number - {num} </p>
      <button
        onClick={() => {
          setNum(0);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default UesLayoutHook;
