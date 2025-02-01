import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Tanish Moral',
      role: 'Full Stack Developer',
      image: '/Tanish_photo.jpg',
      linkedin: 'https://www.linkedin.com/in/tanishmoral/',
      instagram: 'https://www.instagram.com/tanish_moral_gurjar/',
      github: 'https://github.com/TanishMoral11',
    },
    {
      name: 'Piyush Nayak',
      role: 'UI/UX Designer',
      image: '/piyush.jpg',
      linkedin: '#',
      instagram: '#',
      github: '#',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black to-indigo-900 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">Our Squad</h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Gen Z innovators pushing boundaries and creating dope digital experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-center shadow-xl transform transition duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 opacity-50 rounded-full filter blur-3xl"></div>
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-blue-500 opacity-50"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-indigo-400 mb-6">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110">
                  <FaInstagram size={24} />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;