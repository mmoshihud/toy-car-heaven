import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaRegStar,
  FaStar,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto">
        <div className="lg:grid-cols-auto footer grid-cols-2 py-10 sm:grid-cols-4 md:py-16">
          <div>
            <span className="footer-title">Explore</span>
            <Link to="/about-us" className="link-hover link">
              About Us
            </Link>
            <a href="#" className="link-hover link">
              Marketing
            </a>
            <a href="#" className="link-hover link">
              Contact Us
            </a>
            <a href="#" className="link-hover link">
              FAQ
            </a>
          </div>
          <div>
            <span className="footer-title">Shop by Category</span>
            <a href="#" className="link-hover link">
              Action Movie Cars
            </a>
            <a href="#" className="link-hover link">
              Sports Car
            </a>
            <a href="#" className="link-hover link">
              Wagon Cars
            </a>
            <a href="#" className="link-hover link">
              Outdoor Toys
            </a>
          </div>
          <div>
            <span className="footer-title">Customer Service</span>

            <a href="#" className="link-hover link">
              Returns and Exchanges
            </a>
            <a href="#" className="link-hover link">
              Privacy Policy
            </a>
            <a href="#" className="link-hover link">
              Terms and Conditions
            </a>
            <a href="#" className="link-hover link">
              Track Your Order
            </a>
          </div>
          <div>
            <span className="footer-title">Stay Connected</span>
            <a href="#" className="link-hover block">
              <FaFacebook />
            </a>
            <a href="#" className="link-hover link">
              <FaInstagram />
            </a>
            <a href="#" className="link-hover link">
              <FaWhatsapp />
            </a>
            <a href="#" className="link-hover link">
              <FaTwitter />
            </a>
          </div>
          <div className="col-span-full w-full md:col-auto">
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="user@site.com"
                  className="input-bordered input w-full pr-16"
                />
                <button className="btn-primary btn absolute right-0 top-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 border-t border-base-300 py-4 sm:flex-row">
          <div className="flex-grow text-center sm:text-start">
            <p>
              © 2022 Toy Car Heaven, Inc. All rights reserved. Developed by Mosh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
