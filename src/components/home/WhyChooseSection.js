import React from 'react';
import Container from '../ui/Container';
// import SectionHeader from '../ui/SectionHeader';
import { FiCheck } from 'react-icons/fi';

const WhyChooseSection = () => {
  const reasons = [
    {
      id: 1,
      title: "Premium Quality:",
      description: "Lexora products are India's No.1 Adhesive Company, ensuring top-notch quality and reliability."
    },
    {
      id: 2,
      title: "Advanced Technology:",
      description: "Uses cutting-edge technology to manufacture adhesives, grouts, and tile cleaners that meet global standards."
    },
    {
      id: 3,
      title: "Versatility:",
      description: "It is suitable for various tile types and substrates, making it ideal for residential and commercial projects."
    },
    {
      id: 4,
      title: "High Bond Strength:",
      description: "Significantly improves the bond between tiles and substrates, preventing issues like hollowness."
    },
    {
      id: 5,
      title: "Ease of Use:",
      description: "Products are easy to mix, apply, and adjust, ensuring consistent and excellent results."
    },
    {
      id: 6,
      title: "Expert Support:",
      description: "A team of over 1000 experts ensures product quality and provides support."
    },
    {
      id: 7,
      title: "Time Saving:",
      description: "Surfaces are ready to use within 24 hours, speeding up project completion."
    },
    {
      id: 8,
      title: "Comprehensive Range:",
      description: "Offers a wide range of adhesives, grouts, and cleaners to cater to diverse tiling needs."
    }
  ];

  return (
    <>
      {/* Why Section */}
      <section className="team-skills-one whysection bg-kajaria-blue-100 py-16">
        <Container>
          <div className="team-skills-one__info">
            <div className="team-skills-one__content">
              <div className="col-lg-8">
                <div className="sec-title sec-title--border mb-8">
                  <h6 className="sec-title__tagline">Why</h6>
                  <h3 className="sec-title__title">Premium Tile Fixing Solutions With Lexora</h3>
                </div>
              </div>
              <div className="team-skills-one__description" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="0">
                <p className="team-skills-one__text text-gray-700 leading-relaxed mb-4">
                  Are you looking for the best tile-fixing experts for your tiling projects? You're in the right place.
                </p>
                <p className="team-skills-one__text text-gray-700 leading-relaxed mb-4">
                  Lexora is a product from India's top Adhesive Company, Lexora, which provides a premium range of tile and stone fixing solutions in adhesives, grouts, and tile cleaners. With a experts, Lexora manufactures technologically advanced tile fixing products that meet global market criteria and boast a vast dealer network. Whether professional architects or end-users, Lexora caters to the current demand for residential and commercial tiling and stone fixing needs.
                </p>
                <p className="team-skills-one__text text-gray-700 leading-relaxed">
                  Discover the pinnacle of excellence in tile and stone fixing solutions with Lexora, a name that instills confidence with its reliability, innovation, and quality craftsmanship. Lexora is considered one of India's top tile adhesives and grout brands, a testament to its competitive price and top-notch product qualities. It requires no recognition as it is from the house of Lexora, a brand known for its unwavering commitment to quality and deliverables in India and globally.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="team-skills-one whychoosesection bg-kajaria-blue-100  py-16">
        <Container>
          <div className="team-skills-one__skills">
            <h3 className="team-skills-one__title team-skills-one__skills__title text-2xl font-bold text-gray-900 mb-8">
              Why Choose Lexora?
            </h3>
            <ul className="list-unstyled service-details__list listpoints left-align-text space-y-6">
              {reasons.map((reason) => (
                <li key={reason.id} className="flex items-start gap-4 " data-aos="fade-up" data-aos-delay={reason.id * 100}>
                  <div className="flex items-center bg-white rounded-full p-2">
                    <FiCheck className="text-kajaria-blue-700 text-lg flex-shrink-0" />
                  </div>
                  <div>
                    <p className="text-gray-800 leading-relaxed">
                      <strong>{reason.title}</strong> {reason.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhyChooseSection; 