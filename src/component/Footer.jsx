import React, { useState } from "react";

const quickLinks = [
  { name: "Home", Id: "/" },
  { name: "About Us", Id: "about-sec" },
  { name: "Why Choose Us", Id: "why-choose-us" },
  { name: "Our Products", Id: "products" },
  { name: "Contact Us", Id: "contact" },
];

const policyLinks = [{ name: "Baby Wipes", Id: "products" }];


const handleScroll = (e, id) => {
  e.preventDefault();

  const element = document.getElementById(id);

  if (!element) {
    console.log(`Section not found: ${id}`);
    return;
  }

  const header = document.querySelector(".urban-header");

  const headerHeight = header ? header.getBoundingClientRect().height : 100;

  const targetPosition =
    element.getBoundingClientRect().top + window.scrollY - headerHeight - 15;

  window.scrollTo({
    top: Math.max(0, targetPosition),
    behavior: "smooth",
  });
};


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="urban-footer pt-5" id="contact">
      <div className="container-lg">
        <div className="urban-footer-top">
          {/* Footer Main Content */}
          <div className="row g-4 g-lg-5">
            {/* About Urban Baby */}
            <div className="col-lg-4 col-md-6">
              <div className="urban-footer-about">
                <div className="col-lg-6">
                  <img src="/img/logo-white.png" className="img-fluid" />
                </div>

                <p className="urban-footer-description">
                  At Urban Baby, we believe everyday baby care should be simple
                  and convenient. Our baby wet wipes are a practical addition to
                  daily cleaning routines, helping parents care for their little
                  ones at home and on the go.
                </p>

                {/* Social Media */}
                <div className="d-flex align-items-center gap-3 urban-footer-social">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>

                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6 col-6">
              <h3 className="urban-footer-title">USEFUL LINKS</h3>

              <ul className="list-unstyled urban-footer-links">
                {quickLinks.map((item) => (
                  <li key={item.Id}>
                    <a
                      href={`#${item.Id}`}
                      onClick={(e) => handleScroll(e, item.Id)}
                    >
                      <i className="fa-solid fa-arrow-right me-2"></i>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policy Links */}
            <div className="col-lg-2 col-md-6 col-6">
              <h3 className="urban-footer-title">Our Products</h3>

              <ul className="list-unstyled urban-footer-links">
                {policyLinks.map((item) => (
                  <li key={item.Id}>
                    <a
                      href={`#${item.Id}`}
                      onClick={(e) => handleScroll(e, item.Id)}
                    >
                      <i className="fa-solid fa-arrow-right me-2"></i>
                      {item.name}
                    </a>
                  </li>
                ))}

                {/* {policyLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.Id}>
                      <i className="fa-solid fa-arrow-right me-2"></i>
                      {item.name}
                    </a>
                  </li>
                ))} */}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-6">
              <h3 className="urban-footer-title">CONTACT INFO</h3>

              <ul className="list-unstyled urban-footer-contact">
                <li className="d-flex gap-3">
                  <i className="fa-solid fa-phone mt-1"></i>
                  <a href="tel:+919654596530">+91 96545 96530</a>
                </li>

                <li className="d-flex gap-3">
                  <i className="fa-solid fa-envelope mt-1"></i>
                  <a href="mailto:urbanbabyproducts@gmail.com">
                    urbanbabyproducts@gmail.com
                  </a>
                </li>

                <li className="d-flex gap-3">
                  <i className="fa-solid fa-clock mt-1"></i>
                  <span>9am to 6pm</span>
                </li>
                <li className="d-flex gap-3">
                  <i className="fa-solid fa-location-dot mt-1"></i>
                  <span>
                    <b> M/s C2A Enterprise Pvt. Ltd. <br/></b> 
                    A-94, Basement, Mayapuri Industrial Area, Phase 2, New Delhi
                    – 110064.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <br />
        </div>

        {/* Copyright */}
        <div className="urban-footer-bottom py-4">
          <div className="row align-items-center g-2">
            <div className="col-md-8 text-center text-md-start">
              <p className="mb-0">
                © {currentYear} Urban Baby. All Rights Reserved.
              </p>
            </div>

            <div className="col-md-4 text-center text-md-end">
              <p>
                Created by{" "}
                <a href="https://viraladsmedia.com/"> Viral Ads Media </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
