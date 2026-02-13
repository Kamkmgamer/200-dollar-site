import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Menu | Bella Italia',
  description: 'Explore our authentic Italian menu featuring fresh pasta, wood-fired pizza, and classic Italian dishes.',
};

const menuCategories = [
  {
    name: 'Antipasti',
    items: [
      { name: 'Bruschetta', description: 'Toasted ciabatta with fresh tomatoes, garlic, and basil', price: '$8' },
      { name: 'Calamari Fritti', description: 'Crispy fried calamari with marinara sauce', price: '$12' },
      { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze', price: '$10' },
      { name: 'Arancini', description: 'Crispy risotto balls stuffed with mozzarella', price: '$9' },
    ],
  },
  {
    name: 'Pasta',
    items: [
      { name: 'Spaghetti Carbonara', description: 'Classic Roman pasta with eggs, pecorino, and guanciale', price: '$16' },
      { name: 'Fettuccine Alfredo', description: 'Fresh fettuccine in creamy parmesan sauce', price: '$15' },
      { name: 'Lasagna Bolognese', description: 'Layered pasta with meat ragù and béchamel', price: '$18' },
      { name: 'Penne Arrabbiata', description: 'Spicy tomato sauce with garlic and chili', price: '$14' },
      { name: 'Gnocchi al Pesto', description: 'Potato gnocchi with fresh basil pesto', price: '$16' },
    ],
  },
  {
    name: 'Pizza',
    items: [
      { name: 'Margherita', description: 'San Marzano tomatoes, fresh mozzarella, basil', price: '$14' },
      { name: 'Quattro Formaggi', description: 'Four cheese blend: mozzarella, gorgonzola, fontina, parmesan', price: '$16' },
      { name: 'Diavola', description: 'Spicy salami, mozzarella, and chili', price: '$17' },
      { name: 'Prosciutto e Rucola', description: 'Prosciutto, arugula, and shaved parmesan', price: '$18' },
    ],
  },
  {
    name: 'Secondi',
    items: [
      { name: 'Chicken Parmesan', description: 'Breaded chicken breast with marinara and melted mozzarella', price: '$20' },
      { name: 'Grilled Salmon', description: 'Atlantic salmon with lemon butter and seasonal vegetables', price: '$24' },
      { name: 'Veal Marsala', description: 'Sautéed veal with marsala wine and mushrooms', price: '$26' },
      { name: 'Osso Buco', description: 'Braised veal shanks with gremolata', price: '$28' },
    ],
  },
  {
    name: 'Dolci',
    items: [
      { name: 'Tiramisu', description: 'Classic Italian dessert with mascarpone and espresso', price: '$9' },
      { name: 'Panna Cotta', description: 'Vanilla cream custard with berry compote', price: '$8' },
      { name: 'Cannoli', description: 'Crispy shells filled with sweet ricotta', price: '$7' },
      { name: 'Gelato', description: 'Assorted Italian ice cream flavors', price: '$6' },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Navigation />
      
      <section className="bg-secondary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Menu</h1>
          <p className="text-gray-300 text-lg">Authentic Italian cuisine made with love</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-secondary mb-6 pb-2 border-b-2 border-primary">
                {category.name}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start py-4 border-b border-border">
                    <div className="flex-1 pr-4">
                      <h3 className="font-heading text-lg text-secondary">{item.name}</h3>
                      <p className="text-text-light text-sm mt-1">{item.description}</p>
                    </div>
                    <span className="text-primary font-semibold text-lg">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
