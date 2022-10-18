import { motion, MotionConfig } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex relative flex-col md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
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
    </div>
  );
}
