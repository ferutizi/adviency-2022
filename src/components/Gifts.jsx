import './Gifts.scss';

const Gifts = ({ gifts, setGifts }) => {
    const defaultImg = 'https://w7.pngwing.com/pngs/627/370/png-transparent-christmas-gift-gifts-to-send-non-stop-miscellaneous-ribbon-wedding.png'

    const aumentar = (gift) => {
        if(gift.count >= 0) {
        gifts.filter(item => item.name === gift.name).map(item => item.count = gift.count + 1);
        }
        setGifts([...gifts]);
    }

    const disminuir = (gift) => {
        if(gift.count > 0) {
        gifts.filter(item => item.name === gift.name).map(item => item.count = gift.count - 1);
        }
        setGifts([...gifts]);
    }

    const deleteGift = (name) => {
        const newGifts = gifts.filter(item => item.name !== name);
        setGifts(newGifts);
    }


    return(
        <div className="gift__list items">
            {gifts != '' ?
                gifts.map(item => 
                    <div key={item.name} className='items__container'>
                        <div className='items__button--flex'>
                            <img src={item.link ? item.link : defaultImg} alt={item.name} className='items__img' />
                            <p className='items__details'>{item.name} {item.count > 0 ? `x${item.count}` : null}</p>
                        </div>
                        <div className="items__button--flex">
                            <div>
                                <button type="button" className='items__button' onClick={() => aumentar(item)}>+</button>
                                <button type="button" className='items__button' onClick={() => disminuir(item)}>-</button>
                            </div>
                            <button type="button" className='items__button--red' onClick={() => deleteGift(item.name)}>x</button>
                        </div>
                    </div>)
                : <p className="gift__error">¿No quieres nada para navidad? Vamos... debe haber algo que quieras</p>
            }
        </div>
    );
}

export default Gifts;