import { Link } from 'react-router-dom'
import './navBar.css'
import { useState } from 'react'

function NavBar() {
  // Setup file for the navigation items
  const [navItems, setNavItems] = useState(
    [
      {
        name: 'Home',
        link: '/home',
        active: false,
      },
      {
        name: 'Shop',
        link: '/shop',
        active: false,
      }
    ]
  )

  // Function to change which item is active
  const changeActive = (index) => {
    const newActive = [...navItems]

    // Set the clicked item to be active
    newActive[index].active = true

    // Loop through all items which arent the clicked one, and set them to not be active
    for(let i = 0; i < newActive.length; i++){
      if(i !== index){
        newActive[i].active = false
      }
    }
    setNavItems(newActive)
  }

  return (
    <div className='nav-container'>
      {
        navItems.map((item, index) => {
          // if an item is active, add teh active className
          return item.active ? (
            <Link key={item.name} to={item.link} onClick={()=>{changeActive(index)}} className='link active'>{item.name}</Link>
          ) : (
            <Link key={item.name} to={item.link} onClick={()=>{changeActive(index)}} className='link'>{item.name}</Link>
          )
        })
      }
    </div>
  )
}

export default NavBar
