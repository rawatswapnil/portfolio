import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-black text-white overflow-hidden">
      {/* Animated Circle */}
      <motion.div
        className="absolute inset-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-500 to-red-500 opacity-30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <h1 className="text-6xl md:text-8xl font-extrabold mb-4">
        Hi, I’m <span className="text-red-400">Swapnil Rawat</span>
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl text-center text-gray-300 mb-6">
        Transforming ideas into elegant, functional cloud solutions.
      </p>
      <a
        href="#projects"
        className="px-10 py-4 bg-red-500 text-lg font-semibold rounded-full shadow-lg hover:bg-red-600 transition"
      >
        See My Work
      </a>
    </div>
  );
};

export default Hero;
