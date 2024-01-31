import Greet from './components/Greet';
import './App.css';
import ParentComponent from './components/ParentComponent';
import CounterComponent from './components/CounterComponent';
import TodoComponent from './components/TodoComponent';


function App() {
  return (
    <div className="App">
      <Greet/>
      <ParentComponent/>
      <CounterComponent/>
      <TodoComponent/>
    </div>
  );
}

export default App;
