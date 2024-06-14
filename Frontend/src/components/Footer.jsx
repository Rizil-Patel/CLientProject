import React from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8 px-4 dark:bg-slate-800 dark:text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center"> {/* Added `items-center` for vertical alignment */}
        <div className="footer__social mb-8 md:mb-0">
          <p className="text-lg font-medium mb-4">Get connected with us on social networks:</p>
          <div className="flex items-center space-x-4 mb-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </a>
            <a  href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-500" />
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="text-2xl hover:text-red-500" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-purple-500" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-700" />
            </a>
            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 mb-4 md:grid-cols-4 gap-4 mb-6 md:mb-0">
          <section className="footer__section">
            <h3 className="text-lg font-medium mb-2">COMPANY NAME</h3>
            <p className="text-sm">
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </section>
          <section className="footer__section">
            <h3 className="text-lg font-medium mb-2">PRODUCTS</h3>
            <ul className="text-sm space-y-1">
              <li>Angular</li>
              <li>React</li>
              <li>Vue</li>
              <li>Laravel</li>
            </ul>
          </section>
          <section className="footer__section">
            <h3 className="text-lg font-medium mb-2">USEFUL LINKS</h3>
            <ul className="text-sm space-y-1">
              <li>Pricing</li>
              <li>Settings</li>
              <li>Orders</li>
              <li>Help</li>
            </ul>
          </section>
          <section className="footer__section">
            <h3 className="text-lg font-medium mb-2">CONTACT</h3>
            <ul className="text-sm space-y-1">
              <li>New York, NY 10012, US</li>
              <li>info@example.com</li>
              <li>+ 01 234 567 88</li>
              <li>+ 01 234 567 89</li>
            </ul>
          </section>
        </div>
      </div>
      <div className="text-center text-sm pt-4">
        <p>&copy; All Right Reserved. Mygroup of Company Developed by <a href="https://mdbootstrap.com/" className="text-blue-500 hover:text-blue-700">My Group</a></p>
      </div>
    </footer>
  );
};

export default Footer;
