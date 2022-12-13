import './index.scss';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useState } from 'react';
import Formulario from './components/Formulario';
import Gifts from './components/Gifts';

function App() {
  const [gifts, setGifts] = useLocalStorage('gifts', []);
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editGift, setEditGift] = useState({});

  return (
    <>
      <div className='gift__container'>
        <div style={{display: 'flex',flexDirection: 'column' , justifyContent:'center', gap: '1em'}}>
          <h1 className='gift__title'>Lista de regalos</h1>
          <button type='button' onClick={() => setModal(true)} className='gift__button'>Agregar Regalo</button>
          <Gifts
            gifts={gifts}
            setGifts={setGifts}
            setModal={setModal}
            setEditMode={setEditMode}
            setEditGift={setEditGift}
          />
        </div>
        <div>
          <Formulario
            gifts={gifts}
            setGifts={setGifts}
            modal={modal}
            setModal={setModal}
            editMode={editMode}
            setEditMode={setEditMode}
            editGift={editGift}
            setEditGift={setEditGift}
          />
        </div>
        <button type='button' onClick={() => setGifts([])} className='gift__button'>Quitar todos</button>
      </div>
    </>
  );
}

export default App;