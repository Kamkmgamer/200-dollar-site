import Link from 'next/link';
import Image from 'next/image';

const dishes = [
  {
    name: 'Spaghetti Carbonara',
    description: 'Classic Roman pasta with eggs, pecorino cheese, and guanciale',
    price: '$16',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80',
  },
  {
    name: 'Margherita Pizza',
    description: 'San Marzano tomatoes, fresh mozzarella, and basil',
    price: '$14',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
  },
  {
    name: 'Osso Buco',
    description: 'Braised veal shanks with gremolata and risotto',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  },
  {
    name: 'Tiramisu',
    description: 'Classic Italian dessert with mascarpone and espresso',
    price: '$9',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
  },
];

export function FeaturedDishes() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">
            Featured Dishes
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading text-xl text-secondary mb-2">{dish.name}</h3>
                <p className="text-text-light text-sm mb-3">{dish.description}</p>
                <p className="text-primary font-semibold text-lg">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
