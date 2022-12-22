import './App.css';
import { ButtonArea } from './components/ButtonArea';
import { Display } from './components/Display';

function App() {
  const handleOnClick = (label) => {
  }
  return (
    <div>
      <div className="wrapper">
        <Display></Display>
        <ButtonArea handleOnClick={handleOnClick}></ButtonArea>
      </div>
    </div>
  );
}

export default App;
