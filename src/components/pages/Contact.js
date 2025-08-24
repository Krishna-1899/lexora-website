import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';

// Import background image
import pageHeaderBg from '../../assets/images/backgrounds/page-header-bg-1-1.png';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pincode: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        pincode: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
          <Layout>
        {/* Page Header */}
        <section 
          className="relative py-24 bg-kajaria-blue-200"
          style={{ 
            backgroundImage: `url(${pageHeaderBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-kajaria-blue-50 mb-6 text-center">Contact Us</h2>
          <nav className="flex items-center text-kajaria-blue-50 justify-center">
            <Link to="/" className="flex items-center hover:text-blue-200 transition-colors">
              <i className="icon-home mr-2"></i>
              Home
            </Link>
            <span className="mx-3">/</span>
            <span>Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        {/* Background removed - image file does not exist */}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <div className="sec-title sec-title--border mb-12">
                <h6 className="sec-title__tagline">contact</h6>
                <h3 className="sec-title__title">Reach out & connect with us</h3>
              </div>

              <p className="text-gray-700 mb-8 text-lg">
                For enquiry regarding Adhesives, Grouts & Tile Cleaner, Please Contact
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <i className="icon-phone-call text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Call Us</p>
                      <a 
                        href="tel:8758435000" 
                        className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                        title="call now"
                      >
                        8758435000
                      </a>
                      <a 
                        href="tel:8758434000" 
                        className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                        title="call now"
                      >
                        8758434000
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-600 hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <i className="icon-paper-plane text-green-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Email Us</p>
                      <a 
                        href="mailto:lexorachembond@gmail.com" 
                        className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors"
                        title="mail now"
                      >
                        lexorachembond@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-600 hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <i className="icon-location text-orange-600 text-xl"></i>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm mb-1">Visit Us</p>
                      <address className="text-lg font-semibold text-gray-900 not-italic leading-relaxed">
                        <a 
                          href="https://www.google.com/maps/place/LEXORA+CHEMBOND+LLP/@22.800706,70.891414,16z/data=!4m6!3m5!1s0x39598d000877c079:0x9da77e2b5a55dd01!8m2!3d22.8007063!4d70.8914137!16s%2Fg%2F11xrv6wf10?hl=en&entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-orange-600 transition-colors"
                          title="Visit this Location"
                        >
                          Industrial Estate 9, nr. solo sanitaryware, <br />
                          Lalpar, Morbi, Gujarat 363642
                        </a>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8 relative overflow-hidden">
                {/* Background removed - image file does not exist */}
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      Get in touch with us and enjoy<br />
                      Top-notch support
                    </h2>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email ID"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Pincode */}
                    <div>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="Enter Your Pincode"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Interest */}
                    <div>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      >
                        <option value="">Select Your Interest</option>
                        <option value="To buying products">To buying products</option>
                        <option value="To take dealership">To take dealership</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Write message"
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="floens-btn w-full text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        {!isSubmitting && <i className="icon-right-arrow ml-2"></i>}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-0">
        <div className="container-fluid px-0">
          <div className="w-full h-96">
            <iframe
              title="Lexora Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.047431951008!2d70.88883877513365!3d22.800706279329923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d000877c079%3A0x9da77e2b5a55dd01!2sLEXORA%20CHEMBOND%20LLP!5e0!3m2!1sen!2sin!4v1754502849076!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;