'use client';

import { ProductCard } from '../components/ProductCard';
import { Cart } from '../components/Cart';
import { CartProvider } from '../context/CartContext';
import { products } from '../data/products';

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Web3Bridge Shopping Cart
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Cart />
            </div>
          </div>
        </div>
      </main>
    </CartProvider>
  );
}
