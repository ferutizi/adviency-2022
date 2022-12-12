import './Modal.scss';

const Modal = ({ modal, setModal, children }) => {
    return(
        <>
            {modal && 
                <div className='modal__container'>
                    <div className='modal__card'>
                        <button className='modal__button' type='button' onClick={() => setModal(false)}>X</button>
                        {children}
                    </div>
                </div>
            }
        </>
    );
}

export default Modal