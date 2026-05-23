import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  UtensilsCrossed,
  Star,
  MapPin,
  Clock,
  X,
  Menu,
  Phone,
  Mail,
  Calendar,
  User,
  CheckCircle,
  ArrowRight,
  Heart,
  ChevronRight
} from 'lucide-react'

// Import your logo image - CORRECTED PATH
import icebergLogo from '../../resources/assets/images/iceberg.png'

// Iceberg Logo Component - Using your image
const IcebergLogo = ({ className = "h-10 w-10" }) => (
  <img 
    src={icebergLogo} 
    alt="Iceberg Logo"
    className={className}
    style={{ objectFit: 'contain' }}
  />
)

// Facebook Icon
const FacebookIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

// Instagram Icon
const InstagramIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

// Twitter Icon
const TwitterIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
)

// --- MOCK DATA with Naira currency ---
const DISHES = [
  {
    id: 1,
    name: 'Truffle Risotto',
    desc: 'Creamy arborio rice, wild mushrooms, black truffle, aged parmesan.',
    price: '₦55,000',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1000&auto=format&fit=crop',
    category: 'Mains',
    popular: true
  },
  {
    id: 2,
    name: 'Grilled Octopus',
    desc: 'Mediterranean octopus, smoked paprika, lemon herb dressing, charred vegetables.',
    price: '₦45,000',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1000&auto=format&fit=crop',
    category: 'Appetizers',
    popular: true
  },
  {
    id: 3,
    name: 'Wagyu Steak',
    desc: 'Japanese A5 wagyu, truffle mash, seasonal vegetables, red wine reduction.',
    price: '₦145,000',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a4f2e2?q=80&w=1000&auto=format&fit=crop',
    category: 'Mains',
    popular: false
  },
  {
    id: 4,
    name: 'Lobster Bisque',
    desc: 'Butter-poached lobster, cognac cream, fresh herbs, caviar garnish.',
    price: '₦38,000',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1000&auto=format&fit=crop',
    category: 'Soups',
    popular: false
  },
  {
    id: 5,
    name: 'Chocolate Soufflé',
    desc: 'Dark chocolate, vanilla bean ice cream, raspberry coulis.',
    price: '₦25,000',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop',
    category: 'Desserts',
    popular: true
  },
  {
    id: 6,
    name: 'Oyster Selection',
    desc: 'Fresh daily oysters, mignonette, lemon, cocktail sauce.',
    price: '₦58,000',
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1000&auto=format&fit=crop',
    category: 'Raw Bar',
    popular: false
  }
]

// Drinks Data
const DRINKS = [
  {
    id: 201,
    name: 'Premium Cocktail',
    desc: 'Premium spirits, fresh ingredients, expertly crafted.',
    price: '₦15,000',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=1000&auto=format&fit=crop',
    category: 'Cocktails',
    popular: true
  },
  {
    id: 202,
    name: 'Signature Mixed Drink',
    desc: 'Signature blend, premium vodka, ginger beer, fresh lime.',
    price: '₦12,000',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop',
    category: 'Cocktails',
    popular: true
  },
  {
    id: 203,
    name: 'Premium Red Wine',
    desc: 'Full-bodied red wine, notes of blackberry and spice.',
    price: '₦95,000',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1000&auto=format&fit=crop',
    category: 'Wine',
    popular: false
  },
  {
    id: 204,
    name: 'Premium Champagne',
    desc: 'Vintage champagne, elegant bubbles with citrus and brioche.',
    price: '₦120,000',
    image: 'https://images.unsplash.com/photo-1569516441202-550678343dd9?q=80&w=1000&auto=format&fit=crop',
    category: 'Champagne',
    popular: true
  },
  {
    id: 205,
    name: 'Premium Beer',
    desc: 'Crisp and refreshing imported beer.',
    price: '₦4,000',
    image: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?q=80&w=1000&auto=format&fit=crop',
    category: 'Beer',
    popular: false
  },
  {
    id: 206,
    name: 'Signature Mocktail',
    desc: 'Fresh berries, mint, lime, and soda water.',
    price: '₦6,000',
    image: 'https://images.unsplash.com/photo-1546171753-97d9a0a34b1a?q=80&w=1000&auto=format&fit=crop',
    category: 'Non-Alcoholic',
    popular: false
  }
]

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Jennifer Parker',
    role: 'Food Critic, Eater Magazine',
    text: 'Exceptional dining experience from start to finish. The attention to detail and quality of ingredients is unmatched.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    date: 'March 2024'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Verified Google Guide',
    text: 'One of the best meals I\'ve had this year. The service was impeccable and the atmosphere was perfect.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    date: 'February 2024'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Yelp Elite',
    text: 'Incredible culinary journey. Every dish was beautifully presented and bursting with flavor.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    date: 'January 2024'
  }
]

// --- ROTATING PLATE COMPONENT ---
const RotatingPlate = ({ image, isSpinning = true }: { image: string; isSpinning?: boolean }) => {
  return (
    <motion.div
      className="relative w-full h-full"
      animate={isSpinning ? { rotate: 360 } : {}}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <div className="absolute inset-0 rounded-full shadow-xl overflow-hidden">
        <img 
          src={image} 
          alt="Dish" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="absolute inset-0 rounded-full ring-2 ring-white/30 ring-offset-2 ring-offset-transparent" />
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  )
}

// --- NAVIGATION ---
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const goToFullMenu = () => {
    window.location.href = '/full-menu'
  }

  const navLinks = ['Home', 'Menu', 'Drinks', 'About', 'Reservations', 'Contact']

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <IcebergLogo className="h-10 w-10" />
              <span className="ml-2 text-xl font-semibold text-gray-900">IceBerg</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  {link}
                </button>
              ))}
              <button 
                onClick={goToFullMenu}
                className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Full Menu
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 bg-white shadow-lg z-40 md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium"
                >
                  {link}
                </button>
              ))}
              <button 
                onClick={() => {
                  goToFullMenu()
                  setMobileMenuOpen(false)
                }}
                className="w-full bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Full Menu
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// --- HERO SECTION ---
const Hero = () => {
  const spinningDish = DISHES[0]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">EST. 2024</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mt-4 mb-6">
              Fine Dining
              <span className="block text-gray-600">Reimagined</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience culinary excellence in an atmosphere of refined elegance. 
              Our Michelin-starred chefs create unforgettable dining experiences using the finest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('reservations')}
                className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
              >
                Reserve a Table
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
              >
                View Menu
              </button>
            </div>
            
            <div className="flex gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500">Happy Guests Daily</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-500">Award Winning Dishes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">8</div>
                <div className="text-sm text-gray-500">Years of Excellence</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              <RotatingPlate image={spinningDish.image} />
              <div className="absolute -inset-4 rounded-full border border-gray-200" />
              <div className="absolute -inset-8 rounded-full border border-gray-100" />
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 font-medium">{spinningDish.name}</p>
              <p className="text-gray-400 text-sm">Signature Dish</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// --- MENU SECTION ---
const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', ...new Set(DISHES.map(dish => dish.category))]

  const filteredDishes = selectedCategory === 'All' 
    ? DISHES 
    : DISHES.filter(dish => dish.category === selectedCategory)

  const goToFullMenu = () => {
    window.location.href = '/full-menu'
  }

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Culinary Masterpieces
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each dish is carefully crafted to deliver an unforgettable gastronomic experience
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {dish.popular && (
                  <span className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{dish.name}</h3>
                  <span className="text-lg font-bold text-gray-900">{dish.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{dish.desc}</p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
                    Order Now
                  </button>
                  <button className="p-2 border border-gray-300 rounded-full hover:border-gray-900 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={goToFullMenu}
            className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors inline-flex items-center gap-2 font-semibold"
          >
            View Full Menu
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

// --- DRINKS SECTION ---
const DrinksSection = () => {
  return (
    <section id="drinks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">Premium Beverages</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Signature Drinks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated selection of fine wines, cocktails, and premium spirits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DRINKS.map((drink, index) => (
            <motion.div
              key={drink.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={drink.image} 
                  alt={drink.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {drink.popular && (
                  <span className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{drink.name}</h3>
                  <span className="text-lg font-bold text-gray-900">{drink.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{drink.desc}</p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
                    Order Now
                  </button>
                  <button className="p-2 border border-gray-300 rounded-full hover:border-gray-900 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- ABOUT SECTION ---
const AboutSection = () => {
  const spinningDish = DISHES[3]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
              A Legacy of
              <span className="block">Culinary Excellence</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2024, Iceberg has quickly become a destination for food lovers seeking 
                extraordinary dining experiences. Our commitment to quality, innovation, and 
                exceptional service has earned us recognition from critics and guests alike.
              </p>
              <p>
                Led by Executive Chef Marcus Rodriguez, our team combines classical techniques 
                with modern creativity to produce dishes that are both beautiful and delicious.
              </p>
              <p>
                We source ingredients from local farms and global purveyors to ensure every 
                plate meets our exacting standards.
              </p>
            </div>
            <div className="flex gap-6 mt-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-900">Fresh Ingredients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-900">Award Winning Chefs</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-900">Private Events</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-gray-900">Wine Cellar</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <RotatingPlate image={spinningDish.image} isSpinning={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// --- RESERVATION SECTION ---
const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="reservations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">Reservations</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Secure Your Table
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book your dining experience with us. We look forward to serving you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Reservation Confirmed!</h3>
              <p className="text-gray-600">We'll send a confirmation email shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                  <textarea
                    name="specialRequests"
                    rows={3}
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Dietary restrictions, allergies, special occasions..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Confirm Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// --- TESTIMONIALS SECTION ---
const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- CONTACT SECTION ---
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gray-500 uppercase tracking-wider text-sm font-medium">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <MapPin className="w-10 h-10 text-gray-900 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">
              123 NTA road<br />
              Asaba, Delta State, Nigeria
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-10 h-10 text-gray-900 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">
              07079621137<br />
              Mon-Sun: 11AM - 11PM
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-10 h-10 text-gray-900 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">
              info@icebergrestaurant.com<br />
              reservations@icebergrestaurant.com
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
            <FacebookIcon />
          </a>
          <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

// --- FOOTER ---
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goToFullMenu = () => {
    window.location.href = '/full-menu'
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => scrollToSection('home')}>
              <IcebergLogo className="h-6 w-6" />
              <span className="ml-2 text-xl font-semibold">IceBerg</span>
            </div>
            <p className="text-gray-400 text-sm">
              Fine dining reimagined. Experience culinary excellence at its finest.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('menu')} className="hover:text-white transition-colors">Menu</button></li>
              <li><button onClick={() => scrollToSection('drinks')} className="hover:text-white transition-colors">Drinks</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              <li><button onClick={goToFullMenu} className="hover:text-white transition-colors">Full Menu</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Thursday: 11AM - 10PM</li>
              <li>Friday - Saturday: 11AM - 11PM</li>
              <li>Sunday: 12PM - 9PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-3">Get exclusive offers and updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400"
              />
              <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Iceberg Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// --- MAIN COMPONENT ---
export default function IcebergLanding() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navigation />
      <Hero />
      <MenuSection />
      <DrinksSection />
      <AboutSection />
      <ReservationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}