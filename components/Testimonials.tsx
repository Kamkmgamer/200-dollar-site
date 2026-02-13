const testimonials = [
  {
    text: "The best Italian food outside of Italy! The pasta is made fresh daily and you can taste the difference.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    text: "Our go-to date night spot. Romantic atmosphere and incredible wine selection.",
    author: "James & Lisa K.",
    rating: 5,
  },
  {
    text: "The lasagna is to die for! Friendly staff and cozy ambiance. Highly recommend!",
    author: "Michael R.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">
            What Our Guests Say
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-light mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="font-semibold text-secondary">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
