import './Gifts.scss';

const Gifts = ({ gifts, setGifts, setModal, setEditMode, setEditGift }) => {
    const defaultImg = 'https://w7.pngwing.com/pngs/627/370/png-transparent-christmas-gift-gifts-to-send-non-stop-miscellaneous-ribbon-wedding.png';

    const initial = {
        name: '',
        count: 1,
        addressee: '',
        url: ''
    }

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

    return(
        <div className='gift__list items'>
            {gifts != '' ?
                gifts.map(item => 
                    <div key={item.name} className='items__container'>
                        <div className='items__button--flex'>
                            <img className='items__img' src={item.url ? item.url : defaultImg} alt={item.name} />
                            <p className='items__details'>
                                <b>{item.name}</b> {item.count > 1 ? `x${item.count}` : null} <br></br><span>para:</span> {item.addressee}
                            </p>
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