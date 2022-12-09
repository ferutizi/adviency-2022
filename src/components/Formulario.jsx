import './Formulario.scss';
import { useFormik } from "formik";

const Formulario = ({ gifts, setGifts }) => {

    const validate = (values) => {
        const error = {}
        if(!values.name) {
            error.name = 'No escribiste ningún regalo ¿Acaso quieres un envoltorio vacío?'
        }
        return error;
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            count: 0
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            setGifts([
                ...gifts,
                values
            ]);
            resetForm({ name: '', count: 0 })
        }
    });

    return(
        <form onSubmit={formik.handleSubmit} className='gift__form'>
            <input type='text' {...formik.getFieldProps('name')} className='gift__input' />
            {formik.errors.name && <div className="gift__error">{formik.errors.name}</div>}
            <button type="submit" className="gift__button">Agregar</button>
        </form>
    );
}

export default Formulario;