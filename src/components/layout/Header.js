import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import headerBg from "../../assets/images/backgrounds/about-bg-2-1.png";
import logoDark from "../../assets/images/logo/logo-dark.webp";
import logoLight from "../../assets/images/logo/logo-light.webp";
// Import menu images
import cx1Image from "../../assets/images/menu/cx-1.webp";
import cx2Image from "../../assets/images/menu/cx-2.webp";
import vx1Image from "../../assets/images/menu/vx-1.webp";
import vx2Image from "../../assets/images/menu/vx-2.webp";
import ex5Image from "../../assets/images/menu/ex-5.webp";
import lx7Image from "../../assets/images/menu/lx-7.webp";
import lx7SuperFlexImage from "../../assets/images/menu/lx-7-super-flex.webp";
import pua100Image from "../../assets/images/menu/ea-100.webp";
// Import grout images
import duetImage from "../../assets/images/menu/duet.webp";
import ke100Image from "../../assets/images/menu/KE100.webp";
import glitterImage from "../../assets/images/menu/glitter.webp";
import unsandedImage from "../../assets/images/menu/unsanded.webp";
import admisImage from "../../assets/images/menu/admis.webp";
// Import cleaner image
import tc1Image from "../../assets/images/menu/tc-1.webp";
// Import tool images
import levelingPlierImage from "../../assets/images/menu/leveling-plier-head.webp";
import rubberMalletImage from "../../assets/images/menu/rubber-mallet-head.webp";
import trowelImage from "../../assets/images/menu/trowel-head.webp";
import tileSpacersImage from "../../assets/images/menu/tile-spacers-head.webp";
import carbideGroutImage from "../../assets/images/menu/carbide-grout-head.webp";
import rubberFloatImage from "../../assets/images/menu/rubber-float-head.webp";
import st9MixerImage from "../../assets/images/menu/st9-1400-mixer-head.webp";
import stllMixerImage from "../../assets/images/menu/stll-850-mixer-head.webp";
import suctionCupImage from "../../assets/images/menu/suction-cup-head.webp";
import cordlessTileImage from "../../assets/images/menu/cordless-tile-head.webp";
import tileShapingImage from "../../assets/images/menu/tile-shaping-head.webp";
import holeMarkerImage from "../../assets/images/menu/hole-marker-head.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tile-adhesives");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set default active tab when products menu opens
    if (productsMenuOpen) {
      setActiveTab("tile-adhesives");
    }
  }, [productsMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleProductsMenu = (e) => {
    e.preventDefault();
    setProductsMenuOpen(!productsMenuOpen);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const adhesiveProducts = [
    { name: "CX-1", img: cx1Image, link: "/cx-1" },
    { name: "CX-2", img: cx2Image, link: "/cx-2" },
    { name: "VX-1", img: vx1Image, link: "/vx-1" },
    { name: "VX-2", img: vx2Image, link: "/vx-2" },
    { name: "EX-5", img: ex5Image, link: "/ex-5" },
    { name: "LX-7", img: lx7Image, link: "/lx-7" },
    {
      name: "LX-7 Super Flex",
      img: lx7SuperFlexImage,
      link: "/lx-7-super-flex",
    },
    { name: "PUA-100", img: pua100Image, link: "/pua-100" },
  ];

  const groutProducts = [
    { name: "KE-100 Duet", img: duetImage, link: "/ke-100-duet" },
    { name: "KE-100", img: ke100Image, link: "/ke-100" },
    { name: "KE-100 Glitter", img: glitterImage, link: "/ke-100-glitter" },
    {
      name: "Premium Unsanded Grout",
      img: unsandedImage,
      link: "/premium-unsanded-grout",
    },
    { name: "KGA-01", img: admisImage, link: "/kga-01" },
  ];

  const toolProducts = [
    {
      name: "TILE LEVELING SYSTEM",
      img: levelingPlierImage,
      link: "/tile-leveling-system",
    },
    { name: "RUBBER MALLET", img: rubberMalletImage, link: "/rubber-mallet" },
    { name: "TROWEL", img: trowelImage, link: "/trowel" },
    { name: "TILE SPACERS", img: tileSpacersImage, link: "/tile-spacers" },
    {
      name: "CARBIDE TILE GROUT SAW",
      img: carbideGroutImage,
      link: "/carbide-tile-grout-saw",
    },
    { name: "RUBBER FLOAT", img: rubberFloatImage, link: "/rubber-float" },
    { name: "ST9-1400 MIXER", img: st9MixerImage, link: "/st9-1400-mixer" },
    { name: "STll-850 MIXER", img: stllMixerImage, link: "/stll-850-mixer" },
    { name: "SUCTION CUP", img: suctionCupImage, link: "/suction-cup" },
    {
      name: "CORDLESS TILE VIBRATOR",
      img: cordlessTileImage,
      link: "/cordless-tile-vibrator",
    },
    {
      name: "TILE SHAPING TEMPLATE",
      img: tileShapingImage,
      link: "/tile-shaping-template",
    },
    { name: "HOLE MARKER", img: holeMarkerImage, link: "/hole-marker" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container-fluid px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="block">
              <img
                src={logoDark}
                alt="Gresbond by kajaria logo"
                className="w-auto h-10 md:h-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block ml-10">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="text-gray-800 hover:text-kajaria-blue-700 font-medium transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/who-we-are"
                    className="text-gray-800 hover:text-kajaria-blue-700 font-medium transition-colors duration-300"
                  >
                    Who We Are
                  </Link>
                </li>
                <li className="relative">
                  <a
                    href="#"
                    className="text-gray-800 hover:text-kajaria-blue-700 font-medium flex items-center transition-colors duration-300"
                    onClick={toggleProductsMenu}
                  >
                    Products <FiChevronDown className="ml-1" />
                  </a>
                </li>
                {/* <li>
                  <Link
                    to="/catalogue"
                    className="text-gray-800 hover:text-kajaria-blue-700 font-medium transition-colors duration-300"
                  >
                    Download Catalogue
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    to="/where-to-buy"
                    className="text-gray-800 hover:text-kajaria-blue-700 font-medium transition-colors duration-300"
                  >
                    Where To Buy
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-800 hover:text-kajaria-blue-700 font-medium transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-800 hover:text-kajaria-blue-700 transition-colors duration-300"
              onClick={toggleSearch}
            >
              <FaSearch className="text-xl" />
            </button>

            <Link to="" className="!hidden lg:!flex floens-btn">
              <span>EXPLORE TOOLS</span>
              <FiChevronRight className="ml-2" />
            </Link>

            <button
              className="lg:hidden text-gray-800 hover:text-kajaria-blue-700 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu - Desktop */}
      {productsMenuOpen && (
        <div className="absolute left-[-50%] translate-x-[80%] w-9/12 top-full z-50 hidden lg:block">
          <div className="bg-white shadow-xl border-t">
            <div className="flex">
              {/* Left Menu */}
              <div
                className="w-1/4 p-6 relative text-white"
                style={{
                  backgroundColor: "#2B1E16",
                  backgroundImage: `url(${headerBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative z-10">
                  <div
                    className={`py-3 px-4 font-medium cursor-pointer transition-all duration-300 ${
                      activeTab === "tile-adhesives"
                        ? "bg-kajaria-blue-700 text-white"
                        : "hover:bg-white hover:bg-opacity-10"
                    }`}
                    onClick={() => handleTabClick("tile-adhesives")}
                  >
                    <h5 className="text-lg">Tile Adhesives</h5>
                  </div>
                  <div
                    className={`py-3 px-4 font-medium cursor-pointer transition-all duration-300 ${
                      activeTab === "grouts"
                        ? "bg-kajaria-blue-700 text-white"
                        : "hover:bg-white hover:bg-opacity-10"
                    }`}
                    onClick={() => handleTabClick("grouts")}
                  >
                    <h5 className="text-lg">Grouts</h5>
                  </div>
                  <div
                    className={`py-3 px-4 font-medium cursor-pointer transition-all duration-300 ${
                      activeTab === "tile-cleaner"
                        ? "bg-kajaria-blue-700 text-white"
                        : "hover:bg-white hover:bg-opacity-10"
                    }`}
                    onClick={() => handleTabClick("tile-cleaner")}
                  >
                    <h5 className="text-lg">Tile Cleaner</h5>
                  </div>
                  <div
                    className={`py-3 px-4 font-medium cursor-pointer transition-all duration-300 ${
                      activeTab === "tool"
                        ? "bg-kajaria-blue-700 text-white"
                        : "hover:bg-white hover:bg-opacity-10"
                    }`}
                    onClick={() => handleTabClick("tool")}
                  >
                    <h5 className="text-lg">Tools</h5>
                  </div>
                  <Link
                    to=""
                    className="floens-btn mt-6 inline-flex items-center"
                    onClick={() => setProductsMenuOpen(false)}
                  >
                    <span>Find The Right Adhesive</span>
                    <FiChevronRight className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-3/4 p-6 bg-white">
                {activeTab === "tile-adhesives" && (
                  <div className="grid grid-cols-4 gap-6">
                    {adhesiveProducts.map((item, index) => (
                      <Link
                        key={index}
                        to=""
                        className="text-center group hover:shadow-lg transition-all duration-300 p-4 rounded"
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        <div className="bg-blue-50 p-4 transition-all duration-300 group-hover:bg-blue-100">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 mx-auto object-contain mb-3"
                          />
                          <h3 className="text-xl font-bold text-kajaria-blue-900 group-hover:text-kajaria-blue-700 transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {activeTab === "grouts" && (
                  <div className="grid grid-cols-4 gap-6">
                    {groutProducts.map((item, index) => (
                      <Link
                        key={index}
                        to=""
                        className="text-center group hover:shadow-lg transition-all duration-300 p-4 rounded"
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        <div className="bg-blue-50 p-4 transition-all duration-300 group-hover:bg-blue-100">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 mx-auto object-contain mb-3"
                          />
                          <h3 className="text-xl font-bold text-kajaria-blue-900 group-hover:text-kajaria-blue-700 transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {activeTab === "tile-cleaner" && (
                  <div className="grid grid-cols-4 gap-6">
                    <Link
                      to=""
                      className="text-center group hover:shadow-lg transition-all duration-300 p-4 rounded"
                      onClick={() => setProductsMenuOpen(false)}
                    >
                      <div className="text-center group hover:shadow-lg transition-all duration-300 p-4 rounded cursor-pointer">
                        <div className="bg-blue-50 p-4 transition-all duration-300 group-hover:bg-blue-100">
                          <img
                            src={tc1Image}
                            alt="TC-1"
                            className="w-20 h-20 mx-auto object-contain mb-3"
                          />
                          <h3 className="text-xl font-bold text-kajaria-blue-900 group-hover:text-kajaria-blue-700 transition-colors duration-300">
                            TC-1
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}

                {activeTab === "tool" && (
                  <div className="grid grid-cols-4 gap-6">
                    {toolProducts.map((item, index) => (
                      <Link
                        key={index}
                        to=""
                        className="text-center group hover:shadow-lg transition-all duration-300 p-4 rounded"
                        onClick={() => setProductsMenuOpen(false)}
                      >
                        <div className="bg-blue-50 p-4 transition-all duration-300 group-hover:bg-blue-100">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-16 h-16 mx-auto object-contain mb-3"
                          />
                          <h3 className="text-sm font-bold text-kajaria-blue-900 group-hover:text-kajaria-blue-700 transition-colors duration-300">
                            {item.name}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay for mega menu */}
      {productsMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 hidden lg:block"
          onClick={() => setProductsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed right-0 top-0 w-4/5 h-full mobile-menu-bg overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-gray-700 relative z-10">
              <img
                src={logoLight}
                alt="Gresbond by kajaria logo"
                className="w-auto h-10"
              />
              <button
                className="text-white hover:text-kajaria-blue-700"
                onClick={toggleMobileMenu}
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

            <nav className="p-4 relative z-10">
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-kajaria-blue-700 block py-2"
                    onClick={toggleMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/who-we-are"
                    className="text-white hover:text-kajaria-blue-700 block py-2"
                    onClick={toggleMobileMenu}
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <details className="text-white">
                    <summary className="flex justify-between items-center py-2 cursor-pointer">
                      Products
                      <FiChevronDown />
                    </summary>
                    <ul className="pl-4 mt-2 space-y-2">
                      <li>
                        <details className="text-white">
                          <summary className="flex justify-between items-center py-2 cursor-pointer">
                            Tile Adhesives
                            <FiChevronDown />
                          </summary>
                          <ul className="pl-4 mt-2 space-y-2">
                            {adhesiveProducts.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to=""
                                  className="text-gray-300 hover:text-kajaria-blue-700 block py-1"
                                  onClick={toggleMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details className="text-white">
                          <summary className="flex justify-between items-center py-2 cursor-pointer">
                            Grouts
                            <FiChevronDown />
                          </summary>
                          <ul className="pl-4 mt-2 space-y-2">
                            {groutProducts.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to=""
                                  className="text-gray-300 hover:text-kajaria-blue-700 block py-1"
                                  onClick={toggleMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details className="text-white">
                          <summary className="flex justify-between items-center py-2 cursor-pointer">
                            Tile Cleaner
                            <FiChevronDown />
                          </summary>
                          <ul className="pl-4 mt-2 space-y-2">
                            <li>
                              <Link
                                to=""
                                className="text-gray-300 hover:text-kajaria-blue-700 block py-1"
                                onClick={toggleMobileMenu}
                              >
                                TC-1
                              </Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details className="text-white">
                          <summary className="flex justify-between items-center py-2 cursor-pointer">
                            Tools
                            <FiChevronDown />
                          </summary>
                          <ul className="pl-4 mt-2 space-y-2">
                            {toolProducts.map((item, index) => (
                              <li key={index}>
                                <Link
                                  to=""
                                  className="text-gray-300 hover:text-kajaria-blue-700 block py-1"
                                  onClick={toggleMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                {/* <li>
                  <Link
                    to="/catalogue"
                    className="text-white hover:text-kajaria-blue-700 block py-2"
                    onClick={toggleMobileMenu}
                  >
                    Download Catalogue
                  </Link>
                </li> */}
                {/* <li>
                  <details className="text-white">
                    <summary className="flex justify-between items-center py-2 cursor-pointer">
                      Explore Tools
                      <FiChevronDown />
                    </summary>
                    <ul className="pl-4 mt-2 space-y-2">
                      <li>
                        <Link
                          to="/tile-adhesive-calculator"
                          className="text-gray-300 hover:text-kajaria-blue-700 block py-1"
                          onClick={toggleMobileMenu}
                        >
                          Tile Adhesive Calculator
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/tile-adhesive-selector"
                          className="text-gray-300 hover:text-kajaria-blue-700 block py-1"
                          onClick={toggleMobileMenu}
                        >
                          Tile Adhesive Selector
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/tile-joint-filler-grout-calculator"
                          className="text-gray-300 hover:text-kajaria-blue-700 block py-1"
                          onClick={toggleMobileMenu}
                        >
                          Tile Joint Filler Calculator
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/tile-joint-filler-visualizer"
                          className="text-gray-300 hover:text-kajaria-blue-700 block py-1"
                          onClick={toggleMobileMenu}
                        >
                          Tile Joint Filler Visualizer
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li> */}
                {/* <li>
                  <Link
                    to="/where-to-buy"
                    className="text-white hover:text-kajaria-blue-700 block py-2"
                    onClick={toggleMobileMenu}
                  >
                    Where To Buy
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/contact"
                    className="text-white hover:text-kajaria-blue-700 block py-2"
                    onClick={toggleMobileMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="p-4 border-t border-gray-700 relative z-10">
              <div className="flex items-center mb-4">
                <i className="text-kajaria-blue-700 mr-2">✉</i>
                <a
                  href="mailto:info@kajariagresbond.com"
                  className="text-white hover:text-kajaria-blue-700"
                >
                  info@kajariagresbond.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="text-kajaria-blue-700 mr-2">☎</i>
                <a
                  href="tel:+1800309309"
                  className="text-white hover:text-kajaria-blue-700"
                >
                  1800 309 309
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Popup */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Search</h3>
              <button
                className="text-gray-800 hover:text-kajaria-blue-700"
                onClick={toggleSearch}
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search For Gresbond By Kajaria"
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-kajaria-blue-700"
              />
              <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div id="search-results" className="mt-4"></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
