import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section - now with background image */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          {/* Banner image as hero background */}
          <Image
            src="/images/photos/banner.jpg"
            alt="Hospitality banner"
            fill
            className="object-cover"
            priority
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-brand-black/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl bg-brand-black/70 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-5xl font-bold mb-6 text-white">
              <span className="font-cormorant tracking-wide">Hospitality Operations Redefined</span>
            </h1>
            <p className="text-xl mb-8 text-white font-montserrat">
              At Passat Hospitality, we believe that every guest is the most important part of the operation.
            </p>
            <Link href="/contact" className="inline-block bg-brand-gold text-white py-3 px-6 rounded-md font-montserrat font-semibold hover:bg-brand-offwhite hover:text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/images/photos/hi res lobby.jpg"
                alt="Hotel lobby"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-cormorant font-bold mb-4 text-brand-black">Passat Hospitality Inc</h2>
              <h3 className="text-xl font-montserrat font-semibold mb-6 text-brand-gold">Bridging the Gap for New Hoteliers in the Industry</h3>
              <p className="text-brand-black font-montserrat mb-6">
                After almost 30 years of working in the Hospitality Industry from the humble beginnings as a dishwasher in a University Residence Dining Lounge, Atul decided to create Passat Hospitality Inc., to assist new Hoteliers to enter the Hospitality space and set them up for success.
              </p>
              <div className="flex gap-4">
                <Link href="/about" className="inline-block bg-brand-gold text-white py-2 px-4 rounded-md font-montserrat font-semibold hover:bg-brand-black hover:text-brand-gold transition-colors">
                  Find Out More
                </Link>
                <Link href="/contact" className="inline-block bg-transparent border border-brand-gold text-brand-black py-2 px-4 rounded-md font-montserrat font-semibold hover:bg-brand-black hover:text-brand-gold hover:border-brand-black transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-brand-black text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-cormorant font-bold mb-4 text-brand-gold">Contact Us</h2>
              <h3 className="text-xl font-montserrat font-semibold mb-6 text-brand-cream">How Can We Help?</h3>
              <p className="font-montserrat mb-6">
                Send us a message or visit us during business hours to ask questions or get more information
              </p>
              <div className="space-y-4 font-montserrat">
                <div>
                  <h4 className="font-semibold text-brand-gold">Passat Hospitality</h4>
                  <p>4839 Columbus Drive, Burlington, Ontario L7M 0H3, Canada</p>
                </div>
                <div>
                  <p>(416) 312-8902</p>
                  <p>atul1066@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-gold">Hours</h4>
                  <p>Open today</p>
                  <p>09:00 a.m. – 05:00 p.m.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/photos/frontdesk.jpg"
                alt="Hotel reception"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-cormorant font-bold mb-6 text-brand-black">Our Services</h2>
            <p className="text-xl text-brand-black max-w-3xl mx-auto font-montserrat">
              Comprehensive hospitality solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-brand-cream p-8 rounded-lg shadow-md border-t-4 border-brand-gold">
              <h3 className="text-xl font-cormorant font-bold mb-4 text-brand-black">Operations Management</h3>
              <p className="text-brand-black font-montserrat mb-4">
                Efficient operations management is the backbone of every successful hospitality venture.
              </p>
              <Link href="/services" className="text-brand-gold font-montserrat font-semibold hover:text-brand-black transition-colors">
                Learn more →
              </Link>
            </div>

            <div className="bg-brand-cream p-8 rounded-lg shadow-md border-t-4 border-brand-gold">
              <h3 className="text-xl font-cormorant font-bold mb-4 text-brand-black">Revenue Management</h3>
              <p className="text-brand-black font-montserrat mb-4">
                Maximize your revenue potential with our strategic revenue management services.
              </p>
              <Link href="/services" className="text-brand-gold font-montserrat font-semibold hover:text-brand-black transition-colors">
                Learn more →
              </Link>
            </div>

            <div className="bg-brand-cream p-8 rounded-lg shadow-md border-t-4 border-brand-gold">
              <h3 className="text-xl font-cormorant font-bold mb-4 text-brand-black">Renovations</h3>
              <p className="text-brand-black font-montserrat mb-4">
                Transform your hospitality property with our comprehensive renovations management.
              </p>
              <Link href="/services" className="text-brand-gold font-montserrat font-semibold hover:text-brand-black transition-colors">
                Learn more →
              </Link>
            </div>

            <div className="bg-brand-cream p-8 rounded-lg shadow-md border-t-4 border-brand-gold">
              <h3 className="text-xl font-cormorant font-bold mb-4 text-brand-black">Guest Satisfaction</h3>
              <p className="text-brand-black font-montserrat mb-4">
                At the heart of our hospitality philosophy lies exceptional guest satisfaction.
              </p>
              <Link href="/services" className="text-brand-gold font-montserrat font-semibold hover:text-brand-black transition-colors">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-gold rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-cormorant font-bold text-white mb-2">Ready to elevate your hospitality business?</h2>
              <p className="text-white font-montserrat">Contact us today to schedule your initial consultation.</p>
            </div>
            <Link href="/contact" className="inline-block bg-white text-brand-black py-3 px-6 rounded-md font-montserrat font-semibold hover:bg-brand-black hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
