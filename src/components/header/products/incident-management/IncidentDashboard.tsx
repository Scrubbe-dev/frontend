"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const IncidentDashboard = () => {
  return (
    <section className=" px-4 md:px-6 lg:px-20 xl:px-20 pt-20 relative overflow-clip z-10 h-auto bg-[url('/fingerprint_bg.png')] bg-no-repeat bg-cover">
      <div className=" max-w-[1440px] mx-auto space-y-8 ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold  text-center mb-2 text-white"
            variants={itemVariants}
          >
            Incident Management Dashboard
          </motion.h2>
          <motion.div
            className="w-24 h-2 bg-teal-400 mx-auto mb-12 rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className=" md:text-lg text-center text-white font-medium"
            variants={itemVariants}
          >
            Get a complete view of your security posture with our intuitive
            management interface
          </motion.p>
        </motion.div>

        <div>
          <img src="/Incident_ticket.png" alt="incident-dashboard" />
        </div>
      </div>
    </section>
  );
};

export default IncidentDashboard;
