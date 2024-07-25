// components/CartItem.js
export default function CartItem({ item, updateQuantity, removeItem }) {
    return (
      <div>
        <h2>{item.name}</h2>
        <p>Price: ${item.price}</p>
        <input 
          type="number" 
          value={item.quantity} 
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          min="1"
        />
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    );
  }