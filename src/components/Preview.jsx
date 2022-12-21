import './Preview.scss';
import Modal from "./Modal";

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


const Preview = ({ preview, setPreview, gifts }) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return(
        <Modal setDependency={setPreview} dependency={preview}>
            <div className='print__container'>
                <div ref={componentRef}>
                    <h2 style={{margin: '0'}}>Reglalos</h2>
                    <div>
                    {gifts != '' ?
                        gifts.map(item => 
                                <p key={item.id} style={{textAlign: 'left'}}>{item.name} x{item.quantity}</p>
                        )
                        : <p className="preview__error">No hay ningún regalo para mostrar</p>
                    }
                    </div>
                </div>
                <button style={{marginBottom: '1.5em'}} className='gift__button' onClick={handlePrint}>Imprimir lista</button>
            </div>
        </Modal>
    );
}

export default Preview;