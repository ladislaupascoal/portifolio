import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Instagram,
  Facebook,
} from "lucide-react";
import perfil from "../assets/img/perfil.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ladicv.pdf"; // Caminho do arquivo dentro da pasta "public"
    link.download = "LadislauCUmbiçaPascoal-CV.pdf"; // Nome com que será salvo
    link.click();
  };

  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")`,
        }}
      />

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary-400 shadow-2xl animate-bounce-slow">
              <img
                src={perfil}
                alt="Ladislau Cumbiça Pascoal - Especialista em TI"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-pulse"></div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Ladislau Cumbiça Pascoal
          </h1>
          <p
            className="text-xl md:text-2xl text-primary-300 mb-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Tecnologia de Informação e Comunicação
          </p>
          <p
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            Experiência em criar soluções inovadoras e escaláveis (web, mobile,
            marketing digital e bases de dados). Apaixonado por tecnologias,
            busco sempre integrar soluções tecnológicas para resolver problemas
            reais e gerar resultados.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={handleDownload}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>
            <button
              onClick={scrollToProjects}
              className="border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Ver Projetos
            </button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 mb-16 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://github.com/ladislaupascoal"
              target="_blank"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ladislau-cumbi%C3%A7a-pascoal-43815814a/"
              target="_blank"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/ladislau_pascoal/"
              target="_blank"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/ladislau.pascoal2"
              target="_blank"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
