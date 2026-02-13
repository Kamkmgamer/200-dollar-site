import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      
      <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Authentic Italian Cuisine
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience the taste of Italy with our fresh, handmade pasta and traditional recipes passed down through generations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="bg-accent text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors"
            >
              Make Reservation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
