import '../style.css';
import Wrapper from './Wrapper';
import Props from './Props';
import ConditiRender from './ConditiRender';
import Count from './Count';
import SingleInput from './SingleInput';
import MultiyInput from './MultiyInput';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Props name="Rect" fontSize={24} color="red" padding="1rem" background="lightyellow" />
        <ConditiRender name="React" color="red" isSpecial />
        <Count />
        <SingleInput />
        <MultiyInput />
      </Wrapper>
    </div>
  );
}

export default App;
