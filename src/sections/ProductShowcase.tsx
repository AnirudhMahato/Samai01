"use client";
import productImage from "@/assets/product2.jpeg";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Seamlessly advance your NEET preparation with SamAI – the
            user-friendly platform that keeps track of your progress, fuels your
            motivation, and celebrates your milestones every step of the way.
          </p>
        </div>
        <div className="relative">
          <div className="flex justify-center items-center mt-10">
            <Image
              src={productImage}
              alt="Product Image"
              className="mt-10"
              height={300}
              width={300}
            />
          </div>

          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute right-2 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 "
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
