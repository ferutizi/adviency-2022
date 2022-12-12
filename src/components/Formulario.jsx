import './Formulario.scss';
import { useFormik } from 'formik';
import Modal from './Modal';

const Formulario = ({ gifts, setGifts, modal, setModal }) => {

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

    const initial = {
        name: '',
        count: 1,
        addressee: '',
        url: ''
    }

    const formik = useFormik({
        initialValues: initial,
        validate,
        onSubmit: (values, { resetForm }, initial) => {
            setGifts([
                ...gifts,
                values
            ])
            resetForm({ initial });
            setModal(!modal);
        },
    })

    return(
        <Modal modal={modal} setModal={setModal}>
            <form onSubmit={formik.handleSubmit} className='gift__form'>
                <input type='text' {...formik.getFieldProps('name')} placeholder='Regalo' autoFocus className='gift__input' />
                {formik.errors.name && formik.touched.name ? <div className='modal__error'>{formik.errors.name}</div> : <div className='modal__error'></div>}
                <input type='text' {...formik.getFieldProps('addressee')} placeholder='Destinatario' className='gift__input' />
                <input type='text' {...formik.getFieldProps('url')} placeholder='url de imagen' className='gift__input' />
                <button type='submit' className='gift__button'>Agregar</button>
            </form>
        </Modal>
    );
}

export default Formulario;