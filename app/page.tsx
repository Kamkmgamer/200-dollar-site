import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FeaturedDishes } from '@/components/FeaturedDishes';
import { Testimonials } from '@/components/Testimonials';
import { InfoSection } from '@/components/InfoSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <FeaturedDishes />
      <Testimonials />
      <InfoSection />
      <Footer />
    </>
  );
}
