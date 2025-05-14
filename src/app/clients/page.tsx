import Image from 'next/image';
import Link from 'next/link';

// Client type
type Property = {
  id: number;
  name: string;
  image: string;
  location: string;
  description: string;
};

type Client = {
  id: number;
  name: string;
  image: string;
  description: string;
  properties: Property[];
};

// Client data
const clients: Client[] = [
  {
    id: 1,
    name: "LHM Canada Inc",
    image: "/images/clients/client/LHM.avif",
    description: "With hotels in Canada, the USA, England and East Africa, LHM's privately owned hotel investment, development and management company, LHM Canada Inc, is leading the way in North America's Hospitality Industry.\n\nOver the past three decades, LHM's team has formed invaluable business relationships with top hospitality industry leaders and world-renowned hotel brands. They have worked with Hilton, International Hotel Group, Marriott, Radisson, Choice Hotels and Hyatt, as well as highly successful independent boutique hotels.",
    properties: [
      {
        id: 101,
        name: "Avid Hotel Toronto",
        image: "/images/clients/properties/Avid_hotel.avif",
        location: "Vaughan, ON",
        description: "We are proud to have been involved in opening the very first Avid Hotel in Canada. IHG's newest brand is sure to be a success in the vibrant market. The Avid is conveniently located minutes from Pearson International airport, expanding business parks and Canada's most famous and premier theme park, Canada's Wonderland. With the right sized rooms, good all-around breakfast and fresh bean to cup coffee, this new Hotel will become a fast favourite for all travellers. The Hotel will offer 119 guestrooms with 55 inch TVs, free wifi, a swimming pool and a state-of-the-art fitness centre."
      },
      {
        id: 102,
        name: "Hampton Inn & Suites",
        image: "/images/clients/properties/Hampton_burlington.avif",
        location: "Burlington, ON",
        description: "Hampton Inn & Suites by Hilton is the newest Hotel in Burlington, Ontario. The Hotel features easy access as it is located directly on Appleby Line, just a minute north of the Queen Elizabeth Way (QEW) and within short proximity of the captivating and beautiful shores of Lake Ontario. With 108 new and modern rooms, free wifi, complimentary hot breakfast, a state-of-the-art multi-sport simulator room, pool, fitness facility as well as friendly service full of Hamptonality, our guests can be guaranteed an incredible stay. We back it up with our 100% Hampton Guarantee. We offer easy access to shopping, dining, and entertainment. Toronto, Pearson International Airport is only 30 minutes away."
      }
    ]
  }
];

export default function Clients() {
  return (
    <div className="min-h-screen bg-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-cormorant font-bold mb-6 text-brand-black">Our Clients</h1>
          <p className="text-xl text-brand-black max-w-3xl mx-auto font-montserrat">
            Partnering with exceptional hospitality brands to deliver outstanding guest experiences
          </p>
        </div>

        {/* Clients Section */}
        <div className="space-y-24">
          {clients.map((client) => (
            <div key={client.id}>
              {/* Client Information */}
              <div className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={client.image}
                      alt={`${client.name} branding`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-cormorant font-bold mb-6 text-brand-black">{client.name}</h2>
                    <div className="text-brand-black font-montserrat mb-6 space-y-4">
                      {client.description.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Properties Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-cormorant font-bold mb-8 text-brand-black text-center">Properties</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {client.properties.map((property) => (
                    <div key={property.id} className="bg-brand-cream p-8 rounded-lg shadow-md border-t-4 border-brand-gold">
                      <div className="relative h-60 w-full rounded-lg overflow-hidden mb-6">
                        <Image
                          src={property.image}
                          alt={property.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-cormorant font-bold mb-2 text-brand-black">{property.name}</h4>
                      <p className="text-brand-gold font-montserrat text-sm mb-4">{property.location}</p>
                      <p className="text-brand-black font-montserrat mb-4">
                        {property.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24">
          <div className="bg-brand-gold rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-cormorant font-bold text-white mb-2">Want to become our next success story?</h2>
              <p className="text-white font-montserrat">Contact us today to discuss your hospitality property needs.</p>
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