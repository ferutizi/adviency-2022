import { v4 as uuidv4 } from 'uuid';
import useFormulario from '../hooks/useFormulario';

const Form = ({ gifts, setGifts }) => {
    const [formulario, handleChange, reset] = useFormulario({ id: uuidv4() });

    const handleSubmit = (e) => {
        e.preventDefault();
        setGifts([
            ...gifts,
            formulario
        ]);
        e.target.reset();
        reset();
    }

    return(
        <form onSubmit={handleSubmit} className='gift__form'>
            <input 
            name="name"
            type="text"
            value={formulario.value}
            onChange={handleChange}
            autoFocus
            className='gift__input'
            />
            <button type="submit" className='gift__button'>Agregar</button>
        </form>
    );
}

export default Form;