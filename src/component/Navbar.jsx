import React, { useState } from "react";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const navItems = [
    { name: "Home", id: "/" },
    { name: "About Us", id: "about-sec" },
    { name: "Baby Wipes", id: "products" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleNavigation = (id) => {
    setActiveLink(id);

    const navbarCollapse = document.getElementById("urbanBabyNavbar");

    if (navbarCollapse?.classList.contains("show")) {
      const bsCollapse = window.bootstrap?.Collapse.getInstance(navbarCollapse);

      bsCollapse?.hide();
    }
  };

  return (
    <header className="urban-header sticky-top">
      {/* Top Announcement Bar */}
      <div className="urban-topbar text-center">
        <div className="container-lg">
          <span>
            <i className="bi bi-heart-fill me-2"></i>
            Urban Baby – Soft Touch, Gentle Care, Happy Little Smiles!
            <i className="bi bi-heart-fill ms-2"></i>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg urban-navbar">
        <div className="container-lg">
          {/* Logo */}
          <a
            className="navbar-brand urban-logo"
            href="#home"
            onClick={() => handleNavigation("home")}
          >
            <img
              src="/img/logo.png"
              alt="Urban Baby Logo"
              className="img-fluid"
            />
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler urban-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#urbanBabyNavbar"
            aria-controls="urbanBabyNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Menu */}
          <div className="collapse navbar-collapse" id="urbanBabyNavbar">
            <ul className="navbar-nav mx-auto align-items-lg-center">
              {navItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    className={`nav-link urban-nav-link ${
                      activeLink === item.id ? "active" : ""
                    }`}
                    href={`#${item.id}`}
                    onClick={() => handleNavigation(item.id)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right CTA */}
            <div className="urban-nav-actions d-flex align-items-center">
              <a
                href="#products"
                className="urban-shop-btn text-decoration-none"
                onClick={() => handleNavigation("products")}
              >
                Shop Now
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
