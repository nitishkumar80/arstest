import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../../Components/Container/Container";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import Reavel from "../../../Components/Reveal/Reavel";

const memberships = [
  {
    title: "Basic Membership",
    description: "Gain full access to our core training facilities and group sessions designed to improve your fitness and skill level.",
    price: "3-Month Plan",
    benefits: [
      "Access to group training sessions",
      "Access to standard fitness equipment",
      "Weekly fitness assessments and tracking",
      "Member discounts on selected sports gear and merchandise",
    ],
  },
  {
    title: "Pro Membership",
    description: "Elevate your training with enhanced access, priority bookings, and specialized programs tailored to your performance goals.",
    price: "6-Month Plan",
    benefits: [
      "Includes all Basic Membership perks",
      "Priority booking for sports courts and facilities",
      "Access to advanced training programs",
      "Exclusive workshops and events",
    ],
  },
  {
    title: "Elite Membership",
    description: "Designed for high-performance athletes, offering a fully personalized experience with one-on-one coaching and custom plans.",
    price: "12-Month Plan",
    benefits: [
      "Includes all Pro Membership perks",
      "Personalized one-on-one coaching sessions",
      "Customized nutrition and fitness plans",
      "Exclusive access to elite facilities and private areas",
    ],
  },
];

const Membership = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleJoinNow = (membershipType) => {
    // Navigate to the payment page with the membership type as a state or query parameter
    navigate("/MembershipPayment", { state: { membershipType  } });
  };

  return (
    <div className="dark:bg-gray-700 bg-[#68a9d3] pb-10 lg:pb-20 text-justify" id="membership">
      <SectionHeader heading={"Membership"}></SectionHeader>
      <Container>
        <div className="text-center">
          <Reavel>
            <p className="dark:text-white text-slate-700 mb-6">
              Join ARS Kreedashala and unlock a world of opportunities to enhance your athletic skills. Whether you're a beginner or an elite athlete, we have a membership plan that suits your needs. Choose from our Basic, Pro, or Elite memberships, each offering unique benefits to help you reach your full potential.
            </p>
          </Reavel>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {memberships.map((membership, index) => (
            <FadeInAnimation key={index}>
              <div className="membership-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition duration-500">
                <h3 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">
                  {membership.title}
                </h3>
                <p className="dark:text-gray-300 text-gray-600 mb-4">
                  {membership.description}
                </p>
                <p className="text-xl font-semibold text-amber-500 mb-6">
                  {membership.price}
                </p>
                <ul className="list-disc list-inside dark:text-gray-300 text-gray-600">
                  {membership.benefits.map((benefit, i) => (
                    <li key={i} className="mb-2 text-center">{benefit}</li>
                  ))}
                </ul>
                <button
                  className="mt-6 bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition"
                  onClick={() => handleJoinNow(membership.title)} // Pass the membership title to the handler
                >
                  Join Now
                </button>
              </div>
            </FadeInAnimation>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Membership;
