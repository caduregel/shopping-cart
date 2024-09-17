import { useState } from 'react'
import './shopItem.css'

function ShopItem({ title, imageUrl, addToCart }) {
    const [ammountToBuy, setAmmountToBuy] = useState(1)


    return (
        <div className='shop-item-container'>
            <img src={imageUrl} alt={title + " Image"} />
            <h1>{title}</h1>
            <div className='inputs'>
                <label>ammount:  </label>
                <input type="number" value={ammountToBuy} onChange={(e)=>{
                    setAmmountToBuy(e.target.value)
                }}/>
            </div>
                <button onClick={() => { addToCart(title, imageUrl, ammountToBuy) }}>Add to Cart</button>
        </div>
    )
}

export default ShopItem
