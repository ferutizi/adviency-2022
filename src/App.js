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
      <div>
        <h1>Lista de regalos</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={formulario.value}
            autoFocus
            placeholder="Regalos..."
            />
            <button type="submit">Agregar</button>
        </form>
        <div>
          {regalos.map(item => 
            <div key={item.id}>
              <p>{item.name}</p>
              <button 
                type="button"
                onClick={() => deleteItem(item.id)}
                >Quitar
              </button>
            </div>
            )}
            <button type="button" onClick={() => deleteAll()}>Quitar todos</button>
        </div>
      </div>
    </>
  );
}

export default App;