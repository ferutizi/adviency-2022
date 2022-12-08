import './Gifts.scss';

const Gifts = ({ gifts, setGifts }) => {

    const deleteGift = (id) => {
        const newGifts = gifts.filter(item => item.name !== id);
        setGifts(newGifts);
    }

    const aumentar = (gift) => {
        if(gift.count >= 0) {
            gifts.filter(item => item.name === gift.name).map(item => item.count = item.count + 1);
            setGifts([...gifts]);
        }
    }

    const disminuir = (gift) => {
        if(gift.count > 0) {
            gifts.filter(item => item.name === gift.name).map(item => item.count = item.count - 1);
            setGifts([...gifts]);
        }
    }

    return(
        <div className="gift__list items">
            {gifts != '' ?
                gifts.map(item => 
                    <div key={item.name} className="items__container">
                        <p className="items__details">{item.name} {item.count === 0 ? null : `x${item.count}`}</p>
                        <div className='items__buttons--flex'>
                            <div>
                                <button className="items__button" type='button' onClick={() => aumentar(item)}>+</button>
                                <button className="items__button" type='button' onClick={() => disminuir(item)}>-</button>
                            </div>
                            <button className="items__button--red" type="button" onClick={() => deleteGift(item.name)}>x</button>
                        </div>
                    </div>)
            : <div className='gift__error'>¿No quieres nada para navidad? Vamos... debe haber algo que quieras</div>
            }
        </div>
    );
}

export default Gifts;