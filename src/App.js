import React, { useState } from "react";
import './App.css'

function App(){

  const [value, setValue]=useState('')


  const back = () => {
    setValue((prevValue) => prevValue.slice(0, -1));
  };

    return(
    
    <div className="container">
       
    <div className="calculator">
       
        <form action="">

       <div className="display">
      <input  type="text" value={value}/>
       </div>

       <div>
        <input type="button" value="AC" onClick={e => setValue('')}  />
           <input type="button" value="DE"  onClick={back}  />

       
        <input type="button" value="." onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="/" className="style" onClick={e => setValue(value+ e.target.value)}  />
       </div>

       <div>
        <input type="button" value="7" onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="8"  onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="9"  onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="*"  className="style" onClick={e => setValue(value+ e.target.value)}  />
       </div>
       <div>
        <input type="button" value="4"  onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="5" onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="6" onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="+"  className="style" onClick={e => setValue(value+ e.target.value)}  />
       </div>


       <div>
        <input type="button" value="1" onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="2" onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="3" onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="-"  className="style" onClick={e => setValue(value+ e.target.value)}  />
       </div>
         

       <div>
        <input type="button" value="00" onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="0"  onClick={e => setValue(value+ e.target.value)}  />
        <input type="button" value="="  className="equal" onClick={e => setValue(eval(value))}  />
      
       </div>


        </form>
      
      </div>
    
    </div>
  );
}







export default App
