import './index.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useFormulario from './hooks/useFormulario';

function App() {
  const [formulario, handleChange, reset] = useFormulario({ id: uuidv4() })
  const [regalos, setRegalos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegalos([
      ...regalos,
      formulario
    ]);
    e.target.reset();
    reset();
  }

  const deleteItem = (id) => {
    const newRegalos = regalos.filter(i => i.id !== id);
    setRegalos(newRegalos)
  }

  return (
    <>
      <div className='regalos__container'>
        <h1 className='regalos__title'>Lista de regalos</h1>
        <form onSubmit={handleSubmit}>
          <input 
            name='name'
            type='text'
            value={formulario.value}
            onChange={handleChange}
            autoFocus
            placeholder='regalo...'
            className='regalos__input'
          />
          <button type='submit' className='regalos__button'>Agregar</button>
        </form>
        <div className='lista__container'>
        {regalos.map(item => (
          <div key={item.id} className='lista__item--container'>
            <p className='lista__item'>{item.name}</p>
            <button onClick={() => deleteItem(item.id)}>Quitar</button>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default App;