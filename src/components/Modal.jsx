import './Modal.scss';

const Modal = ({ modal, setModal, children, setEditMode }) => {
    const closeModal = () => {
        setModal(false);
        setEditMode(false);
    }
    return(
        <>
            {modal && 
                <div className='modal__container'>
                    <div className='modal__card'>
                        <button className='modal__button' type='button' onClick={() => closeModal()}>X</button>
                        {children}
                    </div>
                </div>
            }
        </>
    );
}

export default Modal