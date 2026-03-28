import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-7 text-white flex gap-6 justify-between items-center font-semibold text-xl">
      <div className="cart-header">🛒 Shopping Cart</div>
      <div className="flex gap-4">
      <Link to="/" className="hover:text-yellow-300">
        Home
      </Link>
      <Link to="/cart" className="hover:text-yellow-300">
        Cart
      </Link>
      <Link to="/checkout" className="hover:text-yellow-300">
        Checkout
      </Link>
      <Link to="orders" className="hover:text-yellow-300">
        Orders
      </Link>
      </div>
    </nav>
  );
}
