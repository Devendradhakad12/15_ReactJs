import React from "react";
import Paticlesbg from "./Paticlesbg";
function Home() {
 

 

  return (
    <div className="text-white text-[25px] p-10 ">
      <Paticlesbg />
      <ol className="text-[30px]">
        <li>01. useState</li>
        <li>02. useEffect</li>
        <li>03. useLayoutEffect</li>
        <li>04. useRef </li>
        <li>05. useContext</li>
        <li>07. useReducer</li>
        <li>08. useMemo</li>
        <li>09. useCallback</li>
      </ol>
      <br />

      <p>-- Hook were added to react in version 16.8 --</p>
      <br />

      <p>
        👉 Hooks are functions that let you "hook into" React state and
        lifecycle features from function components.{" "}
      </p>
      <br />

      <p>
        👉 Hooks allows function components to have access to state and other
        React features. Because of this,class components are generally no longer
        needed
      </p>
      <br />

      <h3>🚀- React Hooks Rules</h3>
      <ul>
        <li>1: You must import Hooks from react.</li>
        <li>2: Hooks can only be called inside React function component.</li>
        <li>3: Hooks can Only be Called at the top level of a component.</li>
        <li>4: Hooks cannot be conditional.</li>
      </ul>
    </div>
  );
}

export default Home;
