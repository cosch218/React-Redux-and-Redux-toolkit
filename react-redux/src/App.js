import './App.css';
import CounterBox from './components/CounterBox';
import CounterNumber from './components/CounterNumber';
import CounterThunk from './components/CounterThunk';
import ExCounterBox from './components/ExCounterBox';
import MemoComp from './components/MemoComp';
import WeatherThunk from './components/WeatherThunk';

function App() {
  return (
    <div className="App">
      <CounterBox/>
      <hr/>
      <ExCounterBox/>
      <hr/>
      <CounterNumber/>
      <hr/>
      <MemoComp/>
      <hr/>
      <CounterThunk/>
      <hr/>
      <WeatherThunk/>
    </div>
  );
}

export default App;