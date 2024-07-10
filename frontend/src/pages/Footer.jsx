// Footer.js

import React from 'react';

export default function Footer({ companyInfo }) {
  return (
    <footer className="text-center text-lg-start bg-gray-100 text-gray-600">
      {/* Section: Social media */}
      <section className="flex justify-center justify-between p-4 border-b border-gray-300">
        {/* Left */}
        <div className="me-5 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-gray-600 hover:text-gray-900">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="bg-gray-200">
        <div className="container mx-auto py-5">
          {/* Grid row */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Grid column */}
            <div className="mb-4">
              {/* Content */}
              <h6 className="text-xs text-gray-600 uppercase font-bold mb-2">
                <i className="fas fa-gem me-2"></i>Company name
              </h6>
              <p className="text-sm text-gray-600">
                {companyInfo.companyName}
              </p>
              <p className="text-sm text-gray-600">
                {companyInfo.address}
              </p>
              <p className="text-sm text-gray-600">
                {companyInfo.email}
              </p>
              <p className="text-sm text-gray-600">
                {companyInfo.phone}
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="mb-4">
              {/* Links */}
              <h6 className="text-xs text-gray-600 uppercase font-bold mb-2">Products</h6>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Angular</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">React</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Vue</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Laravel</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="mb-4">
              {/* Links */}
              <h6 className="text-xs text-gray-600 uppercase font-bold mb-2">Useful links</h6>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Pricing</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Settings</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Orders</a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Help</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="mb-4">
              {/* Links */}
              <h6 className="text-xs text-gray-600 uppercase font-bold mb-2">Contact</h6>
              <p className="text-sm text-gray-600">
                <i className="fas fa-home me-2"></i> Nairobi, Nrb 44773, Kenya
              </p>
              <p className="text-sm text-gray-600">
                <i className="fas fa-envelope me-2"></i> thefourshotel@gmail.com
              </p>
              <p className="text-sm text-gray-600">
                <i className="fas fa-phone me-2"></i> + 254704372525
              </p>
              <p className="text-sm text-gray-600">
                <i className="fas fa-print me-2"></i> + 254797274881
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center py-4 bg-gray-300">
        © {new Date().getFullYear()} Copyright:
        <a href="https://mdbootstrap.com/" className="text-gray-600 font-bold">MDBootstrap.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}
