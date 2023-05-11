import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// 리덕스 프로바이더 추가 : 컴포넌트로 들고옴
import { Provider } from "react-redux";

// store를 만들기 위한 createStore 추가
// createStore에 줄이 그어진 이유 : createStore 보다는 toolkit 사용을 권장하기 때문
import { createStore } from "redux";

// rootReducer를 가져오기
import rootReduser from './modules';

// createStore를 통해 store 생성
// >> Provider의 store 속성값으로 사용하게 됨
const store = createStore(rootReduser);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();