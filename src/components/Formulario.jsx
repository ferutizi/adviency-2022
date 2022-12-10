import { useFormik } from "formik"

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
            count: 0
        },
        validate,
        onSubmit: (values,{ resetForm }) => {
            setGifts([
                ...gifts,
                values
            ]);
            resetForm({ name: '', count: 0 });
        }
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <input type='text' autoFocus {...formik.getFieldProps('name')} />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default Formulario;