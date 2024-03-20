import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="footer-bottom">
      <div className="text-lg font-semibold">
        <p className="copyright">© 2024 Hash It Out. </p>
      </div>
        <p>All rights reserved.</p>
      </div>
        <div className="footer-col">
          <h4 className="text-lg font-semibold">Company</h4>
          <ul className="mt-4">
            <li><Link to="/terms" className="hover:text-gray-400">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <ul className="mt-4">
            <li><a href="mailto:beat.vibes.event@gmail.com" className="hover:text-gray-400">hashitout.gifts@gmail.com</a></li>
            <li><a href="tel:9876543210" className="hover:text-gray-400">9876543210</a></li>
          </ul>
        </div>
        <div className="footer-col flex items-center justify-center">
          <h4 className="text-lg font-semibold mr-4">Follow Us</h4>
          <div className="social-links flex space-x-4">
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer"><Facebook className="text-white w-6 h-6 hover:text-gray-400" /></a>
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fedit%2F%3F__coig_login%3D1" target="_blank" rel="noopener noreferrer"><Instagram className="text-white w-6 h-6 hover:text-gray-400" /></a>
            <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Flogin&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F%3Flogin&osid=1&passive=1209600&service=mail&ifkv=AYZoVhdctsQ6bd8rWj3edd492pzxTJEKzQfj_fR5Pl9j6qojazlJdsLY-9cEU2mjW1CCSaJKGupeZw&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" rel="noopener noreferrer"><Mail className="text-white w-6 h-6 hover:text-gray-400" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
