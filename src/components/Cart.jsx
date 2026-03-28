import { useSelector } from 'react-redux';

export default function Cart() {
  const { items, total } = useSelector(state => state.cart);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {items.map(item => <li key={item.id}>{item.name} - ${item.price}</li>)}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}