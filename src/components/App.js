import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  
  
  let [sum,setSum]=useState(0)
    function handleSum(e){
      const val = Number(e.target.value);
      setSum((prev)=>prev+val)
    }
    
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <form action="">
        <input type="number" name="num" id="num" onChange={handleSum} />
        </form>
        {
          <p>Sum:{sum}</p>
        }
    </div>
  )
}

export default App
