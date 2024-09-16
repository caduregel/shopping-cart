import './cartItem.css'

function CartItem({ title, imageUrl, ammount, index, changeAmmount }) {

    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={title + ' image'} />
            <h1>{title}</h1>
            <div className="ammount-container">
                <input type="button" name="removeAmmount" value='-' onClick={() => {changeAmmount(index, 'untrue')}} />

                <p>Ammount: {ammount}</p>
                <input type="button" name="addAmmount" value='+' onClick={() => { changeAmmount(index, true) }} />
            </div>
        </div>
    )
}

export default CartItem
