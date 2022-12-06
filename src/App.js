import './index.scss';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import useFormulario from "./hooks/useFormulario";

function App() {
  const [regalos, setRegalos] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({ id: uuidv4() })

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
    const newRegalos = regalos.filter(i => i.id != id);
    setRegalos(newRegalos);
  }

  const deleteAll = () => {
    setRegalos([]);
  }

  return (
    <>
      <div className="regalos__container">
        <div>
          <h1 className="regalos__title">Lista de regalos</h1>
          <form onSubmit={handleSubmit} className="regalos__form">
            <input
              name="name"
              type="text"
              onChange={handleChange}
              value={formulario.value}
              autoFocus
              placeholder="Regalos..."
              className="regalos__input"
              />
              <button type="submit" className="regalos__button">Agregar</button>
          </form>
          <div className="regalos__list--container">
            { regalos != "" ?
              regalos.map(item => 
              <div key={item.id} className="regalos__item--container">
                <p className="regalos__item">{item.name}</p>
                <button 
                  type="button"
                  onClick={() => deleteItem(item.id)}
                  className="regalos__item--button"
                  >Quitar
                </button>
              </div>)
              : <p className='regalos__item--vacio'>¿No quieres nada para navidad?
              <br></br> Vamos... añade algo que te gustaria tener</p>
            }
          </div>
        </div>
        <button
          type="button"
          onClick={() => deleteAll()}
          className="regalos__button"
          >Quitar todos
        </button>
      </div>
    </>
  );
}

export default App;