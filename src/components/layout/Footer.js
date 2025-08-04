import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import logoLight from "../../assets/images/logo/logo-light.webp";
const Footer = () => {
  return (
    <footer className="bg-kajaria-blue-900 text-white bg-[url('../../assets/images/shapes/footer-bg-1-1.png')] bg-cover bg-center">
      {/* Footer Top */}
      <div className="container mx-auto px-4 pt-16 pb-10 relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <Link to="/" className="block mb-6">
              <img src={logoLight} alt="Gresbond logo" className="w-40" />
            </Link>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.app.goo.gl/Eh2kE9VpznEKsW7P9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-kajaria-blue-300 transition-colors"
                >
                  J1/B1 (Extn.), Mohan Co - op Industrial Estate, Mathura Road,
                  New Delhi - 110044
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kajariagresbond.com"
                  className="flex items-center hover:text-kajaria-blue-300 transition-colors"
                >
                  <span className="mr-2">✉</span> info@kajariagresbond.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1800309309"
                  className="flex items-center hover:text-kajaria-blue-300 transition-colors"
                >
                  <span className="mr-2">☎</span> 1800 120 100
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-6">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  Rewards Points
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  Laying Instructions
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  Video Gallery
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  Advantage of Gresbond
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Tile Adhesives */}
          <div>
            <h2 className="text-xl font-bold mb-6">Tile Adhesives</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  CX-1
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  CX-2 White
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  VX-1
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  VX-2 White
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  EX-5
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  PUA-100
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  LX-7
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  LX-7 Super Flex
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Grouts & Map */}
          <div>
            <h2 className="text-xl font-bold mb-6">Grouts</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  KE-100 Duet
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  KE-100
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  KE-100 Glitter
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  Unsanded Grout
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  KGA-01 Grout Admix
                </Link>
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4 mt-6">Tile Cleaner</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  TC-1
                </Link>
              </li>
            </ul>

            {/* Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d112195.21693887505!2d77.298307!3d28.506623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce775cee6ba19%3A0x5b6b82731b77bbdb!2sGres%20Bond%20By%20Kajaria%20-%20Head%20Office!5e0!3m2!1sen!2sin!4v1731503841064!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gresbond Corporate Office"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 py-6 border-t border-kajaria-blue-700 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/GresbondByKajaria"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/gresbond"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/gresbondbykajaria"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@GresBondbyKajaria"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/gres-bond-by-kajaria/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://in.pinterest.com/gresbondbykajaria/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaPinterest />
            </a>
          </div>

          <p>
            &copy; Copyright {new Date().getFullYear()} by Gresbond by Kajaria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
