// components/Projects.tsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const projects = [
    {
      title: 'Bajaj Finserv Health',
      description: 'A health-tech company providing access to preventive, personalized & affordable healthcare for all!',
      link: 'https://www.bajajfinservhealth.in/',
      image: 'https://www.equitypandit.com/wp-content/uploads/2024/01/f50a2851f2ba567af9cc91434d4fa41f-1920x1079.jpg',
    },
    {
      title: 'Kotak 811',
      description: 'Digital Banking',
      link: 'https://www.kotak811.com/',
      image: 'https://scontent.fbom26-3.fna.fbcdn.net/v/t39.30808-6/357833783_280714441142762_2742887508261440935_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XLhzbsbtYdIQ7kNvgF0WYhO&_nc_zt=23&_nc_ht=scontent.fbom26-3.fna&_nc_gid=AJboPXatn2UFC5pNo3ep6OA&oh=00_AYC3i2_nTQ7vFBbK0-qUoYxNxY4f7bnMY_PqWucnROHM0g&oe=67BF5EB1',
    },
    {
      title: 'Salesforce',
      description: '👋 We\'re Salesforce, the customer company. CRM + Data + AI + Trust.',
      link: 'https://www.salesforce.com/',
      image: 'https://www.twoday.com/hubfs/GL%20-%20twoday%20Global/GL_Website/Pictures/Salesforce-4-3-A.svg',
    },
  ];
  
  const Projects = () => {
    return (
      <div id="projects" className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition"
              whileHover={{ y: -10 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="text-red-400 hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  
