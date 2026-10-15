import React from "react";

const FixedIcon = () => {
  return (
    <div className="urban-fixed-icons d-flex flex-column gap-3">
      {/* Phone Button */}
      <a
        href="tel:+91XXXXXXXXXX"
        className="urban-fixed-btn urban-phone-btn"
        title="Call Urban Baby"
        aria-label="Call Urban Baby"
      >
        <i className="fa-solid fa-phone"></i>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20want%20to%20enquire%20about%20Urban%20Baby%20Wipes."
        target="_blank"
        rel="noopener noreferrer"
        className="urban-fixed-btn urban-whatsapp-fixed"
        title="Enquire on WhatsApp"
        aria-label="Enquire on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Back To Top */}
      <a
        href="#home"
        className="urban-fixed-btn urban-back-top-btn"
        title="Back to Top"
        aria-label="Back to Top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default FixedIcon;
