"use client"
import { useState } from 'react';
import Link from 'next/link';

const CartPage = () => {
  // Example cart items, replace with your dynamic data
  const initialCartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 2 },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border-b border-gray-300">
              <div className="flex items-center">
                <img
                  src={`/images/${item.id}.jpg`} // replace with your image path
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  className="w-16 p-2 border rounded"
                />
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center p-4 border-t border-gray-300 mt-4">
            <span className="text-lg font-semibold">Total: ${getTotalPrice()}</span>
            <Link href="/checkout">
              <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Proceed to Checkout
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
