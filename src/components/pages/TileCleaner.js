import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tc1Image from "../../assets/images/menu/tile-cleaner.png";
import tc2Image from "../../assets/images/menu/tile-clener2.png";
import Layout from "../layout/Layout";
import PageHeader from "../ui/PageHeader";


const TileCleanerPage = () => {
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
    pageTitle: "Tiles Cleaner",
    breadcrumbs: [{ label: "Tiles Cleaner", link: null }],
    // Product Details Props
    productName: "Tiles Cleaner",
    productImage: tc1Image,
    description:
      "A powerful, heavy duty, acid-based cleaner for ceramic tiled floors and walls. TILE CLEANER is designed for removal of cement film residues, efflorescence and most oxide stains.",
    tdsLink: "/assets/tds/tile-cleaner.pdf",
    dealerLink: "/where-to-buy",
    altText: "Lexora Tiles Cleaner for Ceramic Surfaces",
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
                        src={tc2Image} 
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
                    Tiles Cleaner
                  </h1>
                  <p className="text-lg text-kajaria-brown-700 font-medium">
                    Powerful, Heavy Duty Acid Based Cleaner
                  </p>
                </div>

                {/* Description */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A powerful, heavy duty, acid - based cleaner for ceramic tiled floors and walls. TILE CLEANER is designed for removal of cement film residues, efflorescence and most oxide stains. It may also be used as general purpose cleaner on other acid resistant surfaces.
                  </p>
                  <p className="text-red-600 font-medium mt-2">
                    <strong>Note:</strong> Do not use on surfaces that are not resistant to acid such as marble/terrazzo.
                  </p>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-6">
                    Benefits
                  </h3>
                  <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                    <li>Powerful formula</li>
                    <li>Fast acting</li>
                    <li>Easy to apply</li>
                    <li>Removes cement film</li>
                    <li>Removes residues, efflorescence and most oxide stains</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-6">
                    Use
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    TILE CLEANER is used for interior and exterior ceramic tiled floors and walls.
                  </p>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-6">
                    Packing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    1 Ltr. / 5 Ltr.
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

export default TileCleanerPage;
