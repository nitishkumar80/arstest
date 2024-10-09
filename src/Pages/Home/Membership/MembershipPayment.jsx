import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import './MemberPayment.css'; // Import the shared background CSS file

const MembershipPayment = () => {
  const location = useLocation();
  const { membershipType } = location.state || {}; // Get the membership type from the state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log("Payment submitted:", formData);
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Blur Image */}
      <div
        className="background-blur"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/19/9f/d2/199fd29184c6cff24e3445f849af463e.gif')`,
        }}
      ></div>

      <div className="payment-container p-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg max-w-md mx-auto mt-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Payment Page</h1>
          {membershipType && (
            <p className="text-center text-lg mb-6">
              You have selected the <strong>{membershipType}</strong> membership.
            </p>
          )}

          <motion.form
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block mb-2">Expiration Date</label>
                <input
                  type="text"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-amber-500 text-white py-2 rounded-lg mt-4 hover:bg-amber-600 transition"
              type="submit"
            >
              Pay Now
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default MembershipPayment;
