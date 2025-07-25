import React from "react";
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Computer,
  File,
  Brain,
  Pencil,
} from "lucide-react";

const Specialties = () => {
  const specialties = [
    {
      icon: Smartphone,
      title: "Mobile",
      description:
        "Desenvolvimento de aplicativos móveis para Android e iOS com foco em React Native e outras tecnologias modernas. Aplicativos funcionais, intuitivos e integrados com APIs e bancos de dados, proporcionando uma excelente experiência de uso para o cliente final",
      skills: ["React Native", "Expo"],
    },
    {
      icon: Globe,
      title: "Web",
      description:
        "Criação de sites e sistemas web responsivos. Domínio de linguagens e ferramentas como HTML, CSS, JavaScript, TypeScript e frameworks modernos. Foco em usabilidade, performance e integração de sistemas, garantindo aplicações seguras, escaláveis e de alta qualidade visual.",
      skills: [
        "React js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description:
        "Atuação na formção em planejamento, estruturação de bancos de dados relacionais. Responsável por garantir a segurança, integridade e disponibilidade das informações, realizando backups, monitoramento e recuperação de dados sempre que necessário.",
      skills: ["SQLServer", "MySQL"],
    },
    {
      icon: Computer,
      title: "Marketing Digital",
      description:
        "Planejamento, execução e análise de estratégias digitais voltadas para crescimento de marcas, aumento de visibilidade e fortalecimento da presença online. Gerenciamento de redes sociais, criação de conteúdos, campanhas pagas (Google Ads, Facebook Ads) e otimização de resultados através de métricas.",
      skills: ["Facebook", "Instagram", "Whatsapp Business", "Google Ads"],
    },
    {
      icon: Code,
      title: "Lógica de Programação",
      description:
        "Formação em domínio da lógica de programação aplicada à criação de soluções inteligentes, desenvolvimento de algoritmos, automação de tarefas e construção de sistemas eficientes. A lógica bem estruturada permite criar aplicações sólidas e de fácil manutenção.",
      skills: ["Algoritmos", "Console Application", "Windows Forms C#"],
    },
    {
      icon: Computer,
      title: "Hardware e Software",
      description:
        "Experiência no suporte técnico, manutenção, configuração e otimização de computadores e dispositivos. Realizo diagnósticos e soluções de problemas relacionados a sistemas operacionais, aplicativos, garantindo o bom funcionamento e a segurança dos equipamentos e softwares.",
      skills: ["Sistemas Operativo 10 e 11"],
    },
    {
      icon: File,
      title: "Auxiliar Administrativo",
      description:
        "Atuação em rotinas administrativas, organização de documentos, elaboração de relatórios, atendimento ao cliente e suporte em processos internos. Utilizo ferramentas digitais para automatizar tarefas, agilizar fluxos e contribuir para a eficiência operacional das empresas.",
      skills: ["Microsoft Office", "Excel Avançado"],
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description:
        "Atuação no desenvolvimento e integração de soluções baseadas em Inteligência Artificial, incluindo chatbots, automação de processos e manipulação de dados inteligentes. Busco aplicar IA para resolver problemas complexos e agregar inovação aos projectos.",
      skills: ["Chat GPT", "Bolt New AI", "Cursor IDE", "Gemini Pro"],
    },
    {
      icon: Pencil,
      title: "Designer Gráfico",
      description:
        "Criação de identidades visuais, artes para redes sociais, apresentações e materiais promocionais. Domínio de ferramentas como Photoshop, Illustrator. Design alinhado à comunicação da marca e aos objetivos estratégicos.",
      skills: ["Photo Shop", "Illustrator"],
    },
  ];

  return (
    <section id="especialidades" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minhas Especialidades
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vamos transformar seus desafios em resultados apresento as áreas
            onde posso agregar valor real, impulsionar seus projectos e ajudar a
            alcançar os objectivos do seu negócio com eficiência e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const IconComponent = specialty.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">
                    {specialty.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {specialty.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {specialty.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-900/30 text-primary-300 text-sm rounded-full border border-primary-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
