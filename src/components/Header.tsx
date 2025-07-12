
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useAppSelector } from '../hooks/redux';

const Header = () => {
  const location = useLocation();
  const totalItems = useAppSelector(state => state.cart.totalItems);

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-green-700 hover:text-green-800 transition-colors">
            <Leaf className="h-8 w-8" />
            <span className="text-xl font-bold">GreenThumb</span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link 
              to="/products" 
              className={`font-medium transition-colors ${
                location.pathname === '/products' 
                  ? 'text-green-700 border-b-2 border-green-700 pb-1' 
                  : 'text-gray-600 hover:text-green-700'
              }`}
            >
              Katalog Tanaman
            </Link>
            
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-600 hover:text-green-700 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
