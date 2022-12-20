import './Modal.scss';

const Modal = ({ dependency, children, setEditMode, setDuplicateMode, setDependency }) => {
    const closeModal = () => {
        setDependency(false);
        setEditMode(false);
        setDuplicateMode(false);
    }
    return(
        <>
            {dependency && 
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