// pages/FullMenu.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  UtensilsCrossed,
  Star,
  Coffee,
  ArrowLeft,
  ShoppingBag,
  Heart,
  ChevronRight
} from 'lucide-react'

// Import your logo - CORRECTED PATH
import icebergLogo from '../../resources/assets/images/iceberg.png'

const IcebergLogo = ({ className = "h-10 w-10" }) => (
  <img 
    src={icebergLogo} 
    alt="Iceberg Logo"
    className={className}
    style={{ objectFit: 'contain' }}
  />
)

// Food Menu Data
const FOOD_MENU = {
  Appetizers: [
    { id: 1, name: 'Grilled Octopus', description: 'Mediterranean octopus, smoked paprika, lemon herb dressing', price: '₦45,000', popular: true },
    { id: 2, name: 'Oyster Selection', description: 'Fresh daily oysters, mignonette, lemon, cocktail sauce', price: '₦58,000', popular: false },
    { id: 3, name: 'Truffle Arancini', description: 'Crispy risotto balls, black truffle, parmesan cream', price: '₦32,000', popular: false },
    { id: 4, name: 'Yellowfin Tuna Tartare', description: 'Avocado, sesame, soy yuzu dressing, wonton crisps', price: '₦42,000', popular: true },
  ],
  Soups: [
    { id: 5, name: 'Lobster Bisque', description: 'Butter-poached lobster, cognac cream, caviar garnish', price: '₦38,000', popular: true },
    { id: 6, name: 'Mushroom Velouté', description: 'Wild mushrooms, truffle oil, crispy shallots', price: '₦28,000', popular: false },
    { id: 7, name: 'French Onion Soup', description: 'Caramelized onions, beef broth, gruyère crouton', price: '₦25,000', popular: false },
  ],
  Mains: [
    { id: 8, name: 'Wagyu Steak', description: 'Japanese A5 wagyu, truffle mash, red wine reduction', price: '₦145,000', popular: true },
    { id: 9, name: 'Truffle Risotto', description: 'Creamy arborio rice, wild mushrooms, black truffle', price: '₦55,000', popular: true },
    { id: 10, name: 'Pan-Seared Sea Bass', description: 'Mediterranean vegetables, lemon butter sauce', price: '₦68,000', popular: false },
    { id: 11, name: 'Duck Confit', description: 'Crispy duck leg, orange glaze, roasted vegetables', price: '₦72,000', popular: true },
    { id: 12, name: 'Lamb Rack', description: 'Herb-crusted lamb, mint pea puree, rosemary jus', price: '₦85,000', popular: false },
  ],
  Desserts: [
    { id: 13, name: 'Chocolate Soufflé', description: 'Dark chocolate, vanilla bean ice cream, raspberry coulis', price: '₦25,000', popular: true },
    { id: 14, name: 'Crème Brûlée', description: 'Classic vanilla bean custard, caramelized sugar top', price: '₦18,000', popular: false },
    { id: 15, name: 'Tiramisu', description: 'Ladyfingers, mascarpone, espresso, cocoa powder', price: '₦20,000', popular: true },
  ]
}

// Drinks Menu Data
const DRINKS_MENU = {
  'Signature Cocktails': [
    { id: 101, name: 'Premium Manhattan', description: 'Premium bourbon, sweet vermouth, bitters, cherry garnish', price: '₦15,000', popular: true },
    { id: 102, name: 'Arctic Mule', description: 'Premium vodka, ginger beer, lime, mint', price: '₦12,000', popular: true },
    { id: 103, name: 'Frozen Sunrise', description: 'Premium tequila, orange juice, grenadine, agave', price: '₦14,000', popular: false },
    { id: 104, name: 'Espresso Martini', description: 'Premium vodka, espresso, coffee liqueur, vanilla', price: '₦13,000', popular: false },
  ],
  Wine: [
    { id: 105, name: 'Premium Red Wine', description: 'Full-bodied red wine, notes of blackberry and spice', price: '₦95,000', popular: true },
    { id: 106, name: 'Premium White Wine', description: 'Elegant white wine, citrus and mineral notes', price: '₦78,000', popular: false },
    { id: 107, name: 'Super Tuscan Red', description: 'Italian red blend, rich and complex', price: '₦65,000', popular: true },
    { id: 108, name: 'Sauvignon Blanc', description: 'Crisp white wine, tropical fruit notes', price: '₦42,000', popular: false },
  ],
  Champagne: [
    { id: 109, name: 'Premium Vintage Champagne', description: 'Vintage champagne, notes of citrus and brioche', price: '₦120,000', popular: true },
    { id: 110, name: 'Signature Brut Champagne', description: 'Iconic champagne, elegant and refined', price: '₦65,000', popular: true },
    { id: 111, name: 'Imperial Brut', description: 'Fresh and fruity champagne', price: '₦55,000', popular: false },
  ],
  Beer: [
    { id: 112, name: 'Premium Lager', description: 'Crisp and refreshing imported lager', price: '₦4,000', popular: true },
    { id: 113, name: 'Wheat Beer', description: 'Belgian-style witbier with citrus notes', price: '₦5,000', popular: false },
    { id: 114, name: 'Premium Stout', description: 'Creamy Irish stout with coffee notes', price: '₦6,000', popular: false },
  ],
  'Non-Alcoholic': [
    { id: 115, name: 'Signature Mocktail', description: 'Fresh berries, mint, lime, soda', price: '₦6,000', popular: true },
    { id: 116, name: 'Fresh Juice Selection', description: 'Orange, apple, or tropical blend', price: '₦4,000', popular: false },
    { id: 117, name: 'Artisan Coffee', description: 'Espresso, cappuccino, or latte', price: '₦3,500', popular: true },
    { id: 118, name: 'Premium Tea', description: 'Assorted loose leaf teas', price: '₦3,000', popular: false },
  ]
}

// Navigation Component for Full Menu
const MenuNavigation = ({ onBack }: { onBack: () => void }) => {
  const [scrolled, setScrolled] = useState(false)

  useState(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, )

  return (
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
          <div className="flex items-center cursor-pointer" onClick={onBack}>
            <ArrowLeft className="h-5 w-5 text-gray-900 mr-2" />
            <IcebergLogo className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold text-gray-900">IceBerg</span>
          </div>
          <button 
            onClick={onBack}
            className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors text-sm"
          >
            Back to Home
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

// Main Full Menu Component
export default function FullMenu() {
  const [activeTab, setActiveTab] = useState('food')
  const [activeCategory, setActiveCategory] = useState('Appetizers')

  const goBack = () => {
    window.location.href = '/'
  }

  const foodCategories = Object.keys(FOOD_MENU)
  const drinkCategories = Object.keys(DRINKS_MENU)

  return (
    <div className="w-full min-h-screen bg-gray-50 pt-16">
      <MenuNavigation onBack={goBack} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Full Menu</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our complete selection of culinary masterpieces and premium beverages
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('food')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'food'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <UtensilsCrossed className="inline-block w-5 h-5 mr-2" />
            Food Menu
          </button>
          <button
            onClick={() => setActiveTab('drinks')}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              activeTab === 'drinks'
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Coffee className="inline-block w-5 h-5 mr-2" />
            Drinks Menu
          </button>
        </div>

        {/* Food Menu */}
        {activeTab === 'food' && (
          <div>
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {foodCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Table */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Item</th>
                    <th className="px-6 py-4 text-left">Description</th>
                    <th className="px-6 py-4 text-right">Price</th>
                    <th className="px-6 py-4 text-center">Popular</th>
                  </tr>
                </thead>
                <tbody>
                  {FOOD_MENU[activeCategory as keyof typeof FOOD_MENU].map((item, index) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 text-gray-600">{item.description}</td>
                      <td className="px-6 py-4 text-right font-semibold text-gray-900">{item.price}</td>
                      <td className="px-6 py-4 text-center">
                        {item.popular && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-auto" />}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Drinks Menu */}
        {activeTab === 'drinks' && (
          <div className="grid md:grid-cols-2 gap-8">
            {drinkCategories.map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="bg-gray-900 text-white px-6 py-4">
                  <h3 className="text-2xl font-semibold">{category}</h3>
                </div>
                <table className="w-full">
                  <tbody>
                    {DRINKS_MENU[category as keyof typeof DRINKS_MENU].map((item, index) => (
                      <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-gray-900 whitespace-nowrap">
                          {item.price}
                        </td>
                        <td className="px-6 py-4 text-center w-16">
                          {item.popular && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            ))}
          </div>
        )}

        {/* Order Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-12 py-4 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center gap-2 text-lg font-semibold">
            <ShoppingBag className="w-5 h-5" />
            Place Your Order
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}