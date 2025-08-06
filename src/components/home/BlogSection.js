import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { FiArrowRight } from 'react-icons/fi';

// Import blog images
import blog3Image from '../../assets/images/blog/blog-3-f.webp';

const BlogSection = () => {
  const blogs = [
    {
      id: 3,
      title: "Reasons for Cracks in Marble Flooring",
      image: blog3Image,
      day: "8",
      month: "june",
      link: "/blog/cracks-reason-marble-flooring"
    }
  ];

  return (
    <section className="section-space-two bg-white ">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <div className="sec-title" data-aos="fade-up">
              <h6 className="sec-title__tagline">Blogs</h6>
              <h3 className="sec-title__title">See Latest Blogs</h3>
            </div>
          </div>
          <div className="hidden lg:block">
            <Link to="" className="floens-btn floens-btn--border inline-flex items-center">
              <span>view all</span>
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id}
              className="group"
              data-aos="fade-up" 
              data-aos-duration="1500" 
              data-aos-delay={index * 200}
            >
              {/* Content Section with Light Blue Background */}
              <div className="bg-kajaria-blue-100 p-6 rounded-t-lg shadow-lg">
                <h3 className="text-xl font-bold text-kajaria-blue-900 leading-tight">
                  <Link 
                    to="" 
                    className="hover:text-kajaria-blue-700 transition-colors duration-300"
                  >
                    {blog.title}
                  </Link>
                </h3>
              </div>
              
              {/* Image Section */}
              <div className="relative rounded-b-lg overflow-hidden shadow-lg">
                <img 
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Link 
                  to=""
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"
                >
                  <span className="sr-only">{blog.title}</span>
                </Link>
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-kajaria-blue-700 text-white text-center px-3 py-2 rounded shadow-lg">
                  <span className="block text-xl font-bold leading-none">{blog.day}</span>
                  <span className="block text-xs uppercase mt-1">{blog.month}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="lg:hidden mt-8 text-center">
          <Link to="" className="floens-btn floens-btn--border inline-flex items-center">
            <span>view all</span>
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection; 