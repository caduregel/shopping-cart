import { useEffect, useState } from "react"
import Cart from "../components/cart/Cart"
import ShopItem from "../components/shopitem/Shopitem"

import './styles/shop.css'

function Shop() {
  const [cartItems, setCartItems] = useState([])

  const [shopItems, setShopItems] = useState(null)
  const [fetchError, setFetchError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: "cors" }).
      then(
        (response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        }
      ).then((response) => {
        setShopItems(response)
      }).catch((error) => setFetchError(error))
      .finally(() => setLoading(false));
  }, [])



  const removeItemFromCart = (itemIndex) => {
    const newItems = [...cartItems]

    if (itemIndex > -1) { // only splice array when item is found
      newItems.splice(itemIndex, 1); // 2nd parameter means remove one item only
    }

    setCartItems(newItems)
  }

  const addItemToCart = (title, imageUrl, ammount) => {
    const newCartItems = [...cartItems]
    const newItem = {
      title: title,
      imageUrl: imageUrl,
      ammount: ammount,
    } 
    newCartItems.push(newItem)

    setCartItems(newCartItems)
  }

  const changeAmmount = (index, sumOrMin) => {
    const newItems = [...cartItems]
    const itemToBeChanged = newItems[index]
    if (sumOrMin == true) {
      itemToBeChanged.ammount = itemToBeChanged.ammount + 1
      setCartItems(newItems)
    } else {
      // Check if the user wants to remove the item if the ammount is 1
      if (itemToBeChanged.ammount == 1) {
        console.log(itemToBeChanged)
        const confirmRemoval = confirm("Are you sure you want to remove this item from your cart?")
        if (confirmRemoval) { removeItemFromCart(index) }
      } else {
        itemToBeChanged.ammount = itemToBeChanged.ammount - 1
        setCartItems(newItems)
      }
    }
  }

  if (loading) return <p>Loading...</p>;
  if (fetchError) return <p>A network error was encountered</p>;
  if (!loading) {
    return (
      <div className="shop-container">
        <div className="shop-items-container">
          {shopItems.map((item, index) => {
            return <ShopItem key={index} imageUrl={item.image} title={item.title} addToCart={addItemToCart}/>
          })}
        </div>
        <Cart items={cartItems} removeItem={removeItemFromCart} changeAmmount={changeAmmount} />
      </div>
    )
  }
}

export default Shop
