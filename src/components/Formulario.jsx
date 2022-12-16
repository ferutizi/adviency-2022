import './Formulario.scss';
import { useFormik } from 'formik';
import Modal from './Modal';
import { useEffect } from 'react';
import sugg from '../suggestion.json';

const Formulario = ({ gifts, setGifts, modal, setModal, editMode, setEditMode, editGift, setEditGift }) => {
    
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
    
    useEffect(() => {
        if(editMode) {
            formik.setFieldValue('name', editGift.name);
            formik.setFieldValue('addresse', editGift.addressee);
            formik.setFieldValue('url', editGift.url);
        } /* else {
            formik.values.name = initial.name;
            formik.values.count = initial.count ;
            formik.values.addressee = initial.addressee ;
            formik.values.url = initial.url ;
      } */
    }, [editMode]);    

    const formik = useFormik({
        initialValues: initial,
        validate,
        onSubmit: (values, { resetForm }, initial) => {
            if(!editMode) {
                setGifts([
                    ...gifts,
                    values
                ])
            } else {
                const newGifts = [...gifts];
                const g = newGifts.find(g => g.name === editGift.name);
                g.name = formik.values.name;
                g.addressee = formik.values.addressee;
                g.url = formik.values.url;
                setEditMode(false);
                setEditGift({});
                setGifts(newGifts);
            }
            resetForm({ initial });
            setModal(!modal);
            setEditMode(false)
        },
    })

    const suggestion = () => {
        const random = Math.round(Math.random() * (13) + 1);
        // use setFieldValue to re-render input name
        formik.setFieldValue('name', sugg[random]);
    }

    return(
        <Modal modal={modal} setModal={setModal} setEditMode={setEditMode}>
            <form onSubmit={formik.handleSubmit} className='gift__form'>
                <div style={{display: 'flex', gap: '5px'}}>
                    <input
                    type='text'
                    {...formik.getFieldProps('name')}
                    placeholder='Regalo'
                    autoFocus className='gift__input'
                    tabIndex={1} 
                    />
                    <button className='modal__button' type='button' onClick={() => suggestion()}>?</button>
                </div>
                {formik.errors.name && formik.touched.name ? <div className='modal__error'>{formik.errors.name}</div> : <div className='modal__error'></div>}
                <input
                 type='text'
                 {...formik.getFieldProps('addressee')}
                 placeholder='Destinatario'
                 className='gift__input'
                 tabIndex={2} 
                />
                <input
                 type='text'
                 {...formik.getFieldProps('url')}
                 placeholder='url de imagen'
                 className='gift__input' 
                 tabIndex={3} 
                />
                <button tabIndex={4} type='submit' className='gift__button'>{editMode ? 'Actualizar' : 'Agregar'}</button>
            </form>
        </Modal>
    );
}

export default Formulario;