"use client";

import Image from "next/image";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-heading text-center">
          <h2 className="section-title text-3xl font-bold">Pricing</h2>
          <p className="section-description mt-5 text-gray-600">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-start lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }, index) => (
              <div
                key={index}
                className={twMerge(
                  "p-6 rounded-lg shadow-md transition-transform transform hover:scale-105",
                  inverse
                    ? "border border-black bg-black text-white"
                    : "border border-gray-200 bg-white text-black"
                )}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={twMerge(
                      "text-lg font-bold",
                      inverse ? "text-white/90" : "text-black/90"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                        className="bg-[linear-gradient(to right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-6">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-gray-500">
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "w-full mt-6 px-4 py-2 rounded-md font-semibold transition-colors duration-300",
                    inverse
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-4 mt-8">
                  {features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center gap-3">
                      <Image src={CheckIcon} alt="Check icon" className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
