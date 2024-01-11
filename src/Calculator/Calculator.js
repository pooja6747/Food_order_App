import React,{useState} from 'react';
import './Calculator.css'

export const Calculator = () => {

    const[input,setInput]=useState("");


  const numHandle=(e)=>{
    setInput(input.concat(e.target.name));
  }

 const equalHandle=(e)=>{
   e.preventDefault();
   setInput(eval(input));
 }

 const clearHandle=()=>{
     setInput('');
 }

 const deleteHandle=()=>{
     var str=input;
     str= str.substr(0,str.length-1);
     setInput(str);
 }

 const  historyHandle=()=>{
     var history =([]);
     history.push([input]);
     console.log(history);
    
 }

  return (
    <>

      <div className='container'>
        <input type="text" className='input-type' value={input}/><br/><br/>
        <button  onClick={numHandle}  name="1">1</button>
        <button  onClick={numHandle}  name="2">2</button>
        <button  onClick={numHandle} name="3">3</button>
        <button onClick={numHandle} name="4">4</button>
        <button onClick={numHandle} name="5">5</button><br/>
        <button onClick={numHandle} name="6">6</button>
        <button onClick={numHandle} name="7">7</button>
        <button onClick={numHandle} name="8">8</button>
        <button onClick={numHandle} name="9">9</button>
        <button onClick={numHandle} name="0">0</button><br/>
        <button  onClick={equalHandle} name="=">=</button>
        <button  onClick={numHandle} name="+">+</button>
        <button  onClick={numHandle} name=".">.</button>
        <button onClick={numHandle} name="*">&times;</button>
        <button onClick={numHandle} name="-">&ndash;</button><br/>
        <button onClick={numHandle} name="/">/</button>

        <button onClick={clearHandle} name="/">AC</button>
        <button onClick={deleteHandle} name="">DELETE</button>
        <button onClick={historyHandle} name="">HIS</button>


</div>



    </>
  )
}
