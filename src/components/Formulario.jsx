import './Formulario.scss';
import { Formik, useFormik } from "formik"

const Formulario = ({ gifts, setGifts }) => {

    const validate = (values) => {
        let error = {}
        const newGift = gifts.find(gift => gift.name.trim() === values.name.trim())

        if(!values.name) {
            error.name = 'No escribiste ningún regalo ¿Acaso quieres un envoltorio vacío?'
        }

        if(newGift) {
            error.name = 'Este regalo ya está en la lista. Puedes agregar otra unidad con el boton +'
        }

        return error;
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            count: 0,
            link: ''
        },
        validate,
        onSubmit: (values,{ resetForm }) => {
            setGifts([
                ...gifts,
                values
            ]);
            resetForm({ name: '', count: 0, link: '' });
        }
    });

    return(
        <form onSubmit={formik.handleSubmit} className='gift__form'>
            <input
                type='text'
                autoFocus
                {...formik.getFieldProps('name')}
                placeholder='Regalo...'
                className='gift__input' 
            />
            <input
            type='text'
            {...formik.getFieldProps('link')}
            placeholder='Link de imagen'
            className='gift__input' 
            />
            {formik.errors ? <div className='gift__error'>{formik.errors.name}</div> : null}
            <button type="submit" className='gift__button'>Agregar</button>
        </form>
    );
}

export default Formulario;