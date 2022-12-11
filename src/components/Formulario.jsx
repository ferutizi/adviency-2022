import './Formulario.scss';
import { useFormik } from 'formik';

const Formulario = ({ gifts, setGifts }) => {

    const validate = (values) => {
        let error = {};
        let newGift = gifts.find(item => item.name === values.name);

        if(!values.name) {
            error.name = 'No escribiste ningún regalo ¿Acaso quieres un envoltorio vacío?';
        }

        if(newGift) {
            error.name = 'Este regalo ya está en la lista. Puedes agregar otra unidad con el botón +';
        }

        return error;
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            count: 1,
            url: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            setGifts([
                ...gifts,
                values
            ])
            resetForm({ name: '', count: 1, url: '' })
        }
    })

    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <input type='text' {...formik.getFieldProps('name')} placeholder='Regalo' autoFocus />
                {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
                <input type='text' {...formik.getFieldProps('url')} placeholder='url de imagen' />
                <button type='submit'>Agregar</button>
            </form>
        </>
    );
}

export default Formulario;