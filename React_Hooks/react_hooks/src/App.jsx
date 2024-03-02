import Home from "./components/Home";
import UseState from "./components/hooks/UseState";
import UseEffect from "./components/hooks/UseEffect";
import UseContext from "./components/hooks/UseContext";
import UseRef from "./components/hooks/UseRef";
import UesLayoutHook from "./components/hooks/UesLayoutHook";
import UseMemo from "./components/hooks/UseMemo";
 
 

function App() {

  const [,, animal] = ['loin','tiger','whale']
  console.log(animal)
  return (
    
    <div>
    <Home />
      <UseState/>
      <UseEffect/>
      <UseContext/>
      <UseRef/>
      <UesLayoutHook/>
      <UseMemo/>
    
    </div>
   
     
     
   
  );
}

export default App;
