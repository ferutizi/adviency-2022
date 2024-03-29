import './index.scss'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useState } from 'react'
import Formulario from './components/Formulario'
import Gifts from './components/Gifts'
import Preview from './components/Preview'
import Music from './components/Music'

function App () {
  const [gifts, setGifts] = useLocalStorage('gifts', [])
  const [modal, setModal] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [preview, setPreview] = useState(false)
  const [editGift, setEditGift] = useState({})
  const [duplicateGift, setDuplicateGift] = useState({})
  const [duplicateMode, setDuplicateMode] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <>
      <div className='gift__container'>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1em' }}>
          <h1 className='gift__title'>Lista de regalos</h1>
          <button type='button' onClick={() => setModal(true)} className='gift__button'>Agregar Regalo</button>
          <Gifts
            gifts={gifts}
            setGifts={setGifts}
            setModal={setModal}
            setEditMode={setEditMode}
            setEditGift={setEditGift}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            duplicateGift={duplicateGift}
            setDuplicateGift={setDuplicateGift}
            duplicateMode={duplicateMode}
            setDuplicateMode={setDuplicateMode}
          />
        </div>
        <div>
          <Formulario
            gifts={gifts}
            setGifts={setGifts}
            modal={modal}
            setModal={setModal}
            editMode={editMode}
            setEditMode={setEditMode}
            editGift={editGift}
            setEditGift={setEditGift}
            duplicateGift={duplicateGift}
            setDuplicateGift={setDuplicateGift}
            duplicateMode={duplicateMode}
            setDuplicateMode={setDuplicateMode}
            preview={preview}
            setPreview={setPreview}
          />
        </div>
        <div className='gift__footer'>
          <p className='gift__total'>Total: ${totalPrice}</p>
          <div style={{ display: 'flex', gap: '1em' }}>
            <button type='button' onClick={() => setGifts([])} className='gift__button'>Quitar todos</button>
            <button type='button' className='gift__button' onClick={() => setPreview(true)}>Ver lista</button>
          </div>
        </div>
        <Preview preview={preview} setPreview={setPreview} gifts={gifts} />
        <Music />
      </div>
    </>
  )
}

export default App
