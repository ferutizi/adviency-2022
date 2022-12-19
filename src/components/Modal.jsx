import './Modal.scss';

const Modal = ({ modal, setModal, children, setEditMode, setDuplicateMode }) => {
    const closeModal = () => {
        setModal(false);
        setEditMode(false);
        setDuplicateMode(false);
    }
    return(
        <>
            {modal && 
                <div className='modal__container'>
                    <div className='modal__card'>
                        <button tabIndex={5} className='modal__button--close' type='button' onClick={() => closeModal()}>X</button>
                        {children}
                    </div>
                </div>
            }
        </>
    );
}

export default Modal