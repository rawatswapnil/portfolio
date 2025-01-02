// components/About.tsx
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="relative py-20 bg-gray-900 text-white">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 opacity-70 backdrop-blur-lg"></div>
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          I&apos;m your go-to Salesforce Developer, ready to bring your dream product to life in the virtual world. From crafting sleek CRMs for small and medium-sized businesses to empowering you by building your dream tech product, I&apos;ve got the skills and expertise to make it happen.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          With a mastery of LWC, Apex, Triggers, Integration, Flow Builder and Omnistudio, I can help ensure your online presence stands out from the crowd. I am skilled in creating user-friendly interfaces, building RESTful APls, and seamlessly integrating external services. Besides, I am a developer/consultant, who prefers to meticulously oversee every aspect of a project, from conception to completion, leaving no room for mediocrity.          
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Your dream + my expertise = scalable, performant, reliable, and intuitive products. Let&apos;s build something extraordinary!
        </p>
        <Image
          src="/image.png"
          alt="Profile Picture"
          className="w-32 h-32 mx-auto rounded-full border-4 border-red-500 shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;

  