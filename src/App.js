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
      <form onSubmit={handleSubmit}>
        <input 
          name='name'
          value={formulario.value}
          onChange={handleChange}
          type='text'
          placeholder='Regalo...'
          autoFocus
        />
        <button type='submit'>Agregar</button>
      </form>
      <div>
      {regalos.map(item => 
        <div key={item.id}>
          <p>{item.name}</p>
          <button type='button' onClick={() => deleteRegalo(item.id)}>Quitar</button>
        </div>)
      }
      </div>
    </>
  );
}

export default App;