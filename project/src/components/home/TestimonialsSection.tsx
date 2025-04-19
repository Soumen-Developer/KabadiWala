import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Soumen Mondal',
    role: 'Homeowner, Mumbai',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    quote: 'KabadiWala made disposing of my old electronics so easy. Their team was professional, punctual, and paid a fair price for my e-waste. Highly recommend!',
    rating: 5
  },
  {
    id: 2,
    name: 'Druv Singh',
    role: 'Business Owner, Delhi',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    quote: 'We\'ve been using KabadiWala for our office waste management for over 2 years. Their regular service and commitment to recycling align perfectly with our sustainability goals.',
    rating: 5
  },
  {
    id: 3,
    name: 'Vishu Gupta',
    role: 'Apartment Manager, Bangalore',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    quote: 'Managing waste for a 200-unit apartment complex was challenging until we partnered with KabadiWala. Their efficient system and responsive team have made a huge difference.',
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    // Auto-advance testimonials
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset animation state after transition
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-card p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-16 w-16 rounded-full object-cover border-2 border-primary-100" 
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-700 text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-primary-600 transition-colors focus:outline-none"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-primary-600 transition-colors focus:outline-none"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-8 bg-primary-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;