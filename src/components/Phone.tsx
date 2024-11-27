

import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";

export default function Phone({ filled }: any) {
  return (
    <section className="grid place-content-center min-h-screen">
      <FloatingPhone filled={filled} />
    </section>
  );
}

function FloatingPhone({ filled }: any)  {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      className="rounded-[24px] bg-gradient-to-br from-gray-800 to-gray-900"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-gray-200 border-t-gray-200 bg-gray-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen filled={filled} />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-gray-700"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-gray-900" />
        <FiBatteryCharging className="text-gray-900" />
      </div>
    </>
  );
};

const Screen = ({ filled }: any) => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      <div className="flex justify-center items-center mb-4">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 10L45 30L30 50L15 30L30 10Z"
            fill="none"
            stroke="#2C5282"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <circle
            cx="30"
            cy="30"
            r="28"
            stroke="#2C5282"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="text-center px-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Connect Today
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Reach out and let's start a conversation
        </p>
      </div>

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg bg-blue-600 text-white py-2.5 text-sm font-medium hover:bg-blue-700 transition-colors duration-300 ease-in-out shadow-md">
        {filled ? "Message Sent" : "Contact Us"}
      </button>

      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-blue-500 opacity-60" />
    </div>
  );
};
