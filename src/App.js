
import './App.css';
import ArrayComponent from './components/ArrayComponent';
import DebounceComponent from './components/DebounceComponent';
import TimeoutComponent from './components/TimeoutComponent';
import ToggleComponent from './components/ToggleComponent';

function App() {
  return (
    <div className="App">
      <h1>Awesome Custom Hooks</h1>
      <h2>useToggle Hook</h2>
      <ToggleComponent />
      <h2>useTimeout Hook</h2>
      <TimeoutComponent />
      <h2>useDebounce Hook</h2>
      <DebounceComponent />
      <h2>useArray Hook</h2>
      <ArrayComponent/>
    </div>
  );
}

export default App;
