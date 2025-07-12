
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Heart, Truck } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Leaf className="h-12 w-12 text-green-400 mr-3" />
            <h1 className="text-5xl md:text-7xl font-bold">GreenThumb</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your space with beautiful, hand-picked houseplants
          </p>
          <Link to="/products">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About GreenThumb</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                At GreenThumb, we believe that every home deserves the beauty and tranquility that plants bring. 
                Founded by plant enthusiasts, we've spent years curating a collection of the healthiest, 
                most beautiful houseplants to help you create your perfect indoor garden sanctuary. 
                Our mission is simple: to make plant parenthood accessible, enjoyable, and successful for everyone, 
                from beginners taking their first steps into the world of plants to seasoned collectors 
                looking for that next special addition to their green family.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hand-Selected Plants</h3>
              <p className="text-gray-600">
                Every plant is carefully chosen for its health, beauty, and ability to thrive in your home.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Care Guidance</h3>
              <p className="text-gray-600">
                Get detailed care instructions and ongoing support to help your plants flourish.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safe Delivery</h3>
              <p className="text-gray-600">
                Plants arrive healthy and happy with our specialized packaging and fast shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
