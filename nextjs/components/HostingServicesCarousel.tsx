import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HostingServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 2,
      image: '/hosting-services-designs/2.png',
      alt: 'Hosting Services Slide 2'
    },
    {
      id: 3,
      image: '/hosting-services-designs/3.png',
      alt: 'Hosting Services Slide 3'
    },
    {
      id: 4,
      image: '/hosting-services-designs/4.png',
      alt: 'Hosting Services Slide 4'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our WordPress Builds
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our comprehensive hosting solutions designed for your business needs
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px]">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="object-contain"
                      priority={slide.id === 1}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">
              {currentSlide + 1} of {slides.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingServicesCarousel;
