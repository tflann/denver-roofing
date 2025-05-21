'use client';

import { useState } from 'react';
import { FaStar, FaGoogle, FaYelp, FaAngi } from 'react-icons/fa';

interface Review {
  id: string;
  platform: 'google' | 'yelp' | 'angi';
  rating: number;
  text: string;
  author: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: '1',
    platform: 'google',
    rating: 5,
    text: 'Excellent service! The team was professional and completed the work quickly.',
    author: 'John Smith',
    date: '2024-02-15',
  },
  {
    id: '2',
    platform: 'yelp',
    rating: 5,
    text: 'Very impressed with their attention to detail and communication.',
    author: 'Sarah Johnson',
    date: '2024-02-10',
  },
  {
    id: '3',
    platform: 'angi',
    rating: 5,
    text: 'Great experience from start to finish. Highly recommended!',
    author: 'Mike Wilson',
    date: '2024-02-05',
  },
];

const ReviewWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReview = reviews[currentIndex];

  const getPlatformIcon = (platform: Review['platform']) => {
    switch (platform) {
      case 'google':
        return <FaGoogle className="text-blue-600" />;
      case 'yelp':
        return <FaYelp className="text-red-600" />;
      case 'angi':
        return <FaAngi className="text-green-600" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              {getPlatformIcon(currentReview.platform)}
              <div className="ml-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < currentReview.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  {currentReview.author} • {new Date(currentReview.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-800 mb-6">{currentReview.text}</p>
            
            <div className="flex justify-center space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewWidget; 