// components/Hero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-blue-500 h-screen flex justify-center items-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Swapnil Rawat</h1>
        <p className="text-lg mb-6">I create beautiful, performant cloud applications using Salesforce.</p>
        <Link href="#projects" className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg">
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;