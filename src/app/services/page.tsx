import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-cormorant font-bold mb-6 text-brand-black">Our Services</h1>
          <p className="text-xl text-brand-black max-w-3xl mx-auto font-montserrat">
            Enhance Your Hospitality Expertise With Our Comprehensive Services
          </p>
        </div>

        {/* Services Section */}
        <div className="space-y-24">
          {/* Operations Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/photos/operations.jpg"
                alt="Hotel Lobby Operations"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-cormorant font-bold mb-6 text-brand-black">Operations Management</h2>
              <p className="text-brand-black font-montserrat mb-6">
                Efficient operations management is the backbone of every successful hospitality venture. We specialize in overseeing day-to-day operations with precision, ensuring seamless workflow, optimizing resources, and maintaining high standards of service delivery. Our expert team handles everything from staffing to logistics, enabling you to focus on strategic growth and guest satisfaction.
              </p>
              <Link href="/contact" className="inline-block bg-brand-gold text-white py-2 px-4 rounded-md font-montserrat font-semibold hover:bg-brand-black hover:text-brand-gold transition-colors">
                Learn More
              </Link>
            </div>
          </div>

          {/* Revenue Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/photos/check in.jpg"
                alt="Hotel Reception Desk"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-cormorant font-bold mb-6 text-brand-black">Revenue Management</h2>
              <p className="text-brand-black font-montserrat mb-6">
                Maximize your revenue potential with our strategic revenue management services. We employ data-driven analysis, market trends, and pricing strategies to optimize room rates, occupancy levels, and overall revenue streams. Our proactive approach ensures that you achieve the right balance between profitability and guest value, driving sustainable financial growth for your property.
              </p>
              <Link href="/contact" className="inline-block bg-brand-gold text-white py-2 px-4 rounded-md font-montserrat font-semibold hover:bg-brand-black hover:text-brand-gold transition-colors">
                Learn More
              </Link>
            </div>
          </div>

          {/* Renovations and Conversion Management */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/photos/room square img.jpg"
                alt="Hotel Room Interior"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-cormorant font-bold mb-6 text-brand-black">Renovations and Conversion Management</h2>
              <p className="text-brand-black font-montserrat mb-6">
                Transform your hospitality property with our comprehensive renovations and conversion management services. Whether you&apos;re upgrading existing facilities or converting spaces for new purposes, our team manages every aspect from planning to execution. We collaborate closely with contractors and designers to ensure projects are completed on time, within budget, and to the highest standards of quality.
              </p>
              <Link href="/contact" className="inline-block bg-brand-gold text-white py-2 px-4 rounded-md font-montserrat font-semibold hover:bg-brand-black hover:text-brand-gold transition-colors">
                Learn More
              </Link>
            </div>
          </div>

          {/* Guest Satisfaction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/photos/lobby.png"
                alt="Guest Room Experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-cormorant font-bold mb-6 text-brand-black">Guest Satisfaction</h2>
              <p className="text-brand-black font-montserrat mb-6">
                At the heart of our hospitality philosophy lies guest satisfaction. We prioritize creating exceptional experiences that exceed expectations and foster loyalty. Our approach integrates feedback systems, personalized service initiatives, and continuous training to anticipate and meet guest needs. From arrival to departure, every interaction is crafted to leave a lasting positive impression.
              </p>
              <Link href="/contact" className="inline-block bg-brand-gold text-white py-2 px-4 rounded-md font-montserrat font-semibold hover:bg-brand-black hover:text-brand-gold transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24">
          <div className="bg-brand-gold rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-cormorant font-bold text-white mb-2">Ready to elevate your hospitality business?</h2>
              <p className="text-white font-montserrat">Contact us today to discuss your specific needs.</p>
            </div>
            <Link href="/contact" className="inline-block bg-white text-brand-black py-3 px-6 rounded-md font-montserrat font-semibold hover:bg-brand-black hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 