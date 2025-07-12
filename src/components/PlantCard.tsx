
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addToCart, Plant } from '../store/cartSlice';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={plant.image} 
            alt={plant.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-green-100 text-green-800 hover:bg-green-100">
            {plant.category}
          </Badge>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{plant.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{plant.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-700">${plant.price}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart}
          disabled={isInCart}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlantCard;
