import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { useState } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState("") ;

  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 150 },
    { id: 3, name: "Smartphone", price: 800 },
    { name: "T-Shirt", price: 20 },
    { name: "Cap", price: 15 },
    { name: "Backpack", price: 40 },
    { name: "Sunglasses", price: 25 },
    { name: "Sneakers", price: 60 },
    { name: "Sunglasses", price: 25 },
    { name: "Hoodie", price: 35 },
    { name: "Jeans", price: 50 },
    { name: "Watch", price: 120 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAlert(`${product.name} added to cart!`);
    setTimeout(() => setAlert(""), 3000);
  }

  return (
    <div className="p-6">
      <div>{alert && <div className="toast">{alert}</div>}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
