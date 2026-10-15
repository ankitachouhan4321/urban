import React from "react";

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "Our Products", link: "products" },
  { name: "About Us", link: "about-sec" },
  { name: "Contact Us", link: "contact" },
];

const policyLinks = [
  { name: "Baby Wipes", link: "products" },
  
];

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

                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6 col-6">
              <h3 className="urban-footer-title">USEFUL LINKS</h3>

              <ul className="list-unstyled urban-footer-links">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>
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
                {policyLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>
                      <i className="fa-solid fa-arrow-right me-2"></i>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-6">
              <h3 className="urban-footer-title">CONTACT INFO</h3>

              <ul className="list-unstyled urban-footer-contact">
                <li className="d-flex gap-3">
                  <i className="fa-solid fa-location-dot mt-1"></i>
                  <span>New Delhi, Delhi, India</span>
                </li>

                <li className="d-flex gap-3">
                  <i className="fa-solid fa-phone mt-1"></i>
                  <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
                </li>

                <li className="d-flex gap-3">
                  <i className="fa-solid fa-envelope mt-1"></i>
                  <a href="mailto:abc@gmail.com">
                    abc@gmail.com
                  </a>
                </li>

                <li className="d-flex gap-3">
                  <i className="fa-solid fa-clock mt-1"></i>
                  <span>9am to 6pm</span>
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
              <a href="#home" className="urban-back-top">
                Back to Top
                <i className="fa-solid fa-arrow-up ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
