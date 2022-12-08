import './index.scss';
import { useState } from "react";
import Formulario from "./components/Formulario";
import Gifts from "./components/Gifts";

function App() {
  const [gifts, setGifts] = useState([]);

  return (
    <>
      <div className="gift__container">
        <div>
          <h1 className="gift__title">Lista de regalos</h1>
          <Formulario gifts={gifts} setGifts={setGifts} />
          <Gifts gifts={gifts} setGifts={setGifts} />
        </div>
        <button type="button" className="gift__button" onClick={() => setGifts([])}>Quitar todos</button>
      </div>
    </>
  );
}

export default App;