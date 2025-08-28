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
import logoLight from "../../assets/images/logo/Lexora-logo.png";
import footerBg from "../../assets/images/shapes/footer-bg-1-1.png";
const Footer = () => {
  return (
    <footer 
      className="bg-kajaria-blue-900 text-white" 
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Footer Top */}
      <div className="container mx-auto px-4 pt-16 pb-10 relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <Link to="/" className="block mb-6">
              <img src={logoLight} alt="Lexora logo" className="w-40" />
            </Link>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.app.goo.gl/5GRkaCv5VMG7VDsf7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-kajaria-blue-300 transition-colors"
                >
                  Lexora chembond LLP, <br />
                  Lalpar Industrial Estate-9, Nr. 8 A national highway, lalpar, <br />
                  Morbi-363642.
                </a>
              </li>
              <li>
                <a
                  href="mailto:lexorachembond@gmail.com"
                  className="flex items-center hover:text-kajaria-blue-300 transition-colors"
                >
                  <span className="mr-2">✉</span> lexorachembond@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8758435000"
                  className="flex items-center hover:text-kajaria-blue-300 transition-colors"
                >
                  <span className="mr-2">☎</span> 8758435000
                </a>
                <a
                  href="tel:+8758434000"
                  className="flex items-center hover:text-kajaria-blue-300 transition-colors"
                >
                  <span className="mr-2">☎</span> 8758434000
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
                  to="/catalog"
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/#blog-section"
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
                  Laying Instructions
                </Link>
              </li>
              <li>
                <Link
                  to="/#video-section"
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
                  Advantage of Lexora
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
                  to="/lx-1"
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  LX-1
                </Link>
              </li>
              <li>
                <Link
                  to="/lx-2"
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  LX-2
                </Link>
              </li>
              <li>
                <Link
                  to="/lx-3"
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  LX-3
                </Link>
              </li>
              <li>
                <Link
                  to="/lx-3-white"
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  LX-3 White
                </Link>
              </li>
              <li>
                <Link
                  to="/lx-4"
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  LX-4
                </Link>
              </li>
              <li>
                <Link
                  to="/lx-4-white"
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  LX-4 White
                </Link>
              </li>
              <li>
                <Link
                  to="/pu-l29"
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  PU-L29
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  Joint Filler
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
                  Epoxy Grout
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  Grout Admix
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  Tile Grout
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
              <li>
                <Link
                  to=""
                  className="hover:text-kajaria-blue-300 transition-colors"
                >
                  TC-2
                </Link>
              </li>
            </ul>

            {/* Map */}
            <div className="mt-6">
              <iframe
                src="
                https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.047431951008!2d70.88883877513365!3d22.800706279329923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d000877c079%3A0x9da77e2b5a55dd01!2sLEXORA%20CHEMBOND%20LLP!5e0!3m2!1sen!2sin!4v1754502849076!5m2!1sen!2sin
                "
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lexora Corporate Office"
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
              href="https://www.facebook.com/share/178rfuAbU9/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/lexora_chembond?igsh=MXNreTRlaHpldndxdw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@lexorachembond"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-kajaria-blue-800 hover:bg-kajaria-blue-600 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <p>
            &copy; Copyright {new Date().getFullYear()} by Lexora
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
