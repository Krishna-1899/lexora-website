import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

// Import images
// import aboutMainImage from '../../assets/images/about/about-2-1.webp';
import pageHeaderBg from '../../assets/images/backgrounds/page-header-bg-1-1.png';
import reliableImage1 from '../../assets/images/about/about-2-2.webp';
import reliableImage2 from '../../assets/images/about/about-2-1.webp';

// Project logos
import nmdcLogo from '../../assets/images/resources/brand-1-1.png';
import irctcLogo from '../../assets/images/resources/brand-1-2.png';
import seclLogo from '../../assets/images/resources/brand-1-3.png';
import cgLogo from '../../assets/images/resources/brand-1-4.png';
import dlfLogo from '../../assets/images/resources/brand-1-5.png';
import emaarLogo from '../../assets/images/resources/brand-1-6.png';
import offerBg from '../../assets/images/backgrounds/offer-bg.jpg';

const WhoWeAre = () => {
  const [activeTab, setActiveTab] = useState('adhesives');

  const projectLogos = [
    { src: nmdcLogo, alt: "NMDC" },
    { src: irctcLogo, alt: "IRCTC" },
    { src: seclLogo, alt: "SECL" },
    { src: cgLogo, alt: "Chhattisgarh" },
    { src: dlfLogo, alt: "DLF" },
    { src: emaarLogo, alt: "Emaar" }
  ];

  const productTabs = {
    adhesives: {
      title: 'Premium Tile Adhesive',
      products: [
        'CX-1 Premium Tile Adhesive',
        'VX-1 Premium Tile Adhesive',
        'CX-2 White Premium Tile Adhesive',
        'VX-2 White Premium Tile Adhesive',
        'EX-5 Heavy Duty Premium Tile Adhesive',
        'LX-7 Tiles adhesive for concrete Floor',
        'EA-100 High Strength Epoxy Tile Adhesive'
      ]
    },
    grouts: {
      title: 'Grouts',
      products: [
        'KE-100 Duet Epoxy Grout',
        'KE-100 Premium Epoxy Grout',
        'KE-100 Glitter Epoxy Grout',
        'Premium Unsanded Grout',
        'KGA-01 Grout Admix For Interior & Exterior Tiles'
      ]
    },
    cleaner: {
      title: 'Premium Tile Cleaner',
      products: [
        'TC-1 Tile Cleaner'
      ]
    },
    tools: {
      title: 'Tools',
      products: [
        'Tile Leveling System',
        'Rubber Mallet',
        'Trowel',
        'Tile Spacers',
        'Carbide Tile Grout Saw',
        'Rubber Float',
        'ST9-1400 Mixer',
        'STll-850 Mixer',
        'Suction Cup',
        'Cordless Tile Vibrator',
        'Tile Shaping Template',
        'Hole Marker'
      ]
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section 
        className="relative py-24 bg-kajaria-blue-200"
        style={{ 
          backgroundImage: `url(${pageHeaderBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-kajaria-blue-50 mb-6 text-center">Who We Are</h2>
          <nav className="flex items-center text-kajaria-blue-50 justify-center">
            <Link to="/" className="flex items-center hover:text-blue-200 transition-colors">
              <i className="icon-home mr-2"></i>
              Home
            </Link>
            <span className="mx-3">/</span>
            <span>Who We Are</span>
          </nav>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* About Content */}
            <div className="max-w-6xl mx-auto">
              <div className="sec-title sec-title--border mb-12">
                <h6 className="sec-title__tagline">about us</h6>
                <h3 className="sec-title__title">The Company</h3>
              </div>

              <div className="prose prose-lg max-w-none text-center">
                <h5 className="text-2xl font-semibold text-gray-900 mb-6">
                  Lexora - India's top Adhesive Company, is the largest manufacturer of ceramic/vitrified tiles in India.
                </h5>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  All of Lexora's manufacturing units are equipped with cutting edge modern technology making their products the most desirable building material in this industry. Founded 35 years ago, Lexora has since then grown stronger with its hard work, innovations and patronage from its discerning customers. And with the Indian consumers rapidly growing appetite for quality building materials, the inspiration behind every Lexora product is to keep up with their customers' expectations alongside servicing every market demands as per requirement.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  The largest manufacturer of ceramic and vitrified tiles in India. Equipped with cutting-edge technology, we at Lexora strive to deliver quality products and services to our customers. Our team of experts work around the clock to ensure that the quality of our product is never compromised.
                </p>

                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  Keeping up with the same objective LEXORA (A unit of Lexora) aims offers you wide range of tile adhesives & grouts for fixing of various categories of tile for faster laying & long-lasting applications. When tiles are fixed to any surface, most vulnerable point is always the bond between the tile and substrate. We eliminate this weakness by significantly improving the bonding strength of the adhesive to both the tile and substrate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="sec-title sec-title--border mb-12">
            <h6 className="sec-title__tagline">our</h6>
            <h3 className="sec-title__title">MANUFACTURING FACILITIES</h3>
          </div>

          <div className="max-w-6xl">
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              At Lexora, our commitment to delivering world-class tile fixing solutions is powered by our fully automated manufacturing facility in Gailpur, Rajasthan. Built with German-engineered technology and driven by intelligent systems, the plant ensures error-free production, consistent quality, and unmatched reliability in every bag.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              With a strong focus on process accuracy and zero-defect output, the facility is designed to meet the highest standards of performance and durability. Backed by a robust storage and logistics setup, it ensures faster dispatches and steady product availability across our network.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="sec-title">
                  <h6 className="sec-title__tagline">Products</h6>
                  <h3 className="sec-title__title">Tile Adhesives, Grouts and Tile Cleaners:</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div 
            className="relative rounded-lg overflow-hidden min-h-[500px]"
            style={{ 
              backgroundImage: `url(${offerBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-kajaria-blue-50 bg-opacity-60"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-4 min-h-[500px]">
              {/* Tab Navigation */}
              <div className="bg-black bg-opacity-30 p-8">
                <div className="space-y-4">
                  <button 
                    onClick={() => setActiveTab('adhesives')}
                    className={`w-full text-left p-4 font-semibold transition-colors rounded-lg ${
                      activeTab === 'adhesives' 
                        ? 'bg-kajaria-blue-600 text-white' 
                        : 'text-white hover:bg-kajaria-blue-600 hover:bg-opacity-50'
                    }`}
                  >
                    Premium Tile Adhesive
                    <span className="float-right">→</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('grouts')}
                    className={`w-full text-left p-4 font-semibold transition-colors rounded-lg ${
                      activeTab === 'grouts' 
                        ? 'bg-kajaria-blue-600 text-white' 
                        : 'text-white hover:bg-kajaria-blue-600 hover:bg-opacity-50'
                    }`}
                  >
                    Grouts
                    <span className="float-right">→</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('cleaner')}
                    className={`w-full text-left p-4 font-semibold transition-colors rounded-lg ${
                      activeTab === 'cleaner' 
                        ? 'bg-kajaria-blue-600 text-white' 
                        : 'text-white hover:bg-kajaria-blue-600 hover:bg-opacity-50'
                    }`}
                  >
                    Premium Tile Cleaner
                    <span className="float-right">→</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('tools')}
                    className={`w-full text-left p-4 font-semibold transition-colors rounded-lg ${
                      activeTab === 'tools' 
                        ? 'bg-kajaria-blue-600 text-white' 
                        : 'text-white hover:bg-kajaria-blue-600 hover:bg-opacity-50'
                    }`}
                  >
                    Tools
                    <span className="float-right">→</span>
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="lg:col-span-3 p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {productTabs[activeTab].title}
                </h3>
                <ul className="space-y-3">
                  {productTabs[activeTab].products.map((product, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-500 mr-3 text-lg">✓</span>
                      <Link to="#" className="text-kajaria-blue-900 hover:text-[#03045e] transition-colors font-medium">
                        {product}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <img 
                src={reliableImage1} 
                alt="Projects" 
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={reliableImage2} 
                  alt="Projects" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Projects</h3>
              
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Our products are approved with government departments, Public Sector Organization across India Such as Indian railway central region, South east coal fields ltd, Chhattisgarh Projects, NMDC, state Government Schools, other Educational Institutions, and various private developers.
              </p>

              <h6 className="text-xl font-semibold text-gray-900 mb-8">
                Government & Private Approved
              </h6>

              {/* Project Logos */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {projectLogos.map((logo, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="w-full h-12 object-contain"
                    />
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                With an unparalleled commitment towards quality, this brand has strived to adopt technologies and standards of the modern times. Be it research or quality, Gres Bond has set its sight on all these factors adopting the optimal techniques in order to deliver quality products making them 100% customer-centric.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;