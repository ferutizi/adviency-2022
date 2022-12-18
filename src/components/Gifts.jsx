import { useEffect } from 'react';
import './Gifts.scss';

const Gifts = ({ gifts, setGifts, setModal, setEditMode, setEditGift, totalPrice, setTotalPrice }) => {
    const defaultImg = 'https://w7.pngwing.com/pngs/627/370/png-transparent-christmas-gift-gifts-to-send-non-stop-miscellaneous-ribbon-wedding.png';
    
    const giftApi = async () => {
        try {
            const res = await fetch('url');
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
// Llamado a Api teniendo los gifts como dependencia
/*     useEffect(() => {
      giftApi();
    }, [gifts]); */

    const editThisGift = (gift) => {
        setModal(true);
        setEditMode(true);
        setEditGift(gift);
    }

    const aumentar = (gift) => {
        if(gift.count >= 0) {
            gifts.filter(item => item.name === gift.name).map(item => item.count = gift.count + 1);
        }
        setGifts([...gifts]);
    }

    const disminuir = (gift) => {
        if(gift.count > 1) {
            gifts.filter(item => item.name === gift.name).map(item => item.count = gift.count - 1);
        }
        setGifts([...gifts]);
    }

    const deleteGift = (name) => {
        const newGifts = gifts.filter(item => item.name !== name);
        setGifts(newGifts);
    }

    useEffect(() => {
        setTotalPrice(gifts.reduce((acc, e) => acc + (e.price * e.count), 0));
    }, [gifts, setTotalPrice])

    return(
        <div className='gift__list items'>
            {gifts !== '' ?
                gifts.map(item => 
                    <div key={item.name} className='items__container'>
                        <div className='items__flex'>
                            <img className='items__img' src={item.url ? item.url : defaultImg} alt={item.name} />
                            <div className='items__details'>
                                <b>{item.name} {item.count > 1 ? `x${item.count}` : null} </b>
                                <p><span>para:</span> {item.addressee} </p>
                                <p><span>precio:</span> ${item.price * item.count} </p>
                            </div>
                        </div>
                        <div className='items__button--flex'>
                            <div>
                                <button type='button' onClick={() => aumentar(item)} className='items__button' tabIndex={3}>+</button>
                                <button type='button' onClick={() => disminuir(item)} className='items__button' tabIndex={4}>-</button>
                                <button type='button' onClick={() => editThisGift(item)} className='items__button' tabIndex={5}>ed</button>  
                            </div>
                            <button type='button' onClick={() => deleteGift(item.name)} className='items__button--red' tabIndex={6}>x</button>
                        </div>
                    </div>)
                : <p className='gift__error'>¿No quieres nada para navidad? Vamos... debe haber algo que quieras</p>
            }
        </div>
    );
}

export default Gifts;