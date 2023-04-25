import './Gifts.scss'
import { useEffect } from 'react'

const Gifts = ({
  gifts,
  setGifts,
  setModal,
  setEditMode,
  setEditGift,
  setTotalPrice,
  setDuplicateGift,
  setDuplicateMode
}) => {
  const defaultImg = 'https://w7.pngwing.com/pngs/627/370/png-transparent-christmas-gift-gifts-to-send-non-stop-miscellaneous-ribbon-wedding.png'

  /*     const giftApi = async () => {
        try {
            const res = await fetch('url');
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    } */
  // Llamado a Api teniendo los gifts como dependencia
  /*     useEffect(() => {
      giftApi();
    }, [gifts]); */

  const editThisGift = (gift) => {
    setModal(true)
    setEditMode(true)
    setEditGift(gift)
  }

  /*     const duplicateThisGift = (gift) => {
        setModal(true);
        setDuplicateMode(true);
        setDuplicateGift(gift)
    } */

  const aumentar = (gift) => {
    if (gift.quantity >= 0) {
      gifts.filter(item => item.name === gift.name).map(item => item.quantity = gift.quantity + 1)
    }
    setGifts([...gifts])
  }

  const disminuir = (gift) => {
    if (gift.quantity > 1) {
      gifts.filter(item => item.name === gift.name).map(item => item.quantity = gift.quantity - 1)
    }
    setGifts([...gifts])
  }

  const deleteGift = (name) => {
    const newGifts = gifts.filter(item => item.name !== name)
    setGifts(newGifts)
  }

  useEffect(() => {
    setTotalPrice(gifts.reduce((acc, e) => acc + (e.price * e.quantity), 0))
  }, [gifts, setTotalPrice])

  return (
    <div className='gift__list items'>
      {gifts.length > 0
        ? gifts.map(item =>
          <div key={item.id} className='items__container'>
            <div className='items__flex'>
              <img className='items__img' src={item.url ? item.url : defaultImg} alt={item.name} />
              <div className='items__details'>
                <b>{item.name} {item.quantity > 1 ? `x${item.quantity}` : null} </b>
                <p><span>para:</span> {item.addressee} </p>
                <p><span>precio:</span> ${item.price * item.quantity} </p>
              </div>
            </div>
            <div className='items__button--flex'>
              <div>
                <button type='button' onClick={() => aumentar(item)} className='items__button' tabIndex={3}>+</button>
                <button type='button' onClick={() => disminuir(item)} className='items__button' tabIndex={4}>-</button>
                <button type='button' onClick={() => editThisGift(item)} className='items__button' tabIndex={5}>✎</button>
                {/* <button type='button' onClick={() => duplicateThisGift(item)} className='items__button' tabIndex={6}>x2</button>   */}
              </div>
              <button type='button' onClick={() => deleteGift(item.name)} className='items__button--red' tabIndex={7}>x</button>
            </div>
          </div>)
        : <p className='gift__error'>¿No quieres nada para navidad? Vamos... debe haber algo que quieras</p>}
    </div>
  )
}

export default Gifts
