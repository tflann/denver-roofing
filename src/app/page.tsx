import Hero from '@/components/home/Hero';
import ReviewWidget from '@/components/home/ReviewWidget';
import ContactForm from '@/components/contact/ContactForm';
import GoogleMap from '@/components/home/GoogleMap';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Expert roofing solutions tailored to Colorado's unique climate challenges
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary hover:border-primary transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">Hail Damage Repair</h3>
              <p className="text-gray-600">
                Expert repair services for hail damage, a common issue in Colorado. We work with all insurance companies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary hover:border-primary transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">Roof Replacement</h3>
              <p className="text-gray-600">
                Complete roof replacement with materials designed to withstand Colorado's extreme weather conditions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-secondary hover:border-primary transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">Maintenance</h3>
              <p className="text-gray-600">
                Regular maintenance and inspection services to protect your roof from Denver's intense sun and winter storms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">Why Choose Us</h2>
          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-left text-gray-600">
              With over two decades of experience serving the Denver area, we've built our reputation on exceptional craftsmanship and unwavering commitment to quality. Our team of certified roofing professionals brings extensive expertise in handling Colorado's unique weather challenges, from intense sun exposure to severe hailstorms and heavy snowfall.
            </p>
            <p className="text-left text-gray-600">
              We take pride in our meticulous attention to detail and use only premium materials that are specifically designed for Colorado's climate. Our comprehensive approach includes thorough inspections, transparent communication, and dedicated customer service throughout every project. As a locally owned and operated business, we understand the importance of building lasting relationships with our community and standing behind our work with industry-leading warranties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">20+</div>
              <p className="text-gray-600">Years in Denver</p>
            </div>
            
            <div className="text-center group">
              <div className="text-4xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">1000+</div>
              <p className="text-gray-600">Local Projects</p>
            </div>
            
            <div className="text-center group">
              <div className="text-4xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">100%</div>
              <p className="text-gray-600">Satisfaction Guaranteed</p>
            </div>
            
            <div className="text-center group">
              <div className="text-4xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">24/7</div>
              <p className="text-gray-600">Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-2">A+</div>
              <p className="text-gray-200">BBB Rating</p>
            </div>
            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-2">5.0</div>
              <p className="text-gray-200">Google Rating</p>
            </div>
            <div className="text-center">
              <div className="text-accent text-4xl font-bold mb-2">2000+</div>
              <p className="text-gray-200">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      <ReviewWidget />
      <ContactForm />
      <section className="w-full">
        <GoogleMap />
      </section>
    </>
  );
} 