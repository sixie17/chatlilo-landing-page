import React from 'react';

const avatars = [
  'https://picsum.photos/100/100?random=1',
  'https://picsum.photos/100/100?random=2',
  'https://picsum.photos/100/100?random=3',
];

const Testimonials = ({ translations }: { translations: any }) => {
  const testimonials = translations.cards as { quote: string; name: string; title: string; }[];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">{translations.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{translations.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light-bg p-8 rounded-xl border border-gray-100 flex flex-col">
              <div className="flex-grow">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-6 flex items-center">
                <img src={avatars[index]} alt={testimonial.name} className="h-14 w-14 rounded-full" />
                <div className="ms-4">
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;