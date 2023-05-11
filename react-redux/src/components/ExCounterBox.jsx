import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increase, decrease, change } from '../modules/counter'

export default function ExCounterBox() {
  const counter = useSelector((state)=>(state.counter));

  const dispatch = useDispatch();

  return (
    <div>
      <h1>CounterBox 내용 복습</h1>
      <p>useSelector를 이용하여 값 가져오기</p>
      <h3>{counter}</h3>
      <p>useDispatch를 이용하여 값 수정하기</p>
      <button
        onClick={()=>{
          dispatch( increase() )
        }}
      >
        +1
      </button>
      <button
        onClick={()=>{
          dispatch( decrease() )
        }}
      >
        -1
      </button>
      <button
        onClick={()=>{
          dispatch( change(30) )
        }}
      >
        +30
      </button>
    </div>
  )
}
