import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tileGroutImage from "../../assets/images/menu/tile-grout.png";
import Layout from "../layout/Layout";
import PageHeader from "../ui/PageHeader";

const TileGroutProductPage = () => {
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
    pageTitle: "Tile Grout",
    breadcrumbs: [{ label: "Tile Grout", link: null }],
    // Product Details Props
    productName: "Tile Grout",
    productImage: tileGroutImage,
    description:
      "LEXORA Tile Grout is a Premium fine polymer modified water resistant cement based powder grout use for various applications area.",
    tdsLink: "/assets/tds/tile-grout.pdf",
    dealerLink: "/where-to-buy",
    altText: "Lexora High Polymer Tile Grout",
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
                    High Polymer Tile Grout
                  </h1>
                </div>

                {/* Description */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Product Details
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    LEXORA Tile Grout is a Premium fine polymer modified water resistant cement based powder grout use for various applications area.
                  </p>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Shelf Life & Storage
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Shelf life is 12 months from the date of manufacturing in unopened condition. Store in a cool & dry place.
                  </p>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Application Area
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Glazed Wall tiles | Mosaic | Vitrified | full vitrified | Floor Tiles | Industrial Floor etc.
                  </p>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Colors
                  </h3>
                  <div className="mt-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-white border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">White</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-amber-100 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">Ivory</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-gray-400 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">Grey</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-amber-800 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">C. Brown</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-pink-400 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">Magenta</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-red-800 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">R. Brown</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-yellow-100 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">Beige</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-black border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">Black</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-yellow-600 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">Jaisalmer</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-orange-600 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">Terracotta</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-blue-400 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">S. Blue</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-green-600 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">O. Green</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-pink-300 border border-gray-300 rounded mx-auto mb-1"></div>
                        <span className="text-sm text-gray-700">Pink</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Packing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    1 kg
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

export default TileGroutProductPage;
