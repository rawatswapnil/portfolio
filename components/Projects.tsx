// components/Projects.tsx
import Image from 'next/image';

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
      image: 'https://shelf.io/wp-content/uploads/2023/09/salesforce.png.webp',
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <Image className="w-full h-48 object-cover" src={project.image} alt={project.title} width={600} height={400}/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a href={project.link} className="text-blue-500">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  