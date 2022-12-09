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
        <>
            {gifts != '' ?
                gifts.map(item => 
                    <div key={item.name}>
                        <p>{item.name} {item.count > 0 && `${item.count}`}</p>
                        <div>
                            <div>
                                <button type="button" onClick={() => aumentar(item)}>+</button>
                                <button type="button" onClick={() => disminuir(item)}>-</button>
                            </div>
                            <button type="button" onClick={() => deleteGift(item.name)}>x</button>
                        </div>
                    </div>)
                :null
            }
        </>
    );
}

export default Gifts;