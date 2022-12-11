import './Gifts.scss';

const Gifts = ({ gifts, setGifts }) => {
    const defaultImg = 'https://w7.pngwing.com/pngs/627/370/png-transparent-christmas-gift-gifts-to-send-non-stop-miscellaneous-ribbon-wedding.png';

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

    return(
        <div className='gift__list items'>
            {gifts != '' ?
                gifts.map(item => 
                    <div key={item.name} className='items__container'>
                        <div className='items__button--flex'>
                            <img className='items__img' src={item.url ? item.url : defaultImg} alt={item.name} />
                            <p className='items__details'>{item.name} {item.count > 1 ? `x${item.count}` : null}</p>
                        </div>
                        <div className='items__button--flex'>
                            <div>
                                <button type='button' onClick={() => aumentar(item)} className='items__button'>+</button>
                                <button type='button' onClick={() => disminuir(item)} className='items__button'>-</button>
                            </div>
                            <button type='button' onClick={() => deleteGift(item.name)} className='items__button--red'>x</button>
                        </div>
                    </div>)
                : <p className='gift__error'>¿No quieres nada para navidad? Vamos... debe haber algo que quieras</p>
            }
        </div>
    );
}

export default Gifts;