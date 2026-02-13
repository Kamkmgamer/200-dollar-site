import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us | Bella Italia',
  description: 'Contact Bella Italia for reservations, inquiries, or feedback. Find our location and hours.',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      
      <section className="bg-secondary text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg">We&apos;d love to hear from you</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl text-secondary mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="font-heading text-2xl text-secondary mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Address</h3>
                  <p className="text-text-light">123 Main Street</p>
                  <p className="text-text-light">Anytown, USA 12345</p>
                </div>

                <div>
                  <h3 className="font-semibold text-secondary mb-2">Phone</h3>
                  <p className="text-text-light">(555) 123-4567</p>
                </div>

                <div>
                  <h3 className="font-semibold text-secondary mb-2">Email</h3>
                  <p className="text-text-light">info@bellaitalia.example.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-secondary mb-2">Hours</h3>
                  <div className="text-text-light space-y-1">
                    <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
                    <p>Sunday: 12:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-secondary mb-4">Find Us</h3>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Map Embed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
