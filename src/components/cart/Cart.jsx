import CartItem from "./cartItem/CartItem"
import './cart.css'

function Cart({ items, removeItem, changeAmmount }) {

    if (items) {
        return (
            <div className="cart-container">
                {items.map((item, index) => {
                    return <CartItem key={index} title={item.title} imageUrl={item.imageUrl} removeItem={removeItem} index={index} changeAmmount={changeAmmount} ammount={item.ammount}/>
                })}
                <input type="button" name="checkout" value="Checkout" id="checkout-button" />
            </div>
        )
    }
}

export default Cart
