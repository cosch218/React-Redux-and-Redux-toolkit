import './App.css';
import CounterBox from './components/CounterBox';
import CounterNumber from './components/CounterNumber';
import ExCounterBox from './components/ExCounterBox';

function App() {
  return (
    <div className="App">
      <CounterBox/>
      <hr/>
      <ExCounterBox/>
      <hr/>
      <CounterNumber/>
    </div>
  );
}

export default App;