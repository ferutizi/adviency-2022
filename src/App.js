import './index.scss';
import { useState } from "react";
import Form from "./components/Form";
import Gifts from './components/Gifts';

function App() {
  const [gifts, setGifts] = useState([]);

  return (
    <>
      <div className='gift__container'>
        <div>
          <h1 className='gift__title'>Lista de regalos</h1>
          <Form gifts={gifts} setGifts={setGifts} />
          <Gifts gifts={gifts} setGifts={setGifts}/>
        </div>
        <button
          type="button"
          onClick={() => setGifts([])}
          className='gift__button'
          >Quitar todos
          </button>
      </div>
    </>
  );
}

export default App;