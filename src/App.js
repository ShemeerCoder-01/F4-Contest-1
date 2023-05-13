import { useState } from 'react';
import './App.css';
import Result from './Result';


function App() {
  let [num1,setNum1] = useState(0);
  let [num2,setNum2] = useState(0);
  let [res,setRes] = useState(0);
  let [msg,setMsg] = useState('');
  let [flag,setFlag] = useState(false);
  function validation(e){
    let operand = e.target.value;
    console.log("num1 ",num1," num2 ",num2," operand ",operand);
    if(num1 === '' && num2 === ''){
      setFlag(false);
      setMsg("Error : Num1 and Num2 cannot be empty");
      return;
    }
    else if(num1 === ''){
      setFlag(false);
      setMsg("Error : Num1 cannot be empty");
      return;
    }
    else if(num2 === ''){
      setFlag(false);
      setMsg("Error : Num2 cannot be empty");
      return;
    }
    else if(isNaN(num1) || isNaN(num2)){
      setFlag(false);
      setMsg("Error : It is not a valid number!!");
      return;
    }else{
    calSum(Number(num1),Number(num2),operand);
    }
  }

  function calSum(fNum,sNum,operand){
   setFlag(true);
    if(operand === '+'){
      setRes(fNum + sNum);
    }
    else if(operand === '-'){
      setRes(fNum - sNum);
    }
    else if(operand === '*'){
      setRes(fNum * sNum);
    }
    else if(operand === '/'){
      setRes(fNum / sNum);
    }
    setMsg("Success : your result is shown above!");
  }

  return (
    <div className="App">
      <h1 className='heading'>React Calculator</h1>
      <div className='inputArea'>
        <input onChange={(e)=> setNum1(e.target.value)} type='text' placeholder='Num 1'/>
        <input onChange={(e)=> setNum2(e.target.value)} type='text' placeholder='Num 2'/>
      </div>
      <div className='btns'>
        <button className='btn' value='+' onClick={validation}>+</button>
        <button className='btn' value='-' onClick={validation}>-</button>
        <button className='btn' value='*' onClick={validation}>*</button>
        <button className='btn' value='/' onClick={validation}>/</button>
      </div>
      {flag? <Result sum ={res}/> : null}
      {flag?<div className='msgArea' style={{color:"green"}}>{msg}</div>:<div className='msgArea' style={{color:"red"}}>{msg}</div>}

    </div>
  );
}

export default App;
