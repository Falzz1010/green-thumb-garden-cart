
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
            Tanaman hias pilihan terbaik untuk rumah impian Anda
          </p>
          <Link to="/products">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 group"
            >
              Mulai Belanja
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang GreenThumb</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                GreenThumb lahir dari kecintaan mendalam terhadap tanaman hias dan keinginan untuk berbagi kebahagiaan 
                bercocok tanam dengan setiap orang. Kami memulai bisnis ini dari rumah kecil di Jakarta tahun 2019, 
                dengan koleksi hanya 20 tanaman. Sekarang, kami bangga melayani ribuan pecinta tanaman di seluruh Indonesia.
                <br /><br />
                Setiap tanaman yang kami jual telah melalui proses seleksi ketat - dari bibit berkualitas tinggi, 
                perawatan ekstra selama masa pertumbuhan, hingga pengemasan khusus yang memastikan tanaman sampai 
                di tangan Anda dalam kondisi prima. Tim kami terdiri dari para ahli botani dan pecinta tanaman 
                berpengalaman yang siap membantu perjalanan berkebun Anda.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tanaman Pilihan Terbaik</h3>
              <p className="text-gray-600">
                Setiap tanaman dipilih langsung oleh tim ahli kami untuk memastikan kualitas dan kesehatan terbaik.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Panduan Perawatan Lengkap</h3>
              <p className="text-gray-600">
                Dapatkan tips perawatan detail dan konsultasi gratis dari para ahli tanaman berpengalaman kami.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pengiriman Aman & Cepat</h3>
              <p className="text-gray-600">
                Tanaman dikemas dengan sistem khusus anti-rusak dan dikirim dengan ekspedisi terpercaya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
