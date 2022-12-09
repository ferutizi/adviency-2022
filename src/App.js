import { useState } from 'react';
import Formulario from "./components/Formulario";
import Gifts from "./components/Gifts";

function App() {
  const [gifts, setGifts] = useState([]);

  return (
    <>
      <div>
        <div>
          <h1>Lista de regalos</h1>
          <Formulario gifts={gifts} setGifts={setGifts} />
          <Gifts gifts={gifts} setGifts={setGifts} />
        </div>
        <button type='button' onClick={() => setGifts([])}>Quitar todos</button>
      </div>
    </>
  );
}

export default App;