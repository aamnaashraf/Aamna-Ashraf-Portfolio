// components/TechStackSection.tsx
import { FaNodeJs, FaJs, FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFigma, SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";

const TechStackSection = () => {
  const techItems = [
    // Frontend
    { name: "HTML", icon: <FaHtml5 />, percentage: 95, color: "border-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, percentage: 90, color: "border-blue-500" },
    { name: "JavaScript", icon: <FaJs />, percentage: 92, color: "border-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, percentage: 85, color: "border-blue-600" },
    { name: "React", icon: <FaReact />, percentage: 90, color: "border-blue-400" },
    { name: "Next.js", icon: <SiNextdotjs />, percentage: 88, color: "border-white" },
    { name: "Figma", icon: <SiFigma />, percentage: 80, color: "border-purple-500" },
    
    // Backend
    { name: "Node.js", icon: <FaNodeJs />, percentage: 89, color: "border-green-500" },
    { name: "Express", icon: <SiExpress />, percentage: 85, color: "border-gray-400" },
    { name: "MongoDB", icon: <SiMongodb />, percentage: 83, color: "border-green-400" },
    { name: "PostgreSQL", icon: <SiPostgresql />, percentage: 80, color: "border-blue-400" },
    
    // Tools
    { name: "Git", icon: <FaGitAlt />, percentage: 87, color: "border-red-500" },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-black">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
          {techItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-20 h-20 mb-3 group">
                {/* Static background circle */}
                <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
                
                {/* Animated percentage circle */}
                <div 
                  className={`absolute inset-0 rounded-full border-4 ${item.color} border-opacity-30`}
                  style={{
                    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                    transform: `rotate(${item.percentage * 3.6}deg)`,
                    transition: "transform 0.5s ease-out",
                  }}
                ></div>
                
                {/* Percentage fill (animated on hover) */}
                <div 
                  className={`absolute inset-0 rounded-full border-4 ${item.color} border-opacity-100`}
                  style={{
                    clipPath: `polygon(50% 50%, 50% 0%, 0% 0%, 0% 100%, 50% 100%)`,
                    transform: "rotate(0deg)",
                    transition: "transform 0.5s ease-out",
                  }}
                ></div>
                
                {/* Icon */}
                <div className={`absolute inset-0 flex items-center justify-center text-3xl ${item.color.replace('border-', 'text-')}`}>
                  {item.icon}
                </div>
              </div>
              <span className="text-white font-medium text-center">{item.name}</span>
              <span className={`text-xs mt-1 ${item.color.replace('border-', 'text-')}`}>
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;