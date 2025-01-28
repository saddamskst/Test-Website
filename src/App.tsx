import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Battery, 
  Shield, 
  Monitor, 
  Facebook, 
  Twitter, 
  Instagram, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Laptop
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white">
              <Laptop className="w-6 h-6 animate-float" />
              <span className="font-bold text-xl">TechLaptops</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">Home</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">Products</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">Features</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">About</a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-300">Contact</a>
              <button className="glass-dark text-white px-6 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                Shop Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 glass">
              <a href="#" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300">Home</a>
              <a href="#" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300">Products</a>
              <a href="#" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300">Features</a>
              <a href="#" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300">About</a>
              <a href="#" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-300">Contact</a>
              <button className="w-full mt-2 glass-dark text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Crafting Tomorrow's Technology
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Premium laptops designed for the future
          </p>
          <button className="glass-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in inline-flex items-center gap-2" style={{ animationDelay: '0.4s' }}>
            Explore Our Range <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white animate-fade-in">Featured Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "ProBook Elite",
              image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80",
              price: "$1,299",
              description: "Perfect for professionals"
            },
            {
              name: "Creator Pro",
              image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80",
              price: "$1,799",
              description: "Unleash your creativity"
            },
            {
              name: "Ultra Light",
              image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
              price: "$999",
              description: "Mobility without compromise"
            }
          ].map((product, index) => (
            <div key={index} className="glass-card rounded-lg overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <button className="glass-dark text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="glass py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white animate-fade-in">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Cpu className="w-8 h-8" />, title: "Latest Technology" },
              { icon: <Battery className="w-8 h-8" />, title: "All-Day Battery" },
              { icon: <Shield className="w-8 h-8" />, title: "Built to Last" },
              { icon: <Monitor className="w-8 h-8" />, title: "Crystal Display" }
            ].map((feature, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="glass-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white transform hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">
                  Experience excellence in every detail of our carefully crafted laptops.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="glass-dark text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4" /> +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4" /> info@techlaptops.com
              </p>
              <p className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4" /> 123 Tech Street, CA 94043
              </p>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Warranty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Returns Policy</a></li>
            </ul>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2024 Tech Laptops. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;