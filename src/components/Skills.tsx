// components/SkillsMarquee.tsx
import Marquee from "react-fast-marquee";
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFigma} from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";

const skills = [
  { icon: <FaJs size={36} color="#f7df1e" />, name: "JavaScript" },
  { icon: <SiTypescript size={36} color="#3178c6" />, name: "TypeScript" },
  { icon: <FaReact size={36} color="#61dafb" />, name: "React" },
  { icon: <SiNextdotjs size={36} color="#ffffff" />, name: "Next.js" },
  { icon: <SiTailwindcss size={36} color="#38bdf8" />, name: "Tailwind CSS" },
  { icon: <FaHtml5 size={36} color="#e34f26" />, name: "HTML" },
  { icon: <FaCss3Alt size={36} color="#1572b6" />, name: "CSS" },
  { icon: <FaPython size={36} color="#3776AB" />, name: "Python" },
  { icon: <SiFigma size={36} color="#F24E1E" />, name: "Figma" },
  { icon: <AiOutlineRobot size={36} color="#9b59b6" />, name: "Agentic AI" },
];

export default function Skills() {
  return (
    <div id='skills' className="bg-gradient-to-b from-black py-12 group">
      <h2 className="text-center text-4xl font-extrabold text-white mb-10 tracking-wide transition-all duration-500 hover:scale-105">
        Mastering{" "}
        <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 bg-clip-text text-transparent 
                        hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-500">
          Cutting-Edge
        </span>{" "}
        <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 bg-clip-text text-transparent 
                        hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-500"> Skills & 
        </span>{" "}
       <span>Technologies</span> 
      </h2>

      <Marquee gradient={false} speed={60} pauseOnHover={true}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#0f0f0d] text-white rounded-xl mx-5 p-5 flex flex-col items-center min-w-[130px] shadow-lg 
              hover:border-2 hover:border-purple-500 hover:shadow-purple-600 hover:scale-110 transition-all duration-300
              group-hover:opacity-90 hover:!opacity-100 hover:bg-[#1a1a17]"
          >
            <div className="transition-all duration-300 group-hover/skill:scale-110">
              {skill.icon}
            </div>
            <p className="mt-3 text-lg font-semibold transition-all duration-300 group-hover/skill:text-blue-300">
              {skill.name}
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}