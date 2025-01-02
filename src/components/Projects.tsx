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
      image: 'https://media.licdn.com/dms/image/v2/C5612AQE_kWodFZjZYw/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1639574217524?e=1740009600&v=beta&t=NL3f-bG3LwRvt-CcLdD02JBQbS5AJ180Klilhxpw3To',
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
  