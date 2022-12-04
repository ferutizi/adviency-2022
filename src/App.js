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
  }

  return (
    <>
      <div className="regalos__container">
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
        </form>
        {regalos.map(item => (
          <div className='regalos item container'>
            <p className='regalos item'>{item}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;