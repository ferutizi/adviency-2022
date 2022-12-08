const Gifts = ({ gifts, setGifts }) => {

    const deleteGift = (id) => {
        const newGifts = gifts.filter(item => item.name !== id);
        setGifts(newGifts);
    }

    return(
        <div>
            {
                gifts.map(item => 
                    <div key={item.name}>
                        <p>{item.name} {item.count === 0 ? null : `x${item.count}`}</p>
                        <button type="button" onClick={() => deleteGift(item.name)}>X</button>
                    </div>)
            }
            <button type="button" onClick={() => setGifts([])}>Quitar todos</button>
        </div>
    );
}

export default Gifts;