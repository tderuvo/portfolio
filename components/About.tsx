import { motion, MotionConfig } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://media-exp1.licdn.com/dms/image/C5603AQE86JM_9gwVGw/profile-displayphoto-shrink_800_800/0/1589904888343?e=1671667200&v=beta&t=Ninassu02F0QNncZsGquIZcNdiyCsqUkVaHZjWxnjoU"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] "
      />
      <div className=" space-y-10 px-0 md:px-10">
        <h4 className=" text-4xl font-semibold">
          Here is a{" "}
          <span className=" underline decoration-[#F7AB0A]/30">little</span>{" "}
          background
        </h4>
        <p className=" text-base">
          Senior business executive focusing on mobile and web based
          applications in the cloud computing space. A product leader who
          combines a data driven approach with a remarkable ability to ‘connect
          the dots’ between market needs and underlying technologies to create
          products that deliver exceptional customer value. Demonstrated track
          record of envisioning, building and launching new innovative products.
          Reputation for successfully leveraging outstanding quantitative and
          competitive analysis skills to find opportunities to build product
          market share. Over 15 years experience building and managing software
          based products at companies ranging in size from startup to Fortune
          100.
        </p>
      </div>
    </motion.div>
  );
}
