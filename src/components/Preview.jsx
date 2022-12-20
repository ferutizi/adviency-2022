import Gifts from "./Gifts";
import Modal from "./Modal"

const Preview = ({ preview, setPreview, gifts }) => {
    return(
        <Modal setDependency={setPreview} dependency={preview}>
            <h2 style={{margin: '0'}}>Reglalos</h2>
            <div>
            {gifts.map(item => 
                    <p style={{textAlign: 'left'}}>{item.name} x{item.count}</p>
            )}
            </div>
        </Modal>
    );
}

export default Preview;