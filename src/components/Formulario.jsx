import { useFormik } from "formik";

const Formulario = ({ gifts, setGifts }) => {

    const validate = (values) => {
        const errors = {}
        const newGift = gifts.find(item => item.name === values.name);
        if(!values.name) {
            errors.name = 'No escribiste ningún regalo ¿Acaso quieres un envoltorio vacío?'
        }

        if(newGift) {
            errors.name = 'Este regalo ya está en la lista, puedes darle al botón "+" para agregar mas unidades'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            count: 0,
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            setGifts([
                ...gifts,
                values
            ])
            resetForm({values: '', count: 0});
        }
    })

    return(
        <>
            <form onSubmit={formik.handleSubmit} className='gift__form'>
                <input type='text' {...formik.getFieldProps('name')} className='gift__input' />
                {formik.errors.name && formik.touched.name ?
                    <div>{formik.errors.name}</div>
                    : null
                }
                <button type="submit" className='gift__button'>Agregar</button>
            </form>
        </>
    );
}

export default Formulario;