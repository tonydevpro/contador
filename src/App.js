import './App.css';
import {useState} from 'react';

function App() {

  const [contar, setContar] = useState(0);

  return (
    <div className="App">
      <h1>Contador</h1>
      <div className='resultado'>
        {contar}
      </div>
      <div className='alterar'>
        <button onClick={()=>{setContar(contar - 1)}}>-</button>
        <button onClick={()=>{setContar(contar + 1)}}>+</button>
      </div>
    </div>
  );
}

export default App;
