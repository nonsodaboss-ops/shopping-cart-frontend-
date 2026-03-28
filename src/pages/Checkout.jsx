import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51TFcPgJJo9Uo018P0pwLSdafgoYZcfLsTFfLjRWFm3JFWrY5tZFmsbzqJNAz2QwEWASMiSXNX8KpvzidWtl05WlP00wptfBOvG");

export default function Checkout() {
  const { items, total } = useSelector((state) => state.cart);

  const handlePayment = async () => {
    const response = await fetch("https://shopping-cart-backend-1sfq.onrender.com/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });
    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error("No checkout URL returned:", data);
    }
  };


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">
          Your cart is empty. Add items before checkout.
        </p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-400 mb-4">
            Order Summary
          </h2>
          <ul className="divide-y divide-gray-200 mb-4">
            {items.map((item, index) => (
              <li key={`${item.id}-${index}`} className="flex justify-between py-2">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg font-bold">${total}</p>
          </div>
          <button
            onClick={handlePayment}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}
