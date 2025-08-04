import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import product images
import lx7Image from "../../assets/images/menu/lx-7.webp";
import lx7SuperFlexImage from "../../assets/images/menu/lx-7-super-flex.png";
import cx1Image from "../../assets/images/menu/cx-1.webp";
import cx2Image from "../../assets/images/menu/cx-2.webp";
import vx1Image from "../../assets/images/menu/vx-1.webp";
import vx2Image from "../../assets/images/menu/vx-2.webp";
import ex5Image from "../../assets/images/menu/ex-5.webp";
import pua100Image from "../../assets/images/menu/ea-100.webp";
import serviceBg from "../../assets/images/services/service-bg-2-1.png";

const ProductsSlider = () => {
  const sliderRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "LX 7",
      image: lx7Image,
      // link: '/lx-7'
    },
    {
      id: 2,
      name: "LX 7 Super Flex",
      image: lx7SuperFlexImage,
      // link: '/lx-7-super-flex'
    },
    {
      id: 3,
      name: "CX 1",
      image: cx1Image,
      // link: '/cx-1'
    },
    {
      id: 4,
      name: "CX 2",
      image: cx2Image,
      // link: '/cx-2'
    },
    {
      id: 5,
      name: "VX 1",
      image: vx1Image,
      // link: '/vx-1'
    },
    {
      id: 6,
      name: "VX 2",
      image: vx2Image,
      // link: '/vx-2'
    },
    {
      id: 7,
      name: "EX 5",
      image: ex5Image,
      // link: '/ex-5'
    },
    {
      id: 8,
      name: "PUA 100",
      image: pua100Image,
      // link: '/pua-100'
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    // slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 600,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          margin: 30,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          margin: 30,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          margin: 30,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          margin: 30,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          margin: 30,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          margin: 15,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          margin: 15,
        },
      },
    ],
  };

  return (
    <section className="section-space-two bg-white">
      <Container>
        {/* Section Title */}
        <div className="sec-title mb-12" data-aos="fade-up">
          <h6 className="sec-title__tagline">products</h6>
          <h3 className="sec-title__title">
            Strengthen Your Tiles with Premium Adhesives
          </h3>
          <div className="flex justify-center">
            <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} /> <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>
      </Container>

      {/* Products Slider */}
      <div className="container-fluid px-4">
        <div
          className="services-two__carousel"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Slider ref={sliderRef} {...sliderSettings}>
            {products.map((product) => (
              <div key={product.id} className="item px-4">
                <Link to="" className="block">
                  <div className="service-card-two group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
                    {/* Background Pattern */}
                    <div
                      className="service-card-two__bg"
                      style={{ backgroundImage: `url(${serviceBg})` }}
                    ></div>

                    {/* Product Image */}
                    <div className="service-card-two__image">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Product Content */}
                    <div className="service-card-two__content p-6 pt-0 relative z-10 text-center">
                      <h3 className="service-card-two__title text-2xl font-bold text-kajaria-blue-900 group-hover:text-kajaria-blue-700 transition-colors duration-300">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className=" transform w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-kajaria-blue-700 hover:text-white transition-all duration-300"
      onClick={onClick}
      aria-label="Previous"
    >
      <FiChevronLeft className="text-xl" />
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className="transform  w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-kajaria-blue-700 hover:text-white transition-all duration-300"
      onClick={onClick}
      aria-label="Next"
    >
      <FiChevronRight className="text-xl" />
    </button>
  );
};

export default ProductsSlider;
