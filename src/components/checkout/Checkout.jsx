//import { useState } from "react";
import CartItem from "./CartItem";

const Checkout = () => {
  const cartItems = [
    { id: 1, name: "Item 1", quantity: 2, price: 10 },
    { id: 2, name: "Item 2", quantity: 1, price: 15 },
  ];

  // const [itemsInCart, setItemsInCart] = useState([]);

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="flex min-h-screen bg-neutral-100">
      <div className="m-auto max-w-lg w-full">
        <div className="bg-white p-8 rounded-xl shadow-lg shadow-zinc-300">
          <h2 className="text-3xl font-inter mb-6 text-gray-700 text-center">
            My Cart
          </h2>

          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-secondary">
              Subtotal: ${calculateSubtotal()}
            </h2>
            <button className="bg-primary text-white py-2 px-4 mt-4 rounded hover:bg-opacity-90">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
