const Gifts = ({ gifts, setGifts }) => {

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
        <div>
            {gifts !== '' ?
                gifts.map(item => 
                    <div key={item.name}>
                        <p>{item.name} {item.count > 0 ? `x${item.count}` : null}</p>
                        <div>
                            <div>
                                <button type="button" onClick={() => aumentar(item)}>+</button>
                                <button type="button" onClick={() => disminuir(item)}>-</button>
                            </div>
                            <button type="button" onClick={() => deleteGift(item.name)}>x</button>
                        </div>
                    </div>)
                : <p>¿No quieres nada para navidad? Vamos... debe haber algo que quieras</p>
            }
        </div>
    );
}

export default Gifts;