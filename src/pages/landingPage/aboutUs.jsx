import React from "react";
import { FaLeaf, FaPeopleArrows, FaTasks, FaTeamspeak } from "react-icons/fa";
import { motion } from "framer-motion";
import { whatWeDo } from "../../assets";

const AboutUs = () => {
  return (
    <section className="py-12 bg-bgColor">
      <div className="container mx-auto px-6">
        {/* Flex Container for Image and Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={whatWeDo}
              alt="Who we are image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex items-stretch ">
            <div className=" p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-[12px] font-bold mb-4 flex items-center bg-white w-[120px]">
                  <FaLeaf className="mr-2 text-[12px] text-primary" /> Who We
                  Are
                </h2>
                <h2 className="text-5xl text-tColor font-semibold mb-3">
                  Empowering Farmers by connecting them to markets.
                </h2>
                <p className="text-lg text-tColor mb-6">
                  At AgriConnect, we are dedicated to bridging the gap between
                  farmers and buyers, fostering sustainable farming practices,
                  and enhancing agricultural productivity. Our platform is
                  designed to empower farmers by providing them direct access to
                  market opportunities while ensuring fair trade practices.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 mt-auto">
                {/* Our Mission */}
                <motion.div
                  className="flex-1 p-6 text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center">
                    <FaTasks className="text-6xl text-primary mb-4 ml-[-50px]" />
                    <h3 className="text-2xl font-semibold mb-4 ml-[10px]">
                      Our Mission
                    </h3>
                    <p className="text-tColor text-start">
                      Our mission is to support farmers with innovative
                      solutions, enhance traceability in the supply chain, and
                      ensure the highest quality produce reaches the market. We
                      believe in sustainable practices and transparency to
                      create a better future for agriculture.
                    </p>
                  </div>
                </motion.div>

                {/* Our Team */}
                <motion.div
                  className="flex-1 p-6 text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center">
                    <FaPeopleArrows className="text-6xl text-primary mb-4 ml-[-50px]" />
                    <h3 className="text-2xl font-semibold mb-4 ml-[-20px]">
                      Our Team
                    </h3>
                    <p className="text-tColor text-start">
                      Our team is a diverse group of passionate individuals with
                      expertise in agriculture, technology, and business. We are
                      committed to making a positive impact in the agricultural
                      sector and working closely with farmers to achieve their
                      goals.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
