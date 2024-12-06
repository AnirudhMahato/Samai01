"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

interface Testimonial {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

const testimonials: Testimonial[] = [
  {
    text: "SamAI transformed my NEET preparation with its personalized study plans and comprehensive practice tests. The AI-driven insights helped me focus on my weak areas, and I felt fully prepared on exam day. Highly recommended!",
    imageSrc: avatar1.src, // Replace with appropriate avatar image source
    name: "Priya Sharma",
    username: "@priyasharma_neet",
  },
  {
    text: "Achieving a top rank in NEET was challenging, but SamAI's interactive video lectures and real-time performance tracking made all the difference. The supportive community and expert guidance were invaluable.",
    imageSrc: avatar2.src, // Replace with appropriate avatar image source
    name: "Aman Verma",
    username: "@amanverma_neet",
  },
  {
    text: "Balancing school and NEET prep was tough, but SamAI's flexible learning modules fit perfectly into my schedule. The detailed explanations and mock exams boosted my confidence immensely.",
    imageSrc: avatar3.src, // Replace with appropriate avatar image source
    name: "Neha Gupta",
    username: "@nehagupta_neet",
  },
  {
    text: "SamAI's adaptive learning technology tailored my study sessions to my needs, making complex subjects easier to understand. The consistent feedback and progress reports kept me on track throughout my preparation.",
    imageSrc: avatar4.src, // Replace with appropriate avatar image source
    name: "Rohit Kumar",
    username: "@rohitkumar_med",
  },
  {
    text: "The comprehensive resources and interactive doubt-clearing sessions on SamAI were game-changers for me. I felt well-prepared and less stressed on exam day, thanks to their excellent platform.",
    imageSrc: avatar5.src, // Replace with appropriate avatar image source
    name: "Sanya Malik",
    username: "@sanyamalik_neet",
  },
  {
    text: "Discovering SamAI early in my NEET journey was the best decision. The extensive question bank and detailed solutions helped deepen my understanding of critical concepts. SamAI truly supports students in achieving their medical dreams.",
    imageSrc: avatar6.src, // Replace with appropriate avatar image source
    name: "Vikram Singh",
    username: "@vikramsingh_neet",
  },
  {
    text: "SamAI's structured modules and regular assessments kept me organized and focused. The personalized study plans and AI-driven analytics were key to my effective preparation.",
    imageSrc: avatar7.src, // Replace with appropriate avatar image source
    name: "Meera Joshi",
    username: "@meerajoshi_neet",
  },
  {
    text: "SamAI's user-friendly interface and adaptive learning techniques made studying for NEET enjoyable and efficient. The mock exams were incredibly realistic, which boosted my confidence significantly.",
    imageSrc: avatar8.src, // Replace with appropriate avatar image source
    name: "Arjun Verma",
    username: "@arjunverma_neet",
  },
  {
    text: "With SamAI, I had access to top-notch resources and expert guidance that were essential for my NEET preparation. The platform's ability to track my progress and adjust my study plan was fantastic.",
    imageSrc: avatar9.src, // Replace with appropriate avatar image source
    name: "Tara Menon",
    username: "@taramenon_neet",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  className,
  testimonials,
  duration = 10,
}) => (
  <div className={twMerge("w-full", className)}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {/* Duplicate the testimonials to create a seamless loop */}
      {[...new Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {testimonials.map(({ text, imageSrc, name, username }) => (
            <div
              key={`${username}-${index}`}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-700 dark:text-gray-300">{text}</p>
              <div className="flex items-center gap-3 mt-5">
                <Image
                  src={imageSrc}
                  alt={`${name}'s avatar`}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {username}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            What Our Users Say
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
          From personalized study plans to powerful performance analytics, SamAI has become an essential tool for NEET UG aspirants striving for excellence
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-12 relative max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
          {/* Optional: Add gradient overlays for visual effect */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
        </div>
      </div>
    </section>
  );
};
