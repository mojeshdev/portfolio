import { FaJava, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiJavascript, SiExpress, SiTailwindcss, SiPostgresql, SiMongodb, SiPostman, SiJupyter } from "react-icons/si";
import { Code2, FileCode2, Database, Layers, GitBranch, Terminal, Brain } from "lucide-react";
import { VscVscode } from "react-icons/vsc"; // ✅ correct import

const skills = [
    {
    category: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    items: [
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "Java", icon: <FaJava color="#E76F00" /> },
    { name: "SQL", icon: <SiPostgresql color="#336791" /> },
    ],
},
    {
    category: "Frameworks",
    icon: <Layers className="w-5 h-5" />,
    items: [
    { name: "React JS", icon: <FaReact color="#61DAFB" /> },
    { name: "Node JS", icon: <FaNodeJs color="#339933" /> },
    { name: "Express JS", icon: <SiExpress color="#000000" /> },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    ],
},
    {
    category: "Databases",
    icon: <Database className="w-5 h-5" />, // ✅ better than GitBranch
    items: [
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    ],
},
    {
    category: "Software Tools",
    icon: <Brain className="w-5 h-5" />,
    items: [
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "Jupyter Notebook", icon: <SiJupyter color="#F37726" /> },
    { name: "Linux", icon: <FaLinux color="#FCC624" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
    ],
},
    {
    category: "Design",
    icon: <FileCode2 className="w-5 h-5" />,
    items: [
    { name: "Microservices", icon: "⚡" },
    { name: "Monolithic", icon: "🏗️" },
    ],
},
];

export default function Skills() {
return (
    <section className="px-6 py-10 max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
        <div
            key={skill.category}
            className="bg-gray-950 rounded-xl border border-gray-600 shadow-md p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              {skill.icon} {skill.category} {/* ✅ Added icon here */}
            </h3>
            <div className="flex flex-wrap gap-3">
            {skill.items.map((item) => (
                <span
                key={item.name}
                className="px-3 py-1 rounded-full shadow-sm text-sm font-medium flex items-center gap-2 bg-transparent text-white border border-white transition-colors"
                >
                {item.icon} {item.name}
                </span>
            ))}
            </div>
        </div>
        ))}
    </div>
    </section>
    );
}
