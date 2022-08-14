// import React from 'react';
// import MenuItems from '../Menu/MenuItems';

// export default function Basket(props) {
//   const { cartItems, onAdd, onRemove } = props;
//   const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
//   const taxPrice = itemsPrice * 0.14;
//   const shippingPrice = itemsPrice > 2000 ? 0 : 20;
//   const totalPrice = itemsPrice + taxPrice + shippingPrice;
//   return (
//     <aside className="block col-1">
//       <h2>Cart Items</h2>
//       <div>
//         {menuItems.length === 0 && <div>Cart is empty</div>}
//         {menuItems.map((menuItems) => (
//           <div key={menuItems.id} className="row">
//             <div className="col-2">{menuItems.name}</div>
//             <div className="col-2">
//               <button onClick={() => onRemove(menuItems)} className="remove">
//                 -
//               </button>{' '}
//               <button onClick={() => onAdd(item)} className="add">
//                 +
//               </button>
//             </div>

//             <div className="col-2 text-right">
//               {menuItems.qty} x ${menuItems.price.toFixed(2)}
//             </div>
//           </div>
//         ))}

//         {cartItems.length !== 0 && (
//           <>
//             <hr></hr>
//             <div className="row">
//               <div className="col-2">Items Price</div>
//               <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
//             </div>
//             <div className="row">
//               <div className="col-2">Tax Price</div>
//               <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
//             </div>
//             <div className="row">
//               <div className="col-2">Shipping Price</div>
//               <div className="col-1 text-right">
//                 ${shippingPrice.toFixed(2)}
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-2">
//                 <strong>Total Price</strong>
//               </div>
//               <div className="col-1 text-right">
//                 <strong>${totalPrice.toFixed(2)}</strong>
//               </div>
//             </div>
//             <hr />
//             <div className="row">
//               <button onClick={() => alert('Implement Checkout!')}>
//                 Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </aside>
//   );
// }