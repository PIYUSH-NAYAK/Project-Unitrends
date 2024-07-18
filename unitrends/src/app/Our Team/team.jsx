import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Tanish Moral',
      image: '/Tanish_photo.jpg',
    },
    {
      name: 'Piyush Nayak',
      image: '/Piyush.png',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-4">Our Team</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Passionate professionals dedicated to creating amazing products and services in a comfortable and productive environment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 text-center shadow-lg transform transition duration-500 hover:scale-105">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-indigo-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6">{member.name}</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
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