import './index.scss';
import Formulario from "./components/Formulario";
import Gifts from "./components/Gifts";
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [gifts, setGifts] = useLocalStorage('gifts', []);
  
  return (
    <>
      <div className="gift__container">
        <div>
          <h1 className="gift__title">Lista de regalos</h1>
          <Formulario gifts={gifts} setGifts={setGifts} />
          <Gifts gifts={gifts} setGifts={setGifts} />
        </div>
        <button type="button" onClick={() => setGifts([])} className='gift__button'>Quitar todos</button>
      </div>
    </>
  );
}

export default App;