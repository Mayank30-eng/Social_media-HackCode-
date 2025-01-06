import React from "react";
import { motion } from "framer-motion";
import { User, Users, Clipboard, Phone, Shield, MessageSquare } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Mayank Pradkar",
    // role: "Mayank Pradkar",
    image: "images/WhatsApp Image 2025-01-06 at 6.53.57 PM.jpeg",
    description:
      "John is an experienced developer specializing in full-stack development, passionate about building scalable web applications.",
    icon: <User className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "Dharamchand Patle",
    // role: "UI/Ux Developer ",
    image: 'images/Dharamchand.jpg',
    description:
      "Jane brings creativity and user-centered design to the team, focusing on delivering visually appealing and intuitive interfaces.",
      icon: <User className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "Rahul Patil",
    // role: "Project Manager",
    image: "images/image.png",
    description:
      "Mike is a seasoned project manager who ensures all team projects are completed on time and exceed expectations.",
      icon: <User className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "Neelesh Kumar Jatav",
    // role: "Marketing Strategist",
    image: "images/neelesh.png",
    description:
      "Sara drives the marketing initiatives, working on campaigns to engage customers and grow our audience base.",
      icon: <User className="w-6 h-6 text-blue-500" />,
  },
];

const headerTextVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5 },
  }),
};

const TeamPage = () => {
  return (
    <>
    <div
      className="min-h-screen w-screen p-8 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom right, #eef2ff, #ffd1e6, #d8efff)",
      }}
    >
      <Header/>
      {/* Header Section */}
      <motion.header
        className="relative text-center mb-16"
        initial="hidden"
        animate="visible"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-xl blur-2xl opacity-30"></div>

        {/* Animated Icon */}
        <motion.div
          className="mb-4 inline-block bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-full shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Users className="w-16 h-16 text-white" />
        </motion.div>

        {/* Animated Heading */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            {"Meet Our Talented Team".split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={headerTextVariants}
                custom={index}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          className="text-gray-700 mt-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          A group of creative minds and innovative problem-solvers
        </motion.p>
      </motion.header>

      {/* Team Grid Section */}
      <motion.section
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl"
        initial="hidden"
        animate="visible"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative p-4 bg-white bg-opacity-50 rounded-xl shadow-lg group transform-gpu transition-transform duration-300 hover:shadow-2xl hover:scale-105"
            custom={index}
            variants={headerTextVariants}
            whileHover={{ rotateX: -5, rotateY: 5 }}
            style={{
              background: "linear-gradient(to bottom right, #ffffff80, #d8e3ff90)",
            }}
          >
            {/* Icon */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-lg">
              {member.icon}
            </div>

            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-28 h-28 object-cover mb-4 shadow-md mx-auto"
            />

            {/* Name */}
            <h3 className="text-lg font-bold text-gray-900 text-center mt-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-sm text-indigo-600 font-medium text-center mt-2">
              {member.role}
            </p>

            {/* Description */}
            <p className="text-gray-700 text-center mt-4">{member.description}</p>
          </motion.div>
        ))}
      </motion.section>

    </div>
    <Footer/>

    </>
  );
};

export default TeamPage;
