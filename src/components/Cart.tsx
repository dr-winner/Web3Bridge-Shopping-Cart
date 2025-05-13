import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, applyCoupon, getTotal } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');

  const handleCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');

    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }

    if (cart.items.length === 0) {
      setCouponError('Add items to cart before applying coupon');
      return;
    }

    const isValid = applyCoupon(couponCode);
    if (!isValid) {
      setCouponError('Invalid coupon code');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      
      {cart.items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <div className="relative h-20 w-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <form onSubmit={handleCouponSubmit} className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 px-4 py-2 border rounded"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
              {couponError && (
                <p className="text-red-600 text-sm mt-1">{couponError}</p>
              )}
              {cart.coupon && (
                <p className="text-green-600 text-sm mt-1">
                  Coupon applied: {cart.coupon} (10% off)
                </p>
              )}
            </form>

            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 