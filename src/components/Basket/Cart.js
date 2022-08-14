// import React,{useState} from 'react'

// export default function  Cart({carts,removeFromCart}) {
//   const PAGE_MENUITEMS = 'menuItems';
//   const[page,setPage]= useState(PAGE_MENUITEMS)
//   const navigateTo = (nextPage) => {
//     setPage(nextPage);
//   }
  
//   return (
//     <div>
//        <>
//   <h1>My Cart</h1>
//   <button onClick ={() => navigateTo(PAGE_MENUITEMS)}>View Menu</button>
//   <div className = "item" >
//     {carts.map((menuItems, index) => (
    
//   <div>
//        <img src={menuItems.image} width={600} height={300}   />
//       <h2>{menuItems.itemName}</h2>
//       <h3>{"$" + menuItems.price}</h3>  

//     <button onClick ={() => removeFromCart(menuItems)}>Remove</button>
//       </div>
    
  
//       ))}
//       </div>
//       <button >Check out</button>
//     </>
//     </div>
//   )
// }
