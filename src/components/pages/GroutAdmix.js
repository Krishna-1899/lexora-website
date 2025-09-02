import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import groutAdmixImage from "../../assets/images/menu/grount-admix.png";
import Layout from "../layout/Layout";
import PageHeader from "../ui/PageHeader";

const GroutAdmixProductPage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      offset: 100,
    });

    // Refresh AOS when component mounts
    AOS.refresh();
  }, []);

  const { pageTitle, breadcrumbs, productName, productImage, description, tdsLink, dealerLink, altText } = {
    pageTitle: "Grout Admix",
    breadcrumbs: [{ label: "Grout Admix", link: null }],
    // Product Details Props
    productName: "Grout Admix",
    productImage: groutAdmixImage,
    description:
      "LEXORA Admix is specially designed Latex Admix to be used with Sanded & Unsanded Grout. It improves the performance of Portland cement grouts for all type of ceramic tile, brick, marble, natural stone and agglomerate stone installations.",
    tdsLink: "/assets/tds/grout-admix.pdf",
    dealerLink: "/where-to-buy",
    altText: "Lexora Grout Admix for Tile Installation",
  };

  return (
    <Layout>
      {/* Page Header */}
      <PageHeader title={pageTitle} breadcrumbs={breadcrumbs} />

      {/* Product Details */}
      <div data-aos="fade-up" data-aos-duration="1000">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="flex justify-center lg:justify-start" data-aos="fade-right" data-aos-duration="1000">
                <div className="bg-kajaria-blue-50 py-8 px-20 rounded-lg max-w-md relative overflow-hidden">
                  <img 
                    src={productImage} 
                    alt={altText}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
                <div data-aos="fade-up" data-aos-delay="200">
                  <h1 className="text-3xl md:text-4xl font-bold text-kajaria-brown-900 mb-4 font-dm-sans">
                    Grout Admix
                  </h1>
                </div>

                {/* Description */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Product Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    LEXORA Admix is specially designed Latex Admix to be used with Sanded & Unsanded Grout. 
                  </p>
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Self life & Storage
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    It improves the performance of Portland cement grouts for all type of ceramic tile, brick, 
                    marble, natural stone and agglomerate stone installations.
                  </p>
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Packaging
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    200 ml
                  </p>
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Colors
                  </h3>
                  <div className="mt-4">
                    <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                      <li>Colour-fastness</li>
                      <li>Flexibility</li>
                      <li>Compressive Strength</li>
                      <li>Shock and chemical resistance</li>
                      <li>Reduces water absorption</li>
                      <li>Easy to clean</li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Coverage
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Varies as per application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GroutAdmixProductPage;
