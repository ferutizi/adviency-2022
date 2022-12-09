import './Gifts.scss';

const Gifts = ({ gifts, setGifts }) => {

    const deleteGift = (id) => {
        const newGifts = gifts.filter(gift => gift.name != id);
        setGifts(newGifts);
    }

    const aumentar = (gift) => {
        if(gift.count >= 0) {
            gifts.filter(item => item.name === gift.name).map(item => item.count = gift.count + 1)
            setGifts([...gifts])
        }
    }
    
    const disminuir = (gift) => {
        if(gift.count > 0) {
            gifts.filter(item => item.name === gift.name).map(item => item.count = gift.count - 1)
            setGifts([...gifts])
        }
    }


    return(
        <div className='gift__list items'>
            {gifts != '' ?
                gifts.map(item => 
                    <div key={item.name} className='items__container'>
                        <p className='items__details'>{item.name} {item.count > 0 && `${item.count}`}</p>
                        <div className='items__button--flex'>
                            <div>
                                <button type="button" onClick={() => aumentar(item)} className='items__button'>+</button>
                                <button type="button" onClick={() => disminuir(item)} className='items__button'>-</button>
                            </div>
                            <button type="button" onClick={() => deleteGift(item.name)} className='items__button--red'>x</button>
                        </div>
                    </div>)
                : <p className='gift__error'>¿No quieres nada para navidad? Vamos... debe haber algo que quieras</p>
            }
        </div>
    );
}

export default Gifts;