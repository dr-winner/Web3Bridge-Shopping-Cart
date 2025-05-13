import { render, act } from '@testing-library/react';
import { CartProvider, useCart } from '../context/CartContext';
import { products } from '../data/products';

// Mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Test component that uses the cart context
function TestComponent() {
  const { cart, addToCart, removeFromCart, updateQuantity, applyCoupon, getTotal } = useCart();
  return (
    <div>
      <button onClick={() => addToCart(products[0])}>Add to Cart</button>
      <button onClick={() => removeFromCart(products[0].id)}>Remove from Cart</button>
      <button onClick={() => updateQuantity(products[0].id, 2)}>Update Quantity</button>
      <button onClick={() => applyCoupon('WEB3BRIDGECOHORTx')}>Apply Coupon</button>
      <div data-testid="cart-items">{cart.items.length}</div>
      <div data-testid="cart-total">{getTotal()}</div>
      <div data-testid="cart-coupon">{cart.coupon || 'none'}</div>
    </div>
  );
}

describe('CartContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add items to cart', () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    act(() => {
      getByText('Add to Cart').click();
    });

    expect(getByTestId('cart-items').textContent).toBe('1');
  });

  it('should remove items from cart', () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    act(() => {
      getByText('Add to Cart').click();
      getByText('Remove from Cart').click();
    });

    expect(getByTestId('cart-items').textContent).toBe('0');
  });

  it('should update item quantity', () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    act(() => {
      getByText('Add to Cart').click();
      getByText('Update Quantity').click();
    });

    expect(getByTestId('cart-total').textContent).toBe(
      (products[0].price * 2).toString()
    );
  });

  it('should apply coupon code correctly', () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    act(() => {
      getByText('Add to Cart').click();
      getByText('Apply Coupon').click();
    });

    expect(getByTestId('cart-coupon').textContent).toBe('WEB3BRIDGECOHORTx');
    expect(getByTestId('cart-total').textContent).toBe(
      (products[0].price * 0.9).toString()
    );
  });

  it('should persist cart data in localStorage', () => {
    const { getByText } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    act(() => {
      getByText('Add to Cart').click();
    });

    const savedCart = JSON.parse(localStorage.getItem('cart') || '{}');
    expect(savedCart.items.length).toBe(1);
  });
}); 