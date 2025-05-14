'use client'

import { useState } from 'react';
import Image from 'next/image';

// Team member type definition
type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
  };
};

// Placeholder team data - replace with actual team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Atul Patel',
    role: 'Founder',
    image: '/images/icons/Atul-Headshot.png', // Updated to use the headshot
    bio: 'After almost 30 years of working in the Hospitality Industry from the humble beginnings as a dishwasher in a University Residence Dining Lounge, Atul decided to create Passat Hospitality Inc., to assist new Hoteliers to enter the Hospitality space and set them up for success.\n\nHaving worked with multiple brands such as Choice Hotels Canada, Travelodge Hotels, Best Western International, IHG, Marriott and Hilton in various roles from Construction, Pre-Opening, General Manager and a Regional Manager, for various Ownership Groups, he has gained a tremendous amount of knowledge and experience in the Hospitality Space.\n\nAtul has opened and operated multiple hotels throughout his career and has worked at every level of operations during his long tenure in the industry. He has managed various hotels of all sizes from small rooms only hotels as well as large hotels with extensive meeting and banquet facilities. He has a track record of delivering exceptional results in Guest satisfaction scores, Quality Assurance score, Renovations, re-brandings. In addition, he has a solid grasp on Sales and Marketing as well as maintaining a strong RevPAR Index including pre-opening of hotels and building a strong team to ensure a successful opening.\n\nThe most successful opening during his time was the Courtyard Marriot Toronto/Mississauga West. Atul took on the role of pre-opening this hotel and amidst construction delays, Brand delays amongst other issues, he successfully managed to work with the brand team, the construction team and with ownership to overcome and find solutions to minimize delays and open the hotel in May 2017 only three months behind schedule. He built a team and worked with them, training and mentoring them to ensure a smooth opening and a successful ramp up. This property achieved 70% occupancy in the first month of operations and maintained a RevPAR index of 120% along with Guest Satisfaction scores in the top 15% of the Brand. In addition, the property excelled at Quality Assurance scores maintained well above Brand Benchmarks.',
    contact: {
      email: 'atul1066@gmail.com',
      phone: '(416) 312-8902',
    },
  },
  {
    id: 2,
    name: 'Satish Palasseri',
    role: 'CHA',
    image: '/images/icons/Satish-Headshot.jpg', // Updated to use the headshot
    bio: 'With over 42 years of distinguished experience in the hospitality industry, I offer unparalleled expertise in hotel management consultancy. Throughout my career, I have been driven by a commitment to excellence, strategic thinking, and a passion for fostering growth and profitability. My core management values revolve around:\n\nStrategic Planning: I specialize in developing and executing strategic plans that propel hotels towards success. By leveraging market insights and industry trends, I craft tailored strategies to achieve business objectives and surpass performance targets.\n\nOperational Excellence: From overseeing multiple properties to ensuring compliance with brand standards, I excel in optimizing operational efficiency. My hands-on approach and attention to detail enable me to streamline workflows, maximize resources, and deliver exceptional results.\n\nLeadership and Mentorship: As a seasoned leader, I am dedicated to inspiring and empowering teams to achieve greatness. Through mentorship and coaching, I cultivate a culture of excellence, fostering individual growth and collective success.\n\nClient-Centric Approach: I prioritize building strong relationships with clients and stakeholders, understanding their unique needs and delivering personalized solutions. My commitment to exceeding expectations and driving collaboration ensures mutual trust and long-term partnerships.\n\nCommunity Engagement: I believe in giving back to the community and have been recognized for outstanding contributions beyond the confines of the hospitality industry. My passion for making a positive impact extends to various philanthropic endeavours and community initiatives.',
    contact: {
      email: 'info@passathospitality.com',
      phone: '',
    },
  },
  {
    id: 3,
    name: 'Harry Patel',
    role: 'Consultant',
    image: '/images/icons/Harry-Headshot.jpg', // Updated to use the headshot
    bio: 'With over 25 years of experience in Hospitality, Property Management, and Tourism, I specialize in property opening and setup services, marketing, sales, union negotiations, and human resources. My career spans diverse roles from Director of Operations to Director of Sales & Marketing, focusing on enhancing guest satisfaction and operational excellence.\n\nExperience Highlights:\n- Committee Member, Ontario Tourism Marketing Partnership Corp. (Tourism & Sector Advisory)\n- Vice-Chair, Halton Region Tourism Advisory\n- Board Member, Willow Foundation\n- Specialties: Developing long-term business relationships for sustainable success.\n\nCareer Journey:\n- Owner & General Manager, Motor Home Travel Canada Inc. (Nov 2015 - Present)\nLeading operations and strategic growth initiatives for a prominent hospitality business.\n- Director of Operations, Northampton Group Inc. (Jan 1987 - Sep 2014)\nManaged multi-property operations, overseeing hotel renovations, labor negotiations, and market analysis across Ontario, Quebec, USA, and international markets.\n- Director of Sales & Marketing, Northampton Group Inc. (Jul 1987 - Jan 2012)\nDeveloped and executed sales and marketing strategies for a diverse portfolio of 16 properties across North America.\n\nI believe in leveraging comprehensive industry knowledge and strategic insights to drive sustainable growth and excellence in hospitality management.',
    contact: {
      email: 'info@passathospitality.com',
      phone: '',
    },
  },
  {
    id: 4,
    name: 'Melissa',
    role: 'Consultant',
    image: '/images/icons/Melissa-Headshot.jpg', // Updated to use the headshot
    bio: 'I am a passionate entrepreneur and the creative force behind Pure Lush Designs and Co, a leading wedding design company, and Lush Flower Boutique. As the visionary mind and Founder of K2B Productions, an innovative events production company, I have pioneered the success of the Peel Wedding Show and curated immersive experiences that redefine event excellence.\n\nExperience Highlights:\n- 13-time Award Winner for Decor & Florals\n- Published in leading wedding magazines and blogs\n- Founder of Peel Women\'s Entrepreneur Group (2016-2021)\n- Founder of Ontario Business Network (2017-2023)\n\nExperience:\n- Executive Producer, Peel Wedding Show (Dec 2023 – Present)\nPioneering the region\'s premier wedding showcase, connecting couples with top-notch vendors and trendsetting ideas.\n- Founder & CEO, K2B Productions Inc. (Dec 2023 - Present)\nFounded with a mission to bring creative and memorable events to life.\n- Owner & Creative Designer, Pure Lush Designs and Co (Aug 2012 - Present)\nPresident of an eleven-time award-winning event décor company offering a one-stop wedding and event hub.\n- Executive Director & Lead Certified Floral Artist, Lush Flower Boutique (May 2020 - Present)\nBrampton\'s luxury Boutique Flower Studio featuring bespoke, long-lasting lush blooms for all occasions.\n- Executive Director, Ontario Business Network (2009 - Present)\nFacilitating networking opportunities for West Indian business professionals.',
    contact: {
      email: 'info@passathospitality.com',
      phone: '',
    },
  },
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen bg-brand-cream py-16">
      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-cormorant font-bold mb-6 text-brand-black">About Passat Hospitality</h1>
        </div>

        {/* Philosophy Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/photos/niceroom.jpg"
                alt="Hotel lobby"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-cormorant font-bold mb-6 text-brand-black">Our Philosophy</h2>
              <p className="text-brand-black font-montserrat mb-6">
                At Passat Hospitality, we specialize in guiding companies through industry transitions to ensure their competitiveness. With over two decades of experience, we prioritize your business success above all else.
              </p>
              <p className="text-brand-black font-montserrat mb-6">
                Our team of experts is dedicated to helping you not only survive but thrive in the ever-evolving market landscape. Contact us today to schedule your initial consultation.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-cormorant font-bold text-center mb-12 text-brand-black">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-brand-cream p-6 rounded-lg shadow-md border-t-4 border-brand-gold cursor-pointer hover:shadow-lg transition-all"
                onClick={() => setSelectedMember(member)}
              >
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                    {/* Display actual team member image */}
                    <Image 
                      src={member.image}
                      alt={`${member.name} headshot`}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-cormorant font-bold text-brand-black">{member.name}</h3>
                  <p className="text-brand-gold font-montserrat">{member.role}</p>
                  <button 
                    className="mt-4 text-sm font-montserrat text-brand-black hover:text-brand-gold transition-colors"
                    onClick={() => setSelectedMember(member)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-brand-gold text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-cormorant font-bold mb-4">Our Experience</h2>
            <p className="text-xl font-montserrat">
              With years of experience in the hospitality industry, we understand the unique challenges and opportunities in the market. Our team is dedicated to providing personalized solutions that meet your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-brand-cream rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-cormorant font-bold text-brand-black">{selectedMember.name}</h3>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="text-brand-black hover:text-brand-gold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden">
                    {/* Display actual team member image */}
                    <Image 
                      src={selectedMember.image}
                      alt={`${selectedMember.name} headshot`}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-brand-gold font-montserrat mb-3">{selectedMember.role}</p>
                  <div className="text-brand-black font-montserrat mb-4 space-y-4">
                    {selectedMember.bio.split('\n\n').map((paragraph, index) => {
                      // Check if paragraph contains bullet points
                      if (paragraph.includes('\n- ')) {
                        const [heading, ...items] = paragraph.split('\n- ');
                        return (
                          <div key={index} className="space-y-2">
                            {heading && <p>{heading}</p>}
                            <ul className="list-disc pl-5 space-y-1">
                              {items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      } else {
                        return <p key={index}>{paragraph}</p>;
                      }
                    })}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-montserrat font-semibold text-brand-black">Contact Information:</h4>
                    <p className="font-montserrat">Email: {selectedMember.contact.email}</p>
                    {selectedMember.contact.phone && <p className="font-montserrat">Phone: {selectedMember.contact.phone}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 