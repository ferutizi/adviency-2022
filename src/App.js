import './index.css';
import { useState } from 'react';

function App() {
  const [formulario, setFormulario] = useState({regalo: ''});
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
      formulario.regalo
    ]);
    setFormulario({regalo: ''})
  }

  return (
    <>
      <div className="container">
        <h1>Lista de regalos</h1>
        <form onSubmit={handleSubmit}>
          <input 
            name="regalo"
            type="text"
            onChange={handleChange}
            value={formulario.regalo}
            autoFocus
          />
          <button>Agregar</button>
        </form>
          <ul>
            {
              regalos.map(item => (
                <li>
                  <div className="item__container">
                    <p className="item">{item}</p>
                  </div>
                </li>
                ))
            }
          </ul>
      </div>
    </>
  );
}

export default App;
