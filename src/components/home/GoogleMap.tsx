'use client';

import { useEffect, useRef, useState } from 'react';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    try {
      if (!window.google) {
        setError('Google Maps API not loaded');
        return;
      }

      const denver = { lat: 39.7392, lng: -104.9903 };
      
      const map = new google.maps.Map(mapRef.current, {
        center: denver,
        zoom: 12,
        disableDefaultUI: true,
        zoomControl: true
      });
    } catch (err) {
      console.error('Error loading Google Map:', err);
      setError('Failed to load Google Map');
    }
  }, []);

  return (
    <div className="w-full h-[400px] relative">
      {error ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <div ref={mapRef} className="w-full h-full" />
      )}
    </div>
  );
};

export default GoogleMap; 