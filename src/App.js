import './index.scss';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import useFormulario from "./hooks/useFormulario";

function App() {
  const [regalos, setRegalos] = useState([]);
  const [handleChange, formulario, reset] = useFormulario({ id: uuidv4() })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formulario)
    setRegalos([
      ...regalos,
      formulario
    ]);
    e.target.reset();
    reset();
  }

  const deleteRegalo = (id) => {
    const newRegalos = regalos.filter(i => i.id != id);
    setRegalos(newRegalos);
  }

  return (
    <>
      <div className='regalos__container'>
        <h1 className='regalos__title'>Lista de regalos</h1>
        <form onSubmit={handleSubmit}>
          <input 
            name='name'
            value={formulario.value}
            onChange={handleChange}
            type='text'
            placeholder='Regalo...'
            autoFocus
            className='regalos__input'
          />
          <button className='regalos__button' type='submit'>Agregar</button>
        </form>
        <div className='regalos__list--container'>
          {regalos.map(item => 
            <div className='regalos__item--container' key={item.id}>
              <p className='regalos__item'>{item.name}</p>
              <button className='regalos__item--button' type='button' onClick={() => deleteRegalo(item.id)}>Quitar</button>
            </div>)
          }
        </div>
        <button className='regalos__button' type='submit'>Borrar todos</button>
      </div>
    </>
  );
}

export default App;