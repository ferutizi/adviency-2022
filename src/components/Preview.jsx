import './Preview.scss';
import Modal from "./Modal";

const Preview = ({ preview, setPreview, gifts }) => {
    return(
        <Modal setDependency={setPreview} dependency={preview}>
            <h2 style={{margin: '0'}}>Reglalos</h2>
            <div>
            {gifts != '' ?
                gifts.map(item => 
                        <p key={item.id} style={{textAlign: 'left'}}>{item.name} x{item.quantity}</p>
                )
                : <p className="preview__error">No hay ningún regalo para mostrar</p>
            }
            </div>
        </Modal>
    );
}

export default Preview;