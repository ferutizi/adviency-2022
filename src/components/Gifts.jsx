import './Gifts.scss';

const Gifts = ({ gifts, setGifts }) => {

    const deleteGift = (id) => {
        const newGifts = gifts.filter(item => item.name !== id);
        setGifts(newGifts);
    }

    return(
        <div className="gift__list items">
            {gifts != '' ?
                gifts.map(item => 
                    <div key={item.name} className="items__container">
                        <p className="items__details">{item.name} {item.count === 0 ? null : `x${item.count}`}</p>
                        <button className="items__button" type="button" onClick={() => deleteGift(item.name)}>X</button>
                    </div>)
            : <div className='gift__error'>¿No quieres nada para navidad? Vamos... debe haber algo que quieras</div>
            }
        </div>
    );
}

export default Gifts;