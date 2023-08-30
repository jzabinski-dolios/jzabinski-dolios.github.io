import { ReactElement } from 'react';
import { ReactComponent as UbiquitiIcon } from './ubi.svg';
import './App.scss';

function App(): ReactElement {
  return (
    <div className="App">
      <UbiquitiIcon id="icon" />
      <p id="motto">Ubiquiti FE Test Assignment</p>
    </div>
  );
}

export default App;
