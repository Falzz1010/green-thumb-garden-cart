
import { Plant } from '../store/cartSlice';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45.99,
    category: 'Large Plants',
    image: 'https://images.unsplash.com/photo-1611211232932-da3113c2b3e2?w=400&h=400&fit=crop',
    description: 'Beautiful Swiss cheese plant perfect for bright, indirect light.'
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 29.99,
    category: 'Low Maintenance',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=400&fit=crop',
    description: 'Hardy succulent that thrives in low light conditions.'
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: 89.99,
    category: 'Large Plants',
    image: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=400&h=400&fit=crop',
    description: 'Statement plant with large, glossy leaves.'
  },
  {
    id: '4',
    name: 'Pothos',
    price: 19.99,
    category: 'Trailing Plants',
    image: 'https://images.unsplash.com/photo-1586093248837-d3ac4aed9d0b?w=400&h=400&fit=crop',
    description: 'Easy-care trailing vine perfect for beginners.'
  },
  {
    id: '5',
    name: 'ZZ Plant',
    price: 34.99,
    category: 'Low Maintenance',
    image: 'https://images.unsplash.com/photo-1632207991959-9b99c2eb1d1a?w=400&h=400&fit=crop',
    description: 'Glossy-leafed plant that tolerates neglect beautifully.'
  },
  {
    id: '6',
    name: 'String of Hearts',
    price: 24.99,
    category: 'Trailing Plants',
    image: 'https://images.unsplash.com/photo-1596194583021-f0501ba80e17?w=400&h=400&fit=crop',
    description: 'Delicate trailing succulent with heart-shaped leaves.'
  }
];

export const categories = ['Large Plants', 'Low Maintenance', 'Trailing Plants'];
