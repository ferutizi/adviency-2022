import './index.scss';
import { useLocalStorage } from './hooks/useLocalStorage';
import Formulario from './components/Formulario';
import Gifts from './components/Gifts';

function App() {
  const [gifts, setGifts] = useLocalStorage('gifts', []);

  return (
    <>
      <div className='gift__container'>
        <div>
          <h1 className='gift__title'></h1>
          <Formulario gifts={gifts} setGifts={setGifts} />
          <Gifts gifts={gifts} setGifts={setGifts} />
        </div>
        <button type='button' onClick={() => setGifts([])} className='gift__button'>Quitar todos</button>
      </div>
    </>
  );
}

export default App;