export default function Cancel() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Canceled</h1>
      <p className="text-gray-700 mb-6">
        Your payment was not completed. You can try again or continue shopping.
      </p>
      <a
        href="/cart"
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Back to Cart
      </a>
    </div>
  );
}