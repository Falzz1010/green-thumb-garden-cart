
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useAppSelector } from '../hooks/redux';
import CartItem from '../components/CartItem';
import Header from '../components/Header';

const Cart = () => {
  const { items, totalItems, totalCost } = useAppSelector(state => state.cart);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some beautiful plants to get started!</p>
            <Link to="/products">
              <Button className="bg-green-600 hover:bg-green-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">
            {totalItems} {totalItems === 1 ? 'plant' : 'plants'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items ({totalItems})</span>
                  <span className="font-semibold">${totalCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-green-700">${totalCost.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Checkout - Coming Soon
                </Button>
                <Link to="/products" className="block">
                  <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
