import React, { useState } from "react";
import backgroundImage from "/church-of-the-king-j9jZSqfH5YI-unsplash.jpg"; 

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      window.location.reload();
    }, 3000);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
    
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="bg-white/30 backdrop-blur-sm p-8 rounded-xl text-center max-w-3xl shadow-xl">
        <h2 className="text-4xl font-bold mb-6  text-orange-500 text-center">
          Volunteer With Us
        </h2>

        {showSuccess && (
          <div className="mb-4 text-green-700 bg-green-100 border border-green-300 px-4 py-2 rounded-md text-center transition duration-300">
            Form submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
          />
          <textarea
            name="message"
            placeholder="Why do you want to volunteer?"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Volunteer;
