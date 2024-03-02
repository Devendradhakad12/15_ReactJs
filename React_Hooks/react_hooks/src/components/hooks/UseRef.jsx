import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  //* Not re-render the commponent
  const [setI, setSetI] = useState("");
  let count = useRef(0); // re-render count
  count.current += 1;
  console.log(count);

  //* access DOM
  const inpRef = useRef();
  console.log(inpRef?.current);
  const clickHandle = () => {
    inpRef.current.focus();
    inpRef.current.style.backgroundColor = "red";
  };

  return (
    <div className="  bg-slate-950 text-white px-20 py-10 pb-20">
      <h1 className="text-[30px] pb-10">04. UseRef</h1>
      <p className="pb-10">
        if create a mutable variable which will not re-render the components ,
        and used to access DOM directly{" "}
      </p>
      <input
        ref={inpRef}
        className=" text-slate-900"
        type="text"
        value={setI}
        onChange={(e) => setSetI(e.target.value)}
      />
      <h2>render count - {count.current}</h2>
      <button onClick={clickHandle} className=" bg-gray-200 text-slate-800">
        click
      </button>
    </div>
  );
}

export default UseRef;
