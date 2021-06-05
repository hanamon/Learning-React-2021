import './App.css';
import Props from './Props';
import ConditiRender from './ConditiRender';
import Count from './Count';
import SingleInput from './SingleInput';
import MultiyInput from './MultiyInput';

function App() {
  return (
    <div className="App">
      <Props name="Rect" fontSize={24} color="red" padding="1rem" background="lightyellow" />
      <ConditiRender name="React" color="red" isSpecial />
      <Count />
      <SingleInput />
      <MultiyInput />
    </div>
  );
}

export default App;
