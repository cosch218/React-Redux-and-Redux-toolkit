import React from 'react'


// useSelector : 리듀서에 있는 값을 꺼내서 사용
// useDispatch : 리듀서에 있는 값을 수정할 때 사용
import { useSelector, useDispatch } from 'react-redux'

// dispatch에서 사용할 액션 함수
import { change, decrease, increase } from '../modules/counter';


export default function CounterBox() {
  // useSelector로 값 가져오기
  // state는 modules의 index.js에서 작성한 rootReducer
  // state.counter는 rootReducer 안에 객체로 묶인 counter
  //    >> counter를 속성 이름으로 사용
  // 리듀서 함수만 전달해도 useSelector에서 자동으로 state를 뽑아줌
  const counter = useSelector((state)=>(state.counter));

  // useDispatch()를 통해서 사용할 함수를 들고 옴
  const dispatch = useDispatch();


  return (
    <div>
      <h1>CounterBox 컴포넌트</h1>
      <h3>{counter}</h3>
      <button
        onClick={()=>{ // return 할 필요가 있으면 (), 없으면 {} 사용
          // 값을 수정하기 위해서 dispatch와 액션 함수 사용
          // 액션 함수는 return 값이 객체인 함수 : reducer에 작성
          // 액션 함수 이름 뒤에 ()를 붙여 increase()로 작성하는 이유 : return 값을 실행시키기 위함
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
          dispatch( change(5) )
        }}
      >
        +5
      </button> 
    </div>
  )
};