import './Formulario.scss';
import { useFormik } from 'formik';
import Modal from './Modal';
import { useEffect } from 'react';
import sugg from '../suggestion.json';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ 
    gifts,
    setGifts,
    modal,
    setModal,
    editMode,
    setEditMode,
    editGift,
    setEditGift,
    duplicateGift,
    setDuplicateGift,
    duplicateMode,
    setDuplicateMode,
    preview={preview},
    setPreview={setPreview}
}) => {
    
    const validate = (values) => {
        let error = {};
        let newGift = gifts.find(item => item.name === values.name);
        
        if(!values.name) {
            error.name = 'No escribiste ningún regalo ¿Acaso quieres un envoltorio vacío?';
        }

        if(newGift && !editMode && !duplicateMode) {
            error.name = 'Este regalo ya está en la lista. Puedes agregar otra unidad con el botón +';
        } 
        
        return error;
    }
    
    const initial = {
        name: '',
        quantity: 1,
        addressee: '',
        price: '',
        url: '',
    }
    
    useEffect(() => {
        if(editMode) {
            formik.setFieldValue('name', editGift.name);
            formik.setFieldValue('addressee', editGift.addressee);
            formik.setFieldValue('price', editGift.price);
            formik.setFieldValue('url', editGift.url);
        } else if(duplicateMode) {
            formik.setFieldValue('name', duplicateGift.name);
            formik.setFieldValue('addressee', duplicateGift.addressee);
            formik.setFieldValue('price', duplicateGift.price);
            formik.setFieldValue('url', duplicateGift.url);
        } else {
            formik.values.name = initial.name;
            formik.values.quantity = initial.quantity ;
            formik.values.addressee = initial.addressee ;
            formik.values.url = initial.url ;
        }
    }, [editMode, duplicateMode]);    

    const formik = useFormik({
        initialValues: initial,
        validate,
        onSubmit: (values, { resetForm }, initial) => {
            if(!editMode && !duplicateMode) {
                setGifts([
                    ...gifts,
                    { id: uuidv4() }
                ])
            } else if(editMode) {
                const newGifts = [...gifts];
                const g = newGifts.find(g => g.name === editGift.name);
                g.name = formik.values.name;
                g.addressee = formik.values.addressee;
                g.price = formik.values.price;
                g.url = formik.values.url;
                setEditMode(false);
                setEditGift({});
                setGifts(newGifts);
            } else if(duplicateMode) {
                setGifts([
                    ...gifts,
                    values
                ])
                setDuplicateMode(false);
                setDuplicateGift({});
            }
            resetForm({ initial });
            setModal(!modal);
            console.log(gifts)
        },
    })

    const suggestion = () => {
        const random = Math.round(Math.random() * (13) + 1);
        // use setFieldValue to re-render input name
        formik.setFieldValue('name', sugg[random]);
    }

    return(
        <Modal dependency={modal} setDependency={setModal} setEditMode={setEditMode} setDuplicateMode={setDuplicateMode}>
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
                <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '5px'}}>
                    <input
                    type='text'
                    {...formik.getFieldProps('addressee')}
                    placeholder='Destinatario'
                    className='gift__input'
                    tabIndex={2} 
                    />
                    <input
                    type='number'
                    {...formik.getFieldProps('price')}
                    placeholder='Precio'
                    className='gift__input'
                    tabIndex={3} 
                    />
                </div>
                <input
                 type='text'
                 {...formik.getFieldProps('url')}
                 placeholder='url de imagen'
                 className='gift__input' 
                 tabIndex={4} 
                />
                <button tabIndex={5} type='submit' className='gift__button'>{editMode ? 'Actualizar' : 'Agregar'}</button>
            </form>
        </Modal>
    );
}

export default Formulario;