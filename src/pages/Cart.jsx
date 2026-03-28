import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../features/cart/cartSlice';

export default function Cart() {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul className="divide-y divide-gray-200">
            {items.map((item, index) => (
              <li key={`${item.id}-${index}`} className="flex justify-between items-center py-3">
                <span>{item.name} - ${item.price}</span>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold">Total: ${total}</p>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>

  );
}