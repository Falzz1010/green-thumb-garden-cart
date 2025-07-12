
import { useState } from 'react';
import { plants, categories } from '../data/plants';
import PlantCard from '../components/PlantCard';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Plant Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the perfect plants to transform your space into a green sanctuary
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setSelectedCategory('All')}
              variant={selectedCategory === 'All' ? 'default' : 'outline'}
              className={selectedCategory === 'All' ? 'bg-green-600 hover:bg-green-700' : 'border-green-300 text-green-700 hover:bg-green-50'}
            >
              All Plants
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category ? 'bg-green-600 hover:bg-green-700' : 'border-green-300 text-green-700 hover:bg-green-50'}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Plants by Category */}
        {categories.map(category => {
          const categoryPlants = plants.filter(plant => plant.category === category);
          const shouldShowCategory = selectedCategory === 'All' || selectedCategory === category;
          
          if (!shouldShowCategory) return null;

          return (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(selectedCategory === category ? filteredPlants : categoryPlants).map(plant => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            </div>
          );
        })}

        {selectedCategory !== 'All' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlants.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
