
import { Plant } from '../store/cartSlice';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 145000,
    category: 'Tanaman Besar',
    image: 'https://images.unsplash.com/photo-1611211232932-da3113c2b3e2?w=400&h=400&fit=crop',
    description: 'Tanaman hias populer dengan daun berlubang unik, sempurna untuk ruang tamu modern.'
  },
  {
    id: '2',
    name: 'Sansevieria (Lidah Mertua)',
    price: 85000,
    category: 'Tanaman Mudah Perawatan',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&h=400&fit=crop',
    description: 'Tanaman pembersih udara yang tahan banting, cocok untuk pemula dan area minim cahaya.'
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: 225000,
    category: 'Tanaman Besar',
    image: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=400&h=400&fit=crop',
    description: 'Tanaman statement dengan daun besar mengkilap, menjadi pusat perhatian ruangan.'
  },
  {
    id: '4',
    name: 'Golden Pothos',
    price: 65000,
    category: 'Tanaman Merambat',
    image: 'https://images.unsplash.com/photo-1586093248837-d3ac4aed9d0b?w=400&h=400&fit=crop',
    description: 'Tanaman merambat cantik yang mudah tumbuh, ideal untuk hanging pot atau rak tinggi.'
  },
  {
    id: '5',
    name: 'ZZ Plant (Zamioculcas)',
    price: 95000,
    category: 'Tanaman Mudah Perawatan',
    image: 'https://images.unsplash.com/photo-1632207991959-9b99c2eb1d1a?w=400&h=400&fit=crop',
    description: 'Tanaman super tahan lama dengan daun mengkilap, hampir tidak butuh perawatan khusus.'
  },
  {
    id: '6',
    name: 'String of Hearts',
    price: 75000,
    category: 'Tanaman Merambat',
    image: 'https://images.unsplash.com/photo-1596194583021-f0501ba80e17?w=400&h=400&fit=crop',
    description: 'Tanaman sukulen unik berbentuk hati, cantik digantung atau dijadikan hiasan meja.'
  }
];

export const categories = ['Tanaman Besar', 'Tanaman Mudah Perawatan', 'Tanaman Merambat'];
