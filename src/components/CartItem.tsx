
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useAppDispatch } from '../hooks/redux';
import { increaseQuantity, decreaseQuantity, removeFromCart, CartItem as CartItemType } from '../store/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <p className="text-gray-600">{formatPrice(item.price)} per tanaman</p>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            onClick={handleDecrease}
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 border-green-300 hover:bg-green-50"
          >
            <Minus className="h-4 w-4" />
          </Button>
          
          <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
          
          <Button
            onClick={handleIncrease}
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 border-green-300 hover:bg-green-50"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-right">
          <p className="text-lg font-bold text-green-700">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>

        <Button
          onClick={handleRemove}
          variant="ghost"
          size="sm"
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default CartItem;
