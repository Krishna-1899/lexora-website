import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sbrLatexImage from "../../assets/images/menu/sbr-latex.png";
import sbrLatexImage2 from "../../assets/images/menu/sb-latex-2.png";
import Layout from "../layout/Layout";
import PageHeader from "../ui/PageHeader";

const SBRLatexPage = () => {
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
    pageTitle: "SBR Latex",
    breadcrumbs: [{ label: "SBR Latex", link: null }],
    // Product Details Props
    productName: "SBR Latex",
    productImage: sbrLatexImage,
    description:
      "LEXORA SBR Latex is a high-quality styrene butadiene rubber latex additive designed to enhance the performance of cement-based products.",
    tdsLink: "/assets/tds/sbr-latex.pdf",
    dealerLink: "/where-to-buy",
    altText: "Lexora SBR Latex for Construction Applications",
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
              {/* Product Images */}
              <div className="flex justify-center lg:justify-start" data-aos="fade-right" data-aos-duration="1000">
                  <div className="bg-kajaria-blue-50 py-6 px-8 rounded-lg relative flex items-baseline">
                    <div>
                      <img 
                        src={productImage} 
                        alt={altText}
                        className="object-contain"
                        />
                    </div>
                    <div>
                      <img 
                        src={sbrLatexImage2} 
                        alt="Lexora SBR Latex 5 Ltr Container"
                        className="object-contain"
                      />
                    </div>
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
                <div data-aos="fade-up" data-aos-delay="200">
                  <h1 className="text-3xl md:text-4xl font-bold text-kajaria-brown-900 mb-4 font-dm-sans">
                    SBR Latex
                  </h1>
                </div>

                {/* Description */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Application Area
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    For Enhances durability and lifespan of surfaces
                  </p>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Product Details
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    SBR latex is a synthetic rubber emulsion that, when added to cement slurry, cement mortar, concrete, or grout, provides good adhesion and water resistance. It comes in the form of a milky liquid. It is fully soluble in water and is to be added directly to the gauging water of mortar, concrete, or cementitious grout.
                  </p>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Packing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    1 Ltr. | 5 Ltr.
                  </p>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Shelf Life
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    LEXORA SBR latex has a shelf life of 12 months if kept in a dry, unopened condition.
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

export default SBRLatexPage;
