import Modal from "./Modal"

const Preview = ({ preview, setPreview }) => {
    return(
        <Modal setDependency={setPreview} dependency={preview}>
            <p>hola</p>
        </Modal>
    );
}

export default Preview;