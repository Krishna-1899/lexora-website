import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import blockJointingMortarImage from "../../assets/images/menu/jointing-mortor.png";
import Layout from "../layout/Layout";
import PageHeader from "../ui/PageHeader";

const BlockJointMortarProductPage = () => {
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
    pageTitle: "Block Jointing Mortar",
    breadcrumbs: [{ label: "Block Jointing Mortar", link: null }],
    // Product Details Props
    productName: "BLOCK JOINTING MORTAR",
    productImage: blockJointingMortarImage,
    description:
      "LEXORA is a non-refractory mortar, used for laying masonry units like AAC blocks. It is a self curing mortar made from cement, selected fine sand and polymeric additives, which ensure good bonding and durable strength between the blocks.",
    tdsLink: "/assets/tds/block-jointing-mortar.pdf",
    dealerLink: "/where-to-buy",
    altText: "Lexora Block Jointing Mortar for AAC Blocks",
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
                <div className="bg-kajaria-blue-50 p-8 rounded-lg max-w-md">
                  <img 
                    src={productImage} 
                    alt={altText}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
                <div data-aos="fade-up" data-aos-delay="200">
                  <h1 className="text-3xl md:text-4xl font-bold text-kajaria-brown-900 mb-4 font-dm-sans">
                    BLOCK JOINTING MORTAR
                  </h1>
                  <p className="text-lg text-kajaria-brown-700 font-medium">
                    For Fixing Blocks
                  </p>
                </div>

                {/* Description */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    LEXORA is a non-refractory mortar, used for laying masonry units like AAC blocks. It is a self curing mortar made from cement, selected fine sand and polymeric additives, which ensure good bonding and durable strength between the blocks.
                  </p>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-6">
                    Benefits
                  </h3>
                  <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                    <li>For 4mm bed thickness</li>
                    <li>Suitable for insulated blocks</li>
                    <li>Block mounting full wall in 2-3 days</li>
                    <li>The chiselling and conducting can be carried out after 14days</li>
                    <li>The Plastering can be carried out after 7 days</li>
                    <li>Can be applied with 90% material transfer</li>
                    <li>Self curing adhesive</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-6">
                    Packing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    40 kg
                  </p>
                  
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-6">
                    Color
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    GREY
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

export default BlockJointMortarProductPage;
