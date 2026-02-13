import Link from 'next/link';

export function InfoSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl mb-2">Hours</h3>
            <p className="text-gray-300">Mon-Thu: 11am - 9pm</p>
            <p className="text-gray-300">Fri-Sat: 11am - 10pm</p>
            <p className="text-gray-300">Sun: 12pm - 8pm</p>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl mb-2">Location</h3>
            <p className="text-gray-300">123 Main Street</p>
            <p className="text-gray-300">Anytown, USA 12345</p>
            <Link href="/contact" className="text-accent hover:underline">
              Get Directions
            </Link>
          </div>

          <div>
            <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl mb-2">Contact</h3>
            <p className="text-gray-300">(555) 123-4567</p>
            <p className="text-gray-300">info@bellaitalia.example.com</p>
            <Link href="/contact" className="text-accent hover:underline">
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
