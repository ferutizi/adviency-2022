import './index.scss';
import { useState } from "react";
import Formulario from './components/Formulario';
import Gifts from './components/Gifts';

function App() {
  const [gifts, setGifts] = useState([]);

  return (
    <>
      <div>
        <div>
          <h1></h1>
          <Formulario gifts={gifts} setGifts={setGifts} />
          <Gifts gifts={gifts} setGifts={setGifts} />
          <button type='button' onClick={() => setGifts([])}>Quitar todos</button>
        </div>
      </div>
    </>
  );
}

export default App;