import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import epoxyGroutImage from "../../assets/images/menu/epoxy-grout.png";
import Layout from "../layout/Layout";
import PageHeader from "../ui/PageHeader";
import { Link } from "react-router-dom";
import { FaDownload, FaSearch } from "react-icons/fa";
import epoxyGroutImage1 from "../../assets/images/menu/epoxy_part_one.png";
import epoxyGroutImage2 from "../../assets/images/menu/epoxy_part_two.png";
import epoxyGroutImage3 from "../../assets/images/menu/epoxy_part_three.png";
import TechnicalData from "../product/TechnicalData";
import { DataTable } from "../product/TechnicalData";
const EpoxyGroutProductPage = () => {
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
    pageTitle: "Epoxy Grout",
    breadcrumbs: [{ label: "Epoxy Grout", link: null }],
    // Product Details Props
    productName: "Epoxy Grout",
    productImage: epoxyGroutImage,
    description:
      "Epoxy Grout is a high-performance epoxy-based grout specifically formulated for fixing ceramic tiles and small format natural stone, clay tiles, terracotta and quarry tiles of regular size. It is suitable for both vertical and horizontal surfaces, over the cementitious substrate for indoor application, in dry as well as wet areas. Easy to use with just water mixing, Epoxy Grout is perfect for dry areas and occasional moisture environments like bathrooms and kitchens.",
    tdsLink: "/assets/tds/epoxy-grout.pdf",
    dealerLink: "/where-to-buy",
    altText: "Epoxy Grout for Ceramic Floor Tiles",
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
                  <img src={epoxyGroutImage1} alt={altText} className="object-contain absolute top-[40%] left-2 sm:-left-4 w-24 h-24 sm:w-36 sm:h-36" />
                  <img 
                    src={productImage} 
                    alt={altText}
                    className="object-contain w-full h-full"
                  />
                  <img src={epoxyGroutImage2} alt={altText} className="object-contain w-24 h-24  sm:w-40 sm:h-40 absolute top-[37%] right-2 sm:right-0" />
                </div>
              </div>

              {/* Product Information */}
              <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
                <div data-aos="fade-up" data-aos-delay="200">
                  <h1 className="text-3xl md:text-4xl font-bold text-kajaria-brown-900 mb-4 font-dm-sans">
                    Epoxy 2 Part Grout
                  </h1>
                </div>

                {/* Description */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Product Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    2 Part Epoxy easy is a two component, easy to use, epoxy based tile adhesive and grout. It is suitable for all types of tiles and stones on the floor and wall. It is especially
                    recommended for hygiene sensitive areas and also areas which require sterile conditions.
                  </p>
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Usage
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Anti-stain properties make it suitable for maintainence - free use in residential, commercial,
                    & hospitality sector. <br />
                    • High bond strength makes it suitable for use with ceramic tile, porcelian, and vitrified tiles,
                    large format tiles & stones, low thickness slabs, natural stone, artificial stone, etc <br />
                    • Low water absorption and resistance to a wide degree of temperature variation ensures
                    that it can be used for wet areas, swimming pools, spas, jacuzzis, bathrooms, public toilets,
                    and showers.
                  </p>
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">Shelf Life & Storage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Shelf life is 12 months from the date of manufacturing in unopened condition. Store in a cool
                    & dry place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Information */}
              <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
                <div data-aos="fade-up" data-aos-delay="200">
                  <h1 className="text-3xl md:text-4xl font-bold text-kajaria-brown-900 mb-4 font-dm-sans">
                    Epoxy 3 Part
                  </h1>
                </div>

                {/* Description */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    Product Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    LEXORA Epoxy is a hygienic, hard-wearing, impervious, epoxide resin-based epoxy grout with a high degree
                    of resistance to chemical attack, abrasion and impact. The cured grout does not transfer taints to foodstuffs
                    and does not permit the entry of bacteria or dirt. It is easily maintained in a sterile condition.
                  </p>
                  <h3 className="text-xl font-bold text-kajaria-brown-900 mt-3">
                    TECHNICAL SPECIFICATIONS
                  </h3>
                  
                                    {/* Technical Specifications Table */}
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <tbody>
                        {/* Row 1: 6 columns - Headers and Values */}
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700">Joint Width</td>
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700">Pot Life @27±2°C</td>
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700">Cure @27±2°C</td>
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700">Temperature Resistance</td>
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700">Water Absorption</td>
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700">Specific Gravity</td>
                        </tr>
                        
                        {/* Row 2: 6 columns - Temperature Resistance spans across */}
                        <tr>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">2-20mm</td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">45 minutes</td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">48 hours</td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">Prolonged - 30°C to 150°C Intermittent</td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">Nil(1)</td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">1.75</td>
                        </tr>
                        
                        {/* Row 3: 6 columns - Water Absorption, Specific Gravity, Tensile Adhesion */}
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-3 py-2 text-gray-700" colSpan={4}></td>
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700" colSpan={2}>Tensile Adhesion (14 days air)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700" colSpan={4}></td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">
                            <div>Dry condition</div>
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">
                            <div>Wet condition</div>
                          </td>
                        </tr>

                        {/* Row 4: 6 columns - BS 5980:1980, PACKING, Product info */}
                        <tr>
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700 text-center" colSpan={4}>
                            Epoxy Grout
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">
                            <div> &gt; 4.5 kn</div>
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">
                            <div>&gt; 3.6 kn</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2 font-semibold text-gray-700 text-center" colSpan={4}>
                            BS 5980:1980
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">
                            <div>0.95</div>
                          </td>
                          <td className="border border-gray-300 px-3 py-2 text-gray-700">
                            <div>0.56</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Packaging Information */}
                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-kajaria-brown-900 mb-4">
                      PACKAGING OF RAINBOW SPARKLE SERIES
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Kit</th>
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Filler</th>
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Resin</th>
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Hardener</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">5kg</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">3500gm</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">1000ml</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">500ml</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">1kg</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">700gm</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">200ml</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">100ml</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-kajaria-brown-900 mb-4">
                      PACKAGING OF LEXORA SERIES
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Kit</th>
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Filler</th>
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Resin</th>
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-700">Hardener</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">5kg</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">3500gm</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">1000ml</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">500ml</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">1kg</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">700gm</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">200ml</td>
                            <td className="border border-gray-300 px-3 py-2 text-gray-700">100ml</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Image */}
              <div className="flex justify-center lg:justify-start" data-aos="fade-right" data-aos-duration="1000">
                <div className="bg-kajaria-blue-50 py-8 pl-20 pr-32 rounded-lg max-w-md relative overflow-hidden">
                  <img src={epoxyGroutImage1} alt={altText} className="object-contain absolute top-[37%] left-2 sm:-left-4 w-20 h-20 sm:w-36 sm:h-36" />
                  <img 
                    src={productImage} 
                    alt={altText}
                    className="object-contain w-full h-full"
                  />
                  <img src={epoxyGroutImage3} alt={altText} className="object-contain absolute top-[37%] right-14 sm:right-14 w-20 h-20 sm:w-36 sm:h-36" />
                  <img src={epoxyGroutImage2} alt={altText} className="object-contain w-20 h-20 sm:w-40 sm:h-40 absolute top-[37%] right-0 sm:-right-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <ProductDetails
          productName={productName}
          productImage={productImage}
          description={description}
          tdsLink={tdsLink}
          dealerLink={dealerLink}
          altText={altText}
        /> */}
      </div>
    </Layout>
  );
};

export default EpoxyGroutProductPage;
