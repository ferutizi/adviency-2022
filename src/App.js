import './index.css';
import { useState } from 'react';

function App() {
  const [formulario, setFormulario] = useState({name: ''});
  const [regalos, setRegalos] = useState([]);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegalos([
      ...regalos,
      formulario.name
    ])
    setFormulario({name: ''})
  }

  return (
    <>
      <div className='regalos__container'>
        <h1 className='regalos__title'>Lista de regalos</h1>
        <form onSubmit={handleSubmit}>
          <input 
            name='name'
            type='text'
            value={formulario.name}
            onChange={handleChange}
            autoFocus
            placeholder='regalo...'
            className='regalos__input'
          />
          <button type='submit' className='regalos__button'>Agregar</button>
        </form>
        <div className='lista__container'>
        {regalos.map(item => (
          <div className='lista__item--container'>
            <p className='lista__item'>{item}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default App;