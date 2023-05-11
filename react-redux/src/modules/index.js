// 작성한 리듀서 모듈들을 하나로 묶어서 사용
import { combineReducers } from "redux"


// 작성한 리듀서 가져오기
import counter from "./counter"
import counterNumber from "./counterNumber";


// 작성한 리듀서들을 ','를 사용해 나열하여 객체로 묶어서 내보냄
const rootReduser = combineReducers({ counter, counterNumber });


export default rootReduser;