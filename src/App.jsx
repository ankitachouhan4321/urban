import React, { useRef, useEffect } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import FixedIcon from "./component/FixedIcon";
import Contact from "./component/Contact";
import AOS from "aos";
import "aos/dist/aos.css";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";



const slides = [
  {
    id: 1,
    image: "/img/banner1.png",
    alt: "Urban Baby Wipes Banner 1",
  },
  {
    id: 2,
    image: "/img/banner2.png",
    alt: "Urban Baby Wipes Banner 2",
  }
 
];

const slides2 = [
  {
    id: 1,
    image: "/img/banner1-short.png",
    alt: "Urban Baby Wipes Banner 1",
  },
  {
    id: 2,
    image: "/img/banner2-short.png",
    alt: "Urban Baby Wipes Banner 2",
  },
];



const advantages = [
  {
    icon: "fa-solid fa-droplet",
    title: "99% Pure Water",
    description: "Water-Based Baby Care",
  },
  {
    icon: "fa-solid fa-leaf",
    title: "Alcohol Free",
    description: "Gentle Everyday Cleaning",
  },
  {
    icon: "fa-solid fa-flask",
    title: "Paraben Free",
    description: "Made for Little Ones",
  },
  {
    icon: "fa-solid fa-seedling",
    title: "Aloe Vera & Vitamin E",
    description: "Enriched with Care",
  },
];



const productInfo = [
  {
    icon: "fa-solid fa-droplet",
    title: "99% Pure Water",
    value: "Water-based wipes for everyday baby care",
  },
  {
    icon: "fa-solid fa-leaf",
    title: "Alcohol & Paraben Free",
    value: "Made without alcohol or parabens",
  },
  {
    icon: "fa-solid fa-seedling",
    title: "Aloe Vera & Vitamin E",
    value: "Enriched with Aloe Vera and Vitamin E",
  },
  {
    icon: "fa-solid fa-box-open",
    title: "72 Wipes Per Pack",
    value: "Convenient resealable pack for daily use",
  },
];


const products = [
  {
    id: 1,
    name: "Urban Baby Wet Wipes – Regular Pack",
    image: "/img/product.jpg",
    alt: "Urban Baby Wet Wipes Regular Pack",
  },

  {
    id: 2,
    name: "Urban Baby Wet Wipes – Regular Pack",
    image: "/img/product.jpg",
    alt: "Urban Baby Wet Wipes Regular Pack",
  },
  {
    id: 3,
    name: "Urban Baby Wet Wipes – Regular Pack",
    image: "/img/product.jpg",
    alt: "Urban Baby Wet Wipes Regular Pack",
  },
  {
    id: 4,
    name: "Urban Baby Wet Wipes – Regular Pack",
    image: "/img/product.jpg",
    alt: "Urban Baby Wet Wipes Regular Pack",
  },
  {
    id: 5,
    name: "Urban Baby Wet Wipes – Regular Pack",
    image: "/img/product.jpg",
    alt: "Urban Baby Wet Wipes Regular Pack",
  },
];


const whyChoosePoints = [
  {
    title: "99% Pure Water",
    description: "Water-based baby wipes for convenient everyday cleaning.",
  },
  {
    title: "Alcohol & Paraben Free",
    description: "Formulated without alcohol and parabens for daily baby care.",
  },
  {
    title: "Aloe Vera & Vitamin E",
    description:
      "Enriched with Aloe Vera and Vitamin E for a thoughtful baby care experience.",
  },
  {
    title: "Soft & Convenient",
    description:
      "Easy-to-use wipes for diaper changes, little hands, and everyday messes.",
  },
  {
    title: "72 Wipes Per Pack",
    description:
      "Convenient resealable packaging helps keep wipes ready for use.",
  },
  {
    title: "Manufacturer & Supplier",
    description:
      "Urban Baby offers baby wet wipes for customers, retailers, and bulk supply enquiries.",
  },
];

const certifications = [
  {
    id: 1,
    image: "/img/cer/1.png",
    alt: "Urban Baby certification document 1",
  },
  {
    id: 2,
    image: "/img/cer/2.png",
    alt: "Urban Baby certification document 2",
  },
  {
    id: 3,
    image: "/img/cer/3.png",
    alt: "Urban Baby certification document 3",
  },
  {
    id: 4,
    image: "/img/cer/4.png",
    alt: "Urban Baby certification document 4",
  },
];

const steps = [
  {
    id: 1,
    image:
      "https://cdn.dribbble.com/userupload/46879115/file/30ce110f632e246e1af858aa082906c7.png?crop=0x32-1616x1244&format=webp&resize=400x300&vertical=center",
    title: "Gentle Everyday Cleaning",
    description:
      "Make everyday baby care simple with Urban Baby Wipes. Keep wipes handy for diaper changes, little hands, and everyday messes.",
    icon: "fa-solid fa-heart",
  },
  {
    id: 2,
    image:
      "https://cdn.dribbble.com/userupload/46879115/file/30ce110f632e246e1af858aa082906c7.png?crop=0x32-1616x1244&format=webp&resize=400x300&vertical=center",
    title: "Pull Out One Wipe",
    description:
      "Open the pack and gently take out one wipe whenever you need it.",
    icon: "fa-solid fa-hand",
  },
  {
    id: 3,
    image:
      "https://cdn.dribbble.com/userupload/46879115/file/30ce110f632e246e1af858aa082906c7.png?crop=0x32-1616x1244&format=webp&resize=400x300&vertical=center",
    title: "Wipe, Close & Dispose",
    description:
      "Clean gently, reseal the pack to retain moisture, and dispose of used wipes in a bin. Do not flush.",
    icon: "fa-solid fa-check-circle",
  },
];


const faqData = [
  {
    question:
      "What makes Urban Baby Wet Wipes suitable for everyday baby care?",
    answer:
      "Urban Baby Wet Wipes are made with 99% pure water and enriched with Aloe Vera and Vitamin E. Their alcohol-free and paraben-free formulation makes them a convenient option for everyday cleaning, including diaper changes, little hands, and feet.",
  },
  {
    question: "Are Urban Baby Wipes alcohol-free and paraben-free?",
    answer:
      "Yes, Urban Baby Wet Wipes are formulated without alcohol and parabens, as stated on the product packaging. They are designed to offer a gentle cleaning experience as part of your baby's daily hygiene routine.",
  },
  {
    question: "How many wipes are available in an Urban Baby pack?",
    answer:
      "Urban Baby Wet Wipes are available in a convenient pack containing 72 wipes. The resealable lid helps retain moisture and makes the wipes easy to access during everyday baby care.",
  },
  {
    question: "Do Urban Baby Wet Wipes contain Aloe Vera and Vitamin E?",
    answer:
      "Yes, Urban Baby Wet Wipes are enriched with Aloe Vera and Vitamin E. These ingredients are included in the product formulation to complement everyday cleaning and baby care.",
  },
  {
    question: "Can Urban Baby Wet Wipes be used for newborn babies?",
    answer:
      "Urban Baby Wipes are designed for baby care. For newborns, parents should review the product ingredients and age recommendations on the packaging before use. If your baby has sensitive skin or a known allergy, consult a pediatrician.",
  },
  {
    question: "How should I use Urban Baby Wet Wipes?",
    answer:
      "Simply open the resealable lid, pull out one wipe, and gently clean the required area. Close the lid securely after use to prevent the remaining wipes from drying out. Dispose of used wipes in a waste bin and do not flush them.",
  },
  {
    question: "Is Urban Baby a baby wet wipes manufacturer and supplier?",
    answer:
      "Yes, Urban Baby is a manufacturer and supplier of baby wet wipes, offering products for everyday baby hygiene needs. For product specifications, distribution opportunities, and business enquiries, you can contact the Urban Baby team.",
  },
  {
    question:
      "Can retailers and distributors enquire about bulk baby wipes supply?",
    answer:
      "Retailers, wholesalers, and distributors interested in Urban Baby Wet Wipes can contact our team to discuss bulk supply requirements, product availability, pack specifications, and business opportunities.",
  },
  {
    question: "How should Urban Baby Wipes be stored?",
    answer:
      "Keep the wipes in their original packaging with the lid properly closed after each use. Store the pack in a cool, dry place away from direct sunlight and excessive heat to help maintain product quality.",
  },
  {
    question: "How can I contact Urban Baby for product enquiries?",
    answer:
      "You can contact Urban Baby through our website contact form or the available WhatsApp and phone details. Our team can assist with product information, pack details, and manufacturing or supply-related enquiries.",
  },
];


const testimonials = [
  {
    id: 1,
    name: "Neha S.",
    date: "Sample review",
    rating: 5,
    review: "Nice wipes 👍",
  },
  {
    id: 2,
    name: "Pooja M.",
    date: "Sample review",
    rating: 5,
    review:
      "I've been using these during diaper changes. The pack is easy to keep nearby and the wipes are convenient. Good experience so far.",
  },
  {
    id: 3,
    name: "Rahul K.",
    date: "Sample review",
    rating: 4,
    review:
      "Good product. Packaging could be a little better, but overall happy with it.",
  },
  {
    id: 4,
    name: "Anjali R.",
    date: "Sample review",
    rating: 5,
    review: "Nice product 😊",
  },
  {
    id: 5,
    name: "Simran D.",
    date: "Sample review",
    rating: 5,
    review:
      "Bought these for everyday use at home. I like keeping a pack in the baby bag when going out. Very handy.",
  },
  {
    id: 6,
    name: "Amit P.",
    date: "Sample review",
    rating: 4,
    review: "Good quality and easy to use.",
  },
  {
    id: 7,
    name: "Megha T.",
    date: "Sample review",
    rating: 5,
    review:
      "First time trying Urban Baby Wipes. The pack is convenient and works well for our daily routine. Would consider buying again.",
  },
  {
    id: 8,
    name: "Kavita B.",
    date: "Sample review",
    rating: 5,
    review: "Very nice product.",
  },
];

const App = () => {
   useEffect(() => {
     AOS.init({
       duration: 800,
       easing: "ease-in-out",
       once: true,
       offset: 100,
       delay: 0,
     });
   }, []);


  const swiperRef = useRef(null);

  const renderCard = (step, large = false) => (
    <div
      className={`urban-work-card ${large ? "urban-work-card-large" : ""}`}
      tabIndex={0}
      key={step.id}
      role="group"
      aria-label={step.title}
    >
      <img
        src={step.image}
        alt={step.title + " - Urban Baby Wipes"}
        className="urban-work-img"
        loading="lazy"
      />

      {/* Content appears on hover */}
      <div className="urban-work-overlay">
        <div className="urban-work-content">
          <span className="urban-work-icon d-inline-flex align-items-center justify-content-center rounded-circle mb-3">
            <i className={step.icon}></i>
          </span>

          <h3 className="fw-semibold mb-2">{step.title}</h3>

          <p className="mb-0">{step.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      {/* hero-slider start */}
      <section className="urban-hero-slider home-1" id="home">
        <div
          id="urbanBabyCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="4000"
          data-bs-pause="hover"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                data-bs-target="#urbanBabyCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Carousel Slides */}
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={slide.id}
              >
                <img
                  src={slide.image}
                  className="d-block w-100 urban-slide-image"
                  alt={slide.alt}
                />
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#urbanBabyCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next Button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#urbanBabyCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="urban-hero-slider home-2" id="home">
        <div
          id="urbanBabyCarousel2"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="4000"
          data-bs-pause="hover"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {slides2.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                data-bs-target="#urbanBabyCarousel2"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Carousel Slides */}
          <div className="carousel-inner">
            {slides2.map((slide, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={slide.id}
              >
                <img
                  src={slide.image}
                  className="d-block w-100 urban-slide-image"
                  alt={slide.alt}
                />
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#urbanBabyCarousel2"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next Button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#urbanBabyCarousel2"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* hero-slider end */}

      {/* advantage start */}
      <section className="urban-advantages py-4">
        <div className="container-lg">
          <div className="row g-3 align-items-center">
            {advantages.map((item, index) => (
              <div className="col-6 col-lg-3" key={index}>
                <div className="advantage-item d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 text-center text-sm-start">
                  <div className="advantage-icon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 shadow-sm">
                    <i className={item.icon} aria-hidden="true"></i>
                  </div>

                  <div>
                    <h6 className="advantage-title fw-bold mb-1">
                      {item.title}
                    </h6>

                    <p className="small text-secondary mb-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* advantage end */}

      {/* product-details start */}

      <section
        className="urban-product-details py-5"
        id="product-details"
        aria-labelledby="urban-product-heading"
      >
        <div className="container-lg py-lg-4">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left - Product Image */}
            <div className="col-lg-5" data-aos="zoom-in">
              <div className="urban-product-image text-center position-relative">
                <img
                  src="/img/product-details.png"
                  alt="Urban Baby 72 Baby Wet Wipes Pack with Aloe Vera and Vitamin E"
                  className="img-fluid"
                  loading="lazy"
                />
                {/* 
                <span className="urban-product-badge">
                  <i className="fa-solid fa-heart me-2"></i>
                  Pure Care for Little Ones
                </span> */}
              </div>
            </div>

            {/* Right - Product Content */}
            <div className="col-lg-7">
              <span
                className="urban-product-subtitle text-uppercase fw-semibold"
                data-aos="fade-up"
              >
                Soft, Fresh & Gentle Baby Care
              </span>

              <h2
                data-aos="fade-up"
                className="urban-product-heading fw-bold mt-2 mb-3"
                id="urban-product-heading"
              >
                Urban Baby Wet Wipes – Pure Care for Little Ones
              </h2>

              <p className="text-secondary mb-4 lh-lg">
                Every little touch matters when caring for your baby. Urban Baby
                Wet Wipes are made with 99% pure water and enriched with Aloe
                Vera and Vitamin E to make everyday cleaning simple and
                convenient. The alcohol-free and paraben-free formula offers a
                practical choice for your baby's daily hygiene routine. Whether
                you're changing diapers, cleaning tiny hands, or managing
                everyday messes, Urban Baby Wipes help you keep your little one
                fresh and comfortable.
              </p>

              {/* Product Specifications */}
              <div className="row g-3 mb-4">
                {productInfo.map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="urban-spec-card d-flex align-items-start gap-3 h-100 p-3 rounded-3">
                      <div className="urban-spec-icon d-flex align-items-center justify-content-center rounded-circle flex-shrink-0">
                        <i className={item.icon} aria-hidden="true"></i>
                      </div>

                      <div>
                        <h3 className="h6 fw-bold mb-1">{item.title}</h3>

                        <p className="small text-secondary mb-0">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Usage Instructions */}
              <div className="urban-usage-box p-3 p-md-4 rounded-3 mb-4">
                <h3 className="h5 fw-bold mb-3">
                  <i className="fa-solid fa-list-check me-2"></i>
                  How to Use Urban Baby Wet Wipes
                </h3>

                <ol className="mb-0 ps-3">
                  <li className="mb-2">
                    Open the resealable lid and gently pull out one baby wipe.
                  </li>

                  <li className="mb-2">
                    Carefully wipe your baby's hands, feet, diaper area, or
                    other areas as directed on the packaging.
                  </li>

                  <li className="mb-2">
                    Close the lid securely after every use to help keep the
                    remaining wipes moist.
                  </li>

                  <li>
                    Dispose of used wipes in a waste bin. Do not flush them down
                    the toilet.
                  </li>
                </ol>
              </div>

              {/* CTA */}
              <div className="d-flex flex-wrap align-items-center gap-3">
                <a
                  href="#products"
                  className="btn urban-product-btn px-4 py-3 rounded-pill fw-semibold"
                >
                  Explore Baby Wipes
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>

                <a
                  href="#contact"
                  className="urban-contact-link fw-semibold text-decoration-none"
                >
                  <i className="fa-solid fa-headset me-2"></i>
                  Product Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product-details end */}
      {/* product-sec start */}
      <section className="urban-products py-5" id="products">
        <div className="container-lg-fluid px-3 px-lg-5">
          {/* Section Heading */}
          <div className="text-center mb-4 mb-lg-5">
            <h2 className="urban-product-heading fw-bold mt-2">
              Explore Urban Baby Wipes
            </h2>

            <p className="text-secondary mb-0">
              Discover Urban Baby Wipes for convenient everyday baby care.
            </p>
          </div>

          {/* Product Slider */}
          <Swiper
            modules={[Navigation, Scrollbar, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1.2}
            spaceBetween={18}
            speed={650}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            scrollbar={{
              el: ".urban-product-scrollbar",
              draggable: true,
              hide: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 24,
              },
              992: {
                slidesPerView: 3.5,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 4.3,
                spaceBetween: 30,
              },
            }}
            className="urban-products-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="urban-product-item">
                  {/* Product Image */}
                  <div className="urban-product-image-box">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Name */}
                  <h3 className="urban-product-name mt-3 mb-0">
                    {product.name}
                  </h3>
                  <div>
                    <a
                      href="https://wa.me/919654596530?text=Hi%2C%20I%20want%20to%20enquire%20about%20Urban%20Baby%20Wipes."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="urban-whatsapp-btn d-inline-flex align-items-center gap-2 text-decoration-none fw-semibold"
                    >
                      Enquire Now
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Bottom Controls */}
          <div className="urban-slider-bottom d-flex align-items-center justify-content-between mt-4 gap-4">
            {/* Progress Scrollbar */}
            <div className="urban-product-scrollbar"></div>

            {/* Navigation Arrows */}
            <div className="d-flex align-items-center gap-4 flex-shrink-0">
              <button
                type="button"
                className="urban-arrow-btn"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous product"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>

              <button
                type="button"
                className="urban-arrow-btn"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next product"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* product-sec end */}
      {/* how to work start */}
      <section className="urban-how-it-works py-5 d-none" id="how-it-works">
        <div className="container-lg py-lg-4">
          {/* Same Heading Classes */}
          <div className="text-center mb-4 mb-lg-5">
            <span className="urban-product-subtitle text-uppercase fw-semibold">
              Simple Steps, Gentle Care
            </span>

            <h2 className="urban-product-heading fw-bold mt-2 mb-3">
              How It Works
            </h2>

            <p className="text-secondary mb-0">
              Discover how Urban Baby Wipes fit into your everyday baby care
              routine.
            </p>
          </div>

          {/* Bootstrap Image Grid */}
          <div className="row g-3 g-lg-4">
            {/* Large Left Card */}
            <div className="col-lg-7">{renderCard(steps[0], true)}</div>

            {/* Two Small Right Cards */}
            <div className="col-lg-5">
              <div className="d-flex flex-column gap-3 gap-lg-4 h-100">
                {renderCard(steps[1])}
                {renderCard(steps[2])}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* how to work end */}

      {/* about-sec start */}

      <section id="about-sec" className="py-lg-5 py-3">
        <div className="about-sec container-lg py-lg-5 py-3">
          <div className="row">
            <div className="col-lg-9 m-auto text-center">
              <span className="urban-product-subtitle text-uppercase fw-semibold">
                About Urban Baby
              </span>

              <h2
                className="urban-product-heading fw-bold mt-2 mb-3"
                id="urban-about-heading"
              >
                Caring for Little Ones, Every Step of the Way
              </h2>

              <p className="text-secondary mb-4 lh-lg">
                At <b> Urban Baby,</b> we believe that every baby deserves
                gentle care, comfort, and attention in their everyday routine.
                As a baby wet wipes manufacturer and supplier, we are dedicated
                to offering convenient baby hygiene products that make daily
                cleaning easier for parents. Our Urban Baby Wet Wipes are made
                with 99% pure water and enriched with Aloe Vera and Vitamin E.
                With an alcohol-free and paraben-free formulation, our wipes are
                designed to support everyday baby care, from diaper changes to
                cleaning little hands and feet.
              </p>

              <p className="text-secondary mb-4 lh-lg">
                We understand that caring for a baby involves countless little
                moments, which is why we focus on creating practical products
                that fit naturally into family life. Our 72-wipe resealable
                packs are convenient for use at home, during travel, and
                whenever quick cleaning is needed. At Urban Baby, our goal is to
                make everyday baby hygiene simple and comfortable while building
                lasting relationships with parents, retailers, and distributors
                through dependable products and service.
              </p>

              <div>
                <a
                  href="tel:+919654596530"
                  className="btn urban-product-btn px-4 py-3 rounded-pill fw-semibold"
                >
                  Contact Now
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about-sec end */}

      {/* why-choose start */}

      <section className="urban-why-choose py-lg-5 py-3" id="why-choose-us">
        <div className="container-lg py-lg-5 py-3">
          {/* Why Choose Us Heading */}
          <div className="text-center mb-4">
            <span className="urban-product-subtitle text-uppercase fw-semibold">
              Why Choose Urban Baby
            </span>

            <h2 className="urban-product-heading fw-bold mt-2 mb-3">
              Gentle Care, Thoughtful Quality
            </h2>
          </div>

          {/* About & Introduction */}
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <p className="text-secondary mb-3 lh-lg">
                At Urban Baby, we believe that everyday baby care should be
                simple, comfortable, and convenient. As a baby wet wipes
                manufacturer and supplier, we focus on offering practical
                hygiene products that support parents in their daily routines.
                Our Urban Baby Wet Wipes are made with 99% pure water and
                enriched with Aloe Vera and Vitamin E.
              </p>

              <p className="text-secondary mb-4 lh-lg">
                From diaper changes to cleaning little hands and feet, Urban
                Baby Wipes are designed for everyday convenience. With an
                alcohol-free and paraben-free formulation and easy-to-use
                resealable packaging, our 72-wipe packs are a handy addition to
                your baby care essentials. We also welcome enquiries from
                retailers, wholesalers, and distributors looking for baby wet
                wipes supply.
              </p>
            </div>
          </div>

          {/* Why Choose Us Points */}
          <div className="row g-3 mt-2">
            {whyChoosePoints.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <ul className="list-unstyled mb-0">
                  <li className="urban-why-list d-flex gap-3">
                    <div className="urban-why-check flex-shrink-0">
                      <i className="fa-solid fa-check"></i>
                    </div>

                    <div>
                      <h3 className="h6 fw-bold mb-2">{item.title}</h3>

                      <p className="text-secondary small mb-0 lh-lg">
                        {item.description}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div
            className="urban-certifications-block text-center mt-5 pt-lg-5 pt-4"
            id="certified"
          >
            <span className="urban-product-subtitle text-uppercase fw-semibold">
              Quality Assurance & Trust
            </span>

            <h2
              className="urban-product-heading fw-bold mt-2 mb-3"
              id="urban-certified-heading"
            >
              Our Certifications & Quality Standards
            </h2>

            <p className="text-secondary mb-4">
              Learn more about the certifications and quality standards
              associated with Urban Baby.
            </p>

            {/* Certificate Logos */}
            <div className="row justify-content-around align-items-center g-4">
              {certifications.map((item) => (
                <div className="col-lg-3 col-md-3 col-6" key={item.id}>
                  <div className="urban-cert-logo d-flex align-items-center justify-content-center p-3">
                    <img
                      src={item.image}
                      className="img-fluid"
                      alt={item.alt}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* why-choose end */}

      {/* faq-sec start */}

      <section className="urban-faq py-5" id="faq">
        <div className="container-lg py-lg-4">
          {/* Section Heading */}
          <div className="text-center mb-4 mb-lg-5">
            <span className="urban-product-subtitle text-uppercase fw-semibold">
              Everything You Need to Know
            </span>

            <h2 className="urban-product-heading fw-bold mt-2 mb-3">
              Frequently Asked Questions About Urban Baby
            </h2>

            <p className="text-secondary mb-0">
              Have questions about Urban Baby Wet Wipes? Explore helpful answers
              about our ingredients, product benefits, everyday usage,
              packaging, and baby wipes manufacturing and supply.
            </p>
          </div>

          {/* Bootstrap Accordion */}
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div
                className="accordion urban-faq-accordion"
                id="urbanFaqAccordion"
              >
                {faqData.map((faq, index) => (
                  <div className="accordion-item mb-3" key={index}>
                    <h3
                      className="accordion-header"
                      id={`urbanFaqHeading${index}`}
                    >
                      <button
                        className={`accordion-button ${
                          index !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#urbanFaqCollapse${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`urbanFaqCollapse${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>

                    <div
                      id={`urbanFaqCollapse${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`urbanFaqHeading${index}`}
                      data-bs-parent="#urbanFaqAccordion"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq-sec end */}

      {/* testimonials start */}
      <section className="urban-testimonials py-5" id="testimonials">
        <div className="container-lg py-lg-4">
          {/* Heading */}
          <div className="text-center mb-4 mb-lg-5">
            <span className="urban-product-subtitle text-uppercase fw-semibold">
              Parent Experiences
            </span>

            <h2 className="urban-product-heading fw-bold mt-2 mb-3">
              What Parents Are Saying
            </h2>

            <p className="text-secondary mb-0">
              A preview of how customer experiences with Urban Baby Wipes can be
              displayed.
            </p>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={20}
            speed={650}
            autoHeight={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".urban-review-pagination",
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="urban-review-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <article className="urban-review-card h-100 p-4">
                  {/* Reviewer */}
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="urban-review-avatar d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 fw-bold">
                      {item.name.charAt(0)}
                    </div>

                    <div className="flex-grow-1">
                      <h3 className="h6 fw-semibold mb-1">{item.name}</h3>

                      <span className="small text-secondary">{item.date}</span>
                    </div>

                    <i
                      className="fa-regular fa-comment-dots urban-review-source"
                      aria-hidden="true"
                    ></i>
                  </div>

                  {/* Stars */}
                  <div
                    className="urban-review-stars d-flex gap-1 mb-3"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={
                          i < item.rating
                            ? "fa-solid fa-star"
                            : "fa-regular fa-star"
                        }
                        aria-hidden="true"
                      ></i>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="urban-review-text mb-0">{item.review}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Navigation */}
          <div className="d-flex align-items-center justify-content-between mt-4 gap-3">
            <div className="urban-review-pagination"></div>

            <div className="d-flex gap-2 flex-shrink-0">
              <button
                type="button"
                className="urban-review-arrow"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous review"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>

              <button
                type="button"
                className="urban-review-arrow"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next review"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials end */}

      <Contact />

      {/* map start */}

      <section className="urban-map-section" id="location">
        <div className="container-fluid p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15342257.097458478!2d72.10531083016068!3d20.147883964188363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396251004dcd1ee7%3A0x587dc1db3cea2690!2sKrishnendu%20Healthcare%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1792137412656!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Krishnendu Healthcare Pvt. Ltd. Location"
          ></iframe>
        </div>
      </section>
      {/* map end */}

      <FixedIcon />
      <Footer />
    </>
  );
};

export default App;
