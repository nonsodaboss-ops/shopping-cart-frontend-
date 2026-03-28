import { useEffect, useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://shopping-cart-backend-1sfq.onrender.com/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order._id} className="mb-4 border p-4 rounded">
              <p><strong>Order ID:</strong> {order.sessionId}</p>
                <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.name} — {item.quantity} × ${item.price}
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ${order.amountTotal} {order.currency.toUpperCase()}</p>
              <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
            
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}