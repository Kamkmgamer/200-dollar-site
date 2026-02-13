import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Bella Italia',
  description: 'Learn about Bella Italia\'s story, our passion for authentic Italian cuisine, and meet our team.',
};

const galleryImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
  'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80',
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
];

const teamMembers = [
  { name: 'Marco Rossi', role: 'Executive Chef', years: '15+ years', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80' },
  { name: 'Sofia Bianchi', role: 'Pastry Chef', years: '10 years', image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&q=80' },
  { name: 'Antonio Ricci', role: 'Sommelier', years: '8 years', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80' },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <section className="bg-secondary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Our Story</h1>
          <p className="text-gray-300 text-lg">A passion for authentic Italian cuisine</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl text-secondary mb-6">Welcome to Bella Italia</h2>
              <p className="text-text-light mb-4 leading-relaxed">
                Bella Italia was founded in 2010 by Chef Marco Rossi, bringing authentic Italian recipes 
                passed down through generations. Our kitchen uses only the freshest locally-sourced 
                ingredients to create dishes that transport you straight to the Italian countryside.
              </p>
              <p className="text-text-light mb-4 leading-relaxed">
                Every dish we serve is crafted with love and dedication to tradition. From our handmade 
                pasta to our signature sauces, we believe in the power of simple, quality ingredients 
                prepared with care and expertise.
              </p>
              <p className="text-text-light leading-relaxed">
                Our cozy dining room provides the perfect setting for romantic dinners, family gatherings, 
                and celebrations of all kinds. We invite you to join us and experience the warmth of 
                Italian hospitality.
              </p>
            </div>
            <div className="h-80 lg:h-96 relative rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                alt="Restaurant interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-secondary mb-4">Our Mission</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>
          <p className="text-center text-text-light text-lg max-w-3xl mx-auto leading-relaxed">
            To provide an unforgettable dining experience through exceptional food, warm hospitality, 
            and a passion for Italian culinary traditions. We strive to make every guest feel like 
            family and every meal a celebration.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-secondary mb-4">Meet Our Team</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <h3 className="font-heading text-xl text-secondary">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-text-light text-sm">{member.years} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-secondary mb-4">Our Gallery</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, i) => (
              <div 
                key={i} 
                className="h-48 relative rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
