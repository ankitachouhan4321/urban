import React, { useState } from "react";

const Form = () => {
    
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        age: "",
        gender: "",
        department: "",
        doctor: "",
        appointment_date: "",
        appointment_time: "",
        city: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const YOUR_EMAIL = "chandipurmhrc@gmail.com";
        const form = new FormData();

        // FormSubmit Settings
        form.append("_captcha", "false");
        form.append("_template", "table");
        form.append(
            "_subject",
            `New Appointment Booking - ${formData.name}`
        );

        form.append(
            "_autoresponse",
            `Dear ${formData.name},

Thank you for choosing Chandipur Multi Speciality Hospital.

We have successfully received your appointment request.

Appointment Details:
---------------------------------------
Department: ${formData.department}
Preferred Doctor: ${formData.doctor || "Not Specified"}
Appointment Date: ${formData.appointment_date}
Preferred Time: ${formData.appointment_time}
---------------------------------------

Our team will contact you shortly to confirm your appointment.

For any urgent medical assistance, please contact us directly.

Thank you,
Chandipur Multi Speciality Hospital`
        );

        // Appointment Details
        form.append("Full Name", formData.name);
        form.append("Phone Number", formData.phone);
        form.append("Email Address", formData.email);
        form.append("Age", formData.age);
        form.append("Gender", formData.gender);
        form.append("Department", formData.department);
        form.append(
            "Preferred Doctor",
            formData.doctor || "Not Specified"
        );
        form.append("Appointment Date", formData.appointment_date);
        form.append("Preferred Time", formData.appointment_time);
        form.append("City", formData.city || "Not Provided");
        form.append(
            "Reason for Visit",
            formData.message || "No message provided"
        );

        try {
            const response = await fetch(
                `https://formsubmit.co/${YOUR_EMAIL}`,
                {
                    method: "POST",
                    body: form,
                }
            );

            if (response.ok) {
                alert(
                    "✅ Your appointment request has been submitted successfully. Our team will contact you soon to confirm your appointment."
                );

                // Reset Form
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    age: "",
                    gender: "",
                    department: "",
                    doctor: "",
                    appointment_date: "",
                    appointment_time: "",
                    city: "",
                    message: "",
                });
            } else {
                alert("❌ Failed to submit appointment request. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("❌ Network error. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* breadcrumb start  */}
            <section id="breadcrumb">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <h1>Book Your Appointment</h1>
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/* breadcrumb end  */}

            <section id="Appointmentform" className="py-lg-5 py-3">
                <div className="Appointmentform container-fluid px-0">
                    <div className="row m-auto">
                        <div className="col-lg-10 col-md-12 m-auto">
                            {/* Changed from <form> to <div> to prevent invalid nested HTML forms, while keeping the CSS class */}
                            <div className="appointment-form">
                                <div className="row px-0">

                                    {/* Left Content */}
                                    <div className="col-lg-5">
                                        <div className="appointment-content">
                                            <div className="top-head">
                                                Book Appointment
                                            </div>

                                            <h2 className="heading">
                                                Convenient Appointment Booking Options
                                            </h2>

                                            <p>
                                                Booking an appointment at <strong>Chandipur MultiSpeciality Hospital</strong> is simple and convenient. Complete the form to request an appointment with your preferred specialist, and our team will contact you to confirm your consultation.
                                            </p>

                                            <div className="appointment-methods">
                                                <div className="method-box">
                                                    <div className="method-icon">
                                                        <i className="fa-solid fa-phone-volume"></i>
                                                    </div>
                                                    <div className="method-content">
                                                        <h5>Over Phone</h5>
                                                        <p>
                                                            Speak with our patient support team to schedule your appointment quickly and conveniently.
                                                        </p>
                                                        <a href="tel:+919083257402">
                                                            +91 90832 57402
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="method-box">
                                                    <div className="method-icon">
                                                        <i className="fa-solid fa-hospital"></i>
                                                    </div>
                                                    <div className="method-content">
                                                        <h5>Walk-In Appointments</h5>
                                                        <p>
                                                            Visit our Outpatient Department (OPD) reception to book your appointment in person with the assistance of our staff.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="method-box">
                                                    <div className="method-icon">
                                                        <i className="fa-solid fa-calendar-check"></i>
                                                    </div>
                                                    <div className="method-content">
                                                        <h5>Book Online</h5>
                                                        <p>
                                                            Fill out the appointment form, and our team will contact you shortly to confirm your preferred consultation date and time.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Content */}
                                    <div className="col-lg-7">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                {/* Full Name */}
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Full Name *</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Enter your full name"
                                                        required
                                                    />
                                                </div>

                                                {/* Phone */}
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Phone Number *</label>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="Enter your phone number"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* Email */}
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Email Address *</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Enter your email address"
                                                        required
                                                    />
                                                </div>

                                                {/* Age */}
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Age *</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        name="age"
                                                        value={formData.age}
                                                        onChange={handleChange}
                                                        placeholder="Enter your age"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* Gender */}
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Gender *</label>
                                                    <select
                                                        className="form-select"
                                                        name="gender"
                                                        value={formData.gender}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>

                                                {/* Department */}
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Department *</label>
                                                    <select
                                                        className="form-select"
                                                        name="department"
                                                        value={formData.department}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        <option value="">Select Department</option>
                                                        <option value="General Medicine">General Medicine</option>
                                                        <option value="Cardiology">Cardiology</option>
                                                        <option value="Cardiac Surgery (CTVS)">Cardiac Surgery (CTVS)</option>
                                                        <option value="General Surgery">General Surgery</option>
                                                        <option value="Orthopaedics">Orthopaedics</option>
                                                        <option value="Neurology">Neurology</option>
                                                        <option value="Neuro Surgery">Neuro Surgery</option>
                                                        <option value="Gastroenterology">Gastroenterology</option>
                                                        <option value="Nephrology">Nephrology</option>
                                                        <option value="Urology">Urology</option>
                                                        <option value="Oncology">Oncology</option>
                                                        <option value="Onco Surgery">Onco Surgery</option>
                                                        <option value="Paediatrics & Neonatology">Paediatrics & Neonatology</option>
                                                        <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
                                                        <option value="Pulmonology">Pulmonology</option>
                                                        <option value="ENT">ENT</option>
                                                        <option value="Ophthalmology">Ophthalmology</option>
                                                        <option value="Dentistry">Dentistry</option>
                                                        <option value="Dermatology">Dermatology</option>
                                                        <option value="Psychiatry">Psychiatry</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* Preferred Doctor */}
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Preferred Doctor</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="doctor"
                                                        value={formData.doctor}
                                                        onChange={handleChange}
                                                        placeholder="Doctor's name (Optional)"
                                                    />
                                                </div>

                                                {/* Appointment Date */}
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Preferred Appointment Date *</label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        name="appointment_date"
                                                        value={formData.appointment_date}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* Appointment Time */}
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">Preferred Time *</label>
                                                    <input
                                                        type="time"
                                                        className="form-control"
                                                        name="appointment_time"
                                                        value={formData.appointment_time}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>

                                                {/* City */}
                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label">City</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                        placeholder="Enter your city"
                                                    />
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="col-12 mb-4">
                                                <label className="form-label">Reason for Visit / Message</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="5"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Briefly describe your health concern"
                                                ></textarea>
                                            </div>

                                            {/* Button */}
                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    className="main-btn"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? "Submitting..." : "Book Appointment"}
                                                    <i className="fa-solid fa-arrow-right ms-2"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Form;