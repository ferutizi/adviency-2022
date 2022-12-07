import './Formulario.scss';
import { useFormik } from 'formik';

const Formulario = ({ gifts, setGifts }) => {

    const validate = (values) => {
        const errors = {}
        const newGift = gifts.find(item => item.name === values.name);
        if(!values.name) {
            errors.name = 'No escribiste ningún regalo, ¿acaso quieres un envoltorio vacío?'
        }
    
        if(newGift) {
            errors.name = 'Este regalo ya está en la lista, mejor agrega otro'
        }
    
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            setGifts([
                ...gifts,
                values
            ])
            resetForm({values: ''});
        }
    })

    return(
        <form onSubmit={formik.handleSubmit} className='gift__form'>
            <input type='text' {...formik.getFieldProps('name')} className='gift__input' />
            {formik.touched.name && formik.errors.name ?
                <div>{formik.errors.name}</div>
                : null
            }
            {formik.touched.name2 && formik.errors.name ?
                <div >{formik.errors.name}</div>
                : null
            }
            <button type="submit" className='gift__button'>Agregar</button>
        </form>
    );
}

export default Formulario;