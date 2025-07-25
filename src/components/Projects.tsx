import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Pencil,
  Smartphone,
  Globe,
  Shield,
  Settings
} from "lucide-react";
import Mobile from "../assets/img/Mobile.png";
import Web1 from "../assets/img/Web1.png";
import Web2 from "../assets/img/Web2.png";
import Web3 from "../assets/img/Web3.png";
import bd from "../assets/img/bd.png";
import designer1 from "../assets/img/designer1.png";
import designer2 from "../assets/img/designer2.png";
import designer3 from "../assets/img/designer3.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectCategories = [
    { id: "all", name: "Todos", icon: Code },
    { id: "web", name: "Web Development", icon: Globe },
    { id: "mobile", name: "Mobile Apps", icon: Smartphone },
    { id: "database", name: "Base de Dados", icon: Database },
    { id: "cloud", name: "Designer Gráfico", icon: Pencil },
    { id: "security", name: "Help Desk", icon: Settings },
  ];

  const projects = [
    {
      id: 1,
      title: "Web Site - M.OPTICA",
      description:
        "Site dinâmico e responsivo, detalhando tudo sobre a sua Empresa e serviços.",
      image: Web1,
      category: "web",
      technologies: ["HTML", "CSS", "BootStrap", "JQuery"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "CNP App",
      description:
        "Carteira Nacional Profissional aplicativo móvel para os profissionais de diferentes areas.",
      image: Mobile,
      category: "mobile",
      technologies: [
        "React Native",
        "Expo",
        "Tailwind CSS",
        "Push Notifications",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Posts Redes Sociais - Hossana Residence",
      description:
        "Posts personalizados para todas redes sociais.",
      image: designer1,
      category: "cloud",
      technologies: ["PhotoShop", "Illustrator"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Web Site - HCN Advogados",
      description:
        "Site dinamico e responsivo para uma sociedade de Advogados HCN.",
      image: Web3,
      category: "web",
      technologies: ["HTML", "CSS", "BootStrap"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Web Site - Hossana Residence",
      description:
        "Site dinâmico e responsivo, detalhando tudo sobre a sua Empresa e serviços",
      image: Web2,
      category: "web",
      technologies: [
        "React Js",
        "TailwindCss",
        "Frame Motion",
        "JavaScript",
        "TypeScript",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 6,
      title: "Post Redes Sociais - Chana Chic",
      description:
        "Posts personalizados para todas redes sociais.",
      image: designer2,
      category: "cloud",
      technologies: ["PhotoShop", "ILLustrator"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 7,
      title: "Help Desk - Ferramenta e Manutenção",
      description:
        "Suporte técnico em informatica.",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "security",
      technologies: ["Hardwere", "Softwere", "Manutenção", "Suporte Técnico"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 8,
      title: "Logo Tipo - Identidade Visual",
      description:
        "Aplicativo para busca e visualização de imóveis com realidade aumentada.",
      image: designer3,
      category: "cloud",
      technologies: ["Flutter", "AR Core", "Google Maps", "Firebase", "Dart"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 9,
      title: "Banco de Dados - Sistema Web",
      description:
        "Sistema de registo para profissionais de Tecnologia.",
      image: bd,
      category: "database",
      technologies: [
        "MySQL",
        "WorkBench",
        "WamperServer",
        "BDDiagram",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projetos"
      className="py-20 bg-gradient-to-br from-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando expertise
            em diferentes tecnologias e domínios
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary-400 mb-8 text-center">
            Projetos em Destaque
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Destaque
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-900/30 text-primary-300 text-sm rounded-full border border-primary-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Ver Projeto</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-900/20 text-primary-300 text-xs rounded-full border border-primary-700/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Ver</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <Github className="w-3 h-3" />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">50+</div>
            <div className="text-gray-300">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">8+</div>
            <div className="text-gray-300">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">30+</div>
            <div className="text-gray-300">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">20+</div>
            <div className="text-gray-300">Tecnologias</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
