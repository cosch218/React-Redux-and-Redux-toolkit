import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import counterNumber, { changeNumber } from '../modules/counterNumber';
import { increaseNumber, decreaseNumber } from '../modules/counterNumber';

export default function CounterNumber() {
  const counterNumber = useSelector((state)=>(state.counterNumber));
  const dispatch = useDispatch();


  // input의 값을 입력받아 올 때는 바로 redux로 접근하지 않고,
  // useState로 값을 받아온 후 확정되면 redux로 전달
  const [input, setInput] = useState(1);


  return (
    <div>
      <h1>CounterNumber 컴포넌트</h1>
      <p>counterNumber.js의 (state)객체에서 counterNumber의 값을 가져와서 출력</p>
      <h3>{counterNumber.count}</h3>
      <button
        onClick={() => {
          dispatch( increaseNumber() )
        }}
      >
        +{counterNumber.num}
      </button>
      <button
        onClick={()=>{
          dispatch( decreaseNumber() )
        }}
      >
        -{counterNumber.num}
      </button>
      <br />
      <input 
        type="text" 
        onChange={(e)=>{setInput(e.target.value)}}
        value={input}
      />
      <button
        onClick={()=>{
          dispatch( changeNumber( parseInt(input) ) )
          setInput("")
        }}
      >
        숫자입력
      </button>
    </div>
  )
}
