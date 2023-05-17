import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { addvalue, addValueAsync } from '../slices/thunkslice';


export default function ThunkBox() {
  const thunkCounter = useSelector((state)=>(state.thunkCounter));

  const dispatch = useDispatch();

  return (
    <div>
      <h3>{thunkCounter.value}</h3>
      <button
        onClick={()=>{dispatch(addvalue())}}
      >
        +1
      </button>
      <button
        onClick={()=>{dispatch(addValueAsync())}}
      >
        1초 뒤 +1
      </button>
    </div>
  )
}
