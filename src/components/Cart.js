// // components/Cart.js

// import React from 'react';

// const Cart = ({ cartItems, removeFromCart }) => {
//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul>
//           {cartItems.map(item => (
//             <li key={item.id} className="cart-item">
//               <img src={item.image} alt={item.title} />
//               <div className="cart-item-info">
//                 <div className="cart-item-title">{item.title}</div>
//                 <div className="cart-item-price">${item.price}</div>
//                 <div className="cart-item-quantity">Quantity: {item.quantity}</div>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;
