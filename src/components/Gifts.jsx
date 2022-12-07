import './Gifts.scss';

const Gifts = ({ gifts, setGifts}) => {

    const deleteGift = (id) => {
        const newGifts = gifts.filter(item => item.id !== id);
        setGifts(newGifts);
    }

    return(
        <div className='gift__list--container'>
            {gifts != '' ?
                gifts.map(item => 
                <div key={item.id} className='gift__item--container'>
                    <p className='gift__item'>{item.name}</p>
                    <button
                    type="button"
                    onClick={() => deleteGift(item.id)}
                    className='gift__item--button'
                    >x
                    </button>
                </div>  
                )
                : <p className="gift__void">¿No quieres nada para navidad? <br></br> Vamos... debe haber algo que quieras</p>
            }
        </div>
    )
}

export default Gifts;