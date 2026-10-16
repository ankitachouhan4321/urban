import React, { useState } from "react";

// Replace with the email that should receive Urban Baby enquiries
const CONTACT_EMAIL = "ankitachouhan4585@gmail.com";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  enquiryType: "",
  company: "",
  city: "",
  quantity: "",
  message: "",
  website: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (CONTACT_EMAIL === "ankitachouhan4585@gmail.com") {
      setStatus({
        type: "danger",
        message: "Please configure the enquiry email address.",
      });
      return;
    }

    // Honeypot to reduce automated submissions
    if (formData.website) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const form = new FormData();

    form.append("_subject", `Urban Baby Enquiry - ${formData.name}`);
    form.append("_template", "table");
    form.append("_captcha", "false");
    form.append("_honey", formData.website);

    form.append("Full Name", formData.name);
    form.append("Phone Number", formData.phone);
    form.append("Email Address", formData.email);
    form.append("Enquiry Type", formData.enquiryType);
    form.append("Company Name", formData.company || "Not Provided");
    form.append("City", formData.city || "Not Provided");
    form.append("Required Quantity", formData.quantity || "Not Specified");
    form.append("Message", formData.message);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          body: form,
          headers: {
            Accept: "application/json",
          },
        },
      );

      const result = await response.json();

      if (
        response.ok &&
        (result.success === "true" || result.success === true)
      ) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been sent successfully. The Urban Baby team will get in touch with you.",
        });

        setFormData(initialFormData);
      } else {
        throw new Error(result.message || "Unable to submit your enquiry.");
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "danger",
        message:
          "Sorry, we couldn't send your enquiry. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Page Heading */}
      {/* <section className="urban-contact-banner py-5">
        <div className="container-lg text-center">
          <span className="urban-product-subtitle text-uppercase fw-semibold">
            We're Here to Help
          </span>

          <h1 className="urban-product-heading fw-bold mt-2 mb-3">
            Contact Urban Baby
          </h1>

          <p className="mb-0 text-secondary">
            Have questions about Urban Baby Wet Wipes? We'd love to hear from
            you.
          </p>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="urban-contact-section py-5" id="contact">
        <div className="container-lg py-lg-4">
          <div className="row g-4 g-lg-5">
            {/* Left Information */}
            <div className="col-lg-5">
              <div className="urban-contact-content h-100">
                <span className="urban-product-subtitle text-uppercase fw-semibold">
                  Let's Connect
                </span>

                <h2 className="urban-product-heading fw-bold mt-2 mb-3">
                  Let's Talk About Your Baby Wipes Requirements
                </h2>

                <p className="text-secondary lh-lg mb-4">
                  Urban Baby is a manufacturer and supplier of baby wet wipes.
                  Whether you want product information, need baby wipes in bulk,
                  or are interested in becoming a distributor, our team is here
                  to help. Share your requirements and we'll get back to you.
                </p>

                {/* Contact Methods */}
                <div className="d-flex gap-3 mb-4">
                  <div className="urban-contact-icon flex-shrink-0">
                    <i className="fa-solid fa-box-open"></i>
                  </div>

                  <div>
                    <h3 className="h6 fw-bold mb-2">Product Enquiries</h3>

                    <p className="text-secondary small mb-0">
                      Ask about Urban Baby Wet Wipes, ingredients, packaging,
                      wipe count, and product availability.
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3 mb-4">
                  <div className="urban-contact-icon flex-shrink-0">
                    <i className="fa-solid fa-truck-fast"></i>
                  </div>

                  <div>
                    <h3 className="h6 fw-bold mb-2">Bulk Orders & Wholesale</h3>

                    <p className="text-secondary small mb-0">
                      Looking for a baby wet wipes supplier? Send us your
                      quantity and supply requirements for further discussion.
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3 mb-4">
                  <div className="urban-contact-icon flex-shrink-0">
                    <i className="fa-solid fa-handshake"></i>
                  </div>

                  <div>
                    <h3 className="h6 fw-bold mb-2">Distributor Enquiries</h3>

                    <p className="text-secondary small mb-0">
                      Interested in distributing Urban Baby products? Contact
                      our team to discuss possible business opportunities.
                    </p>
                  </div>
                </div>

                <div className="urban-contact-note rounded-3 p-3">
                  <i className="fa-solid fa-circle-info me-2"></i>
                  Please share accurate contact details so our team can respond
                  to your enquiry.
                </div>
              </div>
            </div>

            {/* Right Enquiry Form */}
            <div className="col-lg-7">
              <div className="urban-contact-form p-4 p-lg-5">
                <h2 className="h4 fw-bold mb-2">Send Us an Enquiry</h2>

                <p className="text-secondary small mb-4">
                  Fill in the details below and our team will contact you
                  regarding your enquiry.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Hidden Honeypot */}
                  <div className="visually-hidden" aria-hidden="true">
                    <label htmlFor="contact-website">
                      Leave this field empty
                    </label>
                    <input
                      id="contact-website"
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <label htmlFor="contact-name" className="form-label">
                        Full Name *
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                      <label htmlFor="contact-phone" className="form-label">
                        Phone Number *
                      </label>

                      <input
                        id="contact-phone"
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        autoComplete="tel"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label htmlFor="contact-email" className="form-label">
                        Email Address *
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                      />
                    </div>

                    {/* Enquiry Type */}
                    <div className="col-md-6">
                      <label htmlFor="contact-type" className="form-label">
                        Enquiry Type *
                      </label>

                      <select
                        id="contact-type"
                        className="form-select"
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Enquiry Type</option>
                        <option value="Product Enquiry">Product Enquiry</option>
                        <option value="Bulk Order">
                          Bulk Order / Wholesale
                        </option>
                        <option value="Distributorship">Distributorship</option>
                        <option value="Retail Enquiry">Retail Enquiry</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    {/* Company */}
                    <div className="col-md-6">
                      <label htmlFor="contact-company" className="form-label">
                        Company / Shop Name
                      </label>

                      <input
                        id="contact-company"
                        type="text"
                        className="form-control"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name (optional)"
                        autoComplete="organization"
                      />
                    </div>

                    {/* City */}
                    <div className="col-md-6">
                      <label htmlFor="contact-city" className="form-label">
                        City / Location
                      </label>

                      <input
                        id="contact-city"
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                        autoComplete="address-level2"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="col-12">
                      <label htmlFor="contact-quantity" className="form-label">
                        Required Quantity (Optional)
                      </label>

                      <input
                        id="contact-quantity"
                        type="text"
                        className="form-control"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 packs"
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label htmlFor="contact-message" className="form-label">
                        Your Message *
                      </label>

                      <textarea
                        id="contact-message"
                        className="form-control"
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your baby wipes requirements..."
                        required
                      ></textarea>
                    </div>

                    {/* Submission Feedback */}
                    {status.message && (
                      <div className="col-12">
                        <div
                          className={`alert alert-${status.type} mb-0`}
                          role="status"
                          aria-live="polite"
                        >
                          {status.message}
                        </div>
                      </div>
                    )}

                    {/* Submit */}
                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn urban-contact-submit px-4 py-3 rounded-pill fw-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending Enquiry..." : "Submit Enquiry"}

                        {!isSubmitting && (
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
