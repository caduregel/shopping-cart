import { useState } from "react"
import Cart from "../components/cart/Cart"

function Shop() {
  const [cartItems, setCartItems] = useState([
    {
      title: "Item",
      imageUrl: "Link",
      ammount: 1,
    },
    {
      title: "Item",
      imageUrl: "Link",
      ammount: 1,
    },
    {
      title: "Item",
      imageUrl: "Link",
      ammount: 1,
    }
  ])

  const removeItemFromCart = (itemIndex) => {
    const newItems = [...cartItems]

    if (itemIndex > -1) { // only splice array when item is found
      newItems.splice(itemIndex, 1); // 2nd parameter means remove one item only
    }

    setCartItems(newItems)
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

  return (
    <>
      <Cart items={cartItems} removeItem={removeItemFromCart} changeAmmount={changeAmmount} />
    </>
  )
}

export default Shop
