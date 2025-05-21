'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/denver-roofing-hero.jpg"
          alt="Denver Roofing"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-4xl md:text-6xl font-bold mb-6">
          Denver&apos;s Trusted Roofing Experts
        </p>
        <h1 className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Transform your roof with the best residential and commercial roofers in Denver.
        </h1>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <p className="font-semibold">A+ Rating</p>
              <p className="text-sm">BBB Accredited</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Licensed & Insured</p>
              <p className="text-sm">in Colorado</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">24/7 Service</p>
              <p className="text-sm">Emergency Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 