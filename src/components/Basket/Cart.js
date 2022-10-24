// import React, {useState, useEffect} from 'react';
// import StripeCheckout from 'react-stripe-checkout'


// export default function renderCart (props)  {
//   return
//    (
//   //  {props.length ? (
//    <div key = {props.menuItems.id} className="my-cart" style={{paddingBottom:"200px"}}>
//     <h1>My Cart</h1>
//     <button className="return-menu" onClick ={() =>props.navigateTo(props.PAGE_MENUITEMS)}>Return Menu</button>
  
//     <div className = "menuItem" >  
//       {props.carts.map((menuItems, index) => (
//     <div key = {props.menuItems.id}>
//          <img src={props.menuItems.image} width={300} height={200}   />
//         <h2>{props.menuItems.itemName}</h2>
//         <h3>{"$" + props.menuItems.price}</h3>  
  
//         <input 
//         value ={props.menuItems.quantity}
//         onChange={(e)=>
//             props.setQuantity(
//             props.menuItems,
//             parseInt(e.target.value))}
//           />
          
  
//       <button onClick ={() => props.removeFromCart(props.menuItems)}>Remove</button>
//         </div>
    
//         ))}
//         </div>
       
//         <div >Total:({props.getTotalSum()}) </div>
  
            
//         <StripeCheckout 
//         stripeKey="pk_test_51LXad4FPWDZsVwKEyuk81AVQjOncjV1HGkZH2k5zH2alRHGGNCKWhZW954hNs3nD0pEiHte15nR5JKQSth0ipoev00z8oTiwHP"
//         token={props.handleToken}
//         amount={props.getTotalSum() *100}
//         itemName={props.menuItems.itemName}
//         billingAddress
//         />
        
//         </div>
//       //   ):(
//        //   <p style={{fontSize:"30px"}}>Your cart is empty</p>
//       //  )
   
      
//    )
//          }
        