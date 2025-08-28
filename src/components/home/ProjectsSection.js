import React from 'react';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Container from '../ui/Container';
// import SectionHeader from '../ui/SectionHeader';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import project images
import project1 from '../../assets/images/works/project-2-1.jpg';
import project2 from '../../assets/images/works/project-2-2.jpg';
import project3 from '../../assets/images/works/project-2-3.jpg';
import project4 from '../../assets/images/works/project-2-5.jpg';
import projectsBg from '../../assets/images/backgrounds/projects-bg-2.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Corridor - Floor Slabs Installed in Gurugram",
      image: project1,
      category: "corridor area"
    },
    {
      id: 2,
      title: "Bathroom - Wall & Floor Tiles Installed in Delhi",
      image: project2,
      category: "bathroom area"
    },
    {
      id: 3,
      title: "Lounge - Floor Tiles Installed in Mumbai",
      image: project3,
      category: "living room area",
      large: true
    },
    {
      id: 4,
      title: "Office - Floor Slabs Installed in Noida",
      image: project4,
      category: "office reception area"
    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          margin: 30
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          margin: 30
        }
      }
    ]
  };

  return (
    <section className="section-space-bottom pt-56 pb-16 relative">
      {/* Background with Parallax Effect */}
      <div 
        className="projects-two__bg absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${projectsBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <Container className="relative z-10">
        {/* Section Title */}
        <div className="sec-title sec-title--center text-center mb-12" data-aos="fade-up">
          <h6 className="sec-title__tagline !text-white">Our prestigious projects</h6>
          <h3 className="sec-title__title !text-white">Showcasing our landmark achievements in premium projects.</h3>
        </div>
      </Container>

      {/* Projects Slider */}
      <div className="container-fluid px-4 relative z-10">
        <div className="projects-two__carousel" data-aos="fade-up" data-aos-delay="100">
          <Slider {...sliderSettings}>
            {projects.map((project) => (
              <div key={project.id} className="item px-4">
                <div className={`project-card group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${project.large ? 'project-card--large' : ''}`}>
                  <img 
                    src={project.image}
                    alt={project.category}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="project-card__content absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
                    <div className="project-card__links p-6 w-full">
                      <div className="project-card__links__inner">
                        <h3 className="project-card__title text-white text-lg font-bold leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
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
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-kajaria-blue-700 hover:text-white transition-all duration-300"
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
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-kajaria-blue-700 hover:text-white transition-all duration-300"
      onClick={onClick}
      aria-label="Next"
    >
      <FiChevronRight className="text-xl" />
    </button>
  );
};

export default ProjectsSection; 