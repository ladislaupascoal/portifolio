import React from 'react';

const Tools = () => {
  const toolCategories = [
    {
      category: 'Frontend',
      tools: [
        { name: 'React', logo: '⚛️', color: 'text-blue-400' },
        { name: 'TypeScript', logo: 'TS', color: 'text-blue-500' },
        { name: 'Next.js', logo: '▲', color: 'text-white' },
        { name: 'Tailwind CSS', logo: '🎨', color: 'text-teal-400' },
        { name: 'Vue.js', logo: 'V', color: 'text-green-400' },
      ]
    },
    {
      category: 'Backend',
      tools: [
        { name: 'C#', logo: 'C#', color: 'text-purple-400' },
        { name: 'PHP', logo: '🐘', color: 'text-indigo-400' },
      ]
    },
    {
      category: 'Database',
      tools: [
        { name: 'SQLServer', logo: '🛢️', color: 'text-blue-600' },
        { name: 'MySQL', logo: '🐬', color: 'text-orange-400' },
      ]
    },
    // {
    //   category: 'Cloud & DevOps',
    //   tools: [
    //     { name: 'AWS', logo: '☁️', color: 'text-orange-400' },
    //     { name: 'Azure', logo: '🌐', color: 'text-blue-500' },
    //     { name: 'Docker', logo: '🐳', color: 'text-blue-400' },
    //     { name: 'Kubernetes', logo: '⚙️', color: 'text-blue-600' },
    //     { name: 'Jenkins', logo: '🔧', color: 'text-gray-400' },
    //     { name: 'Terraform', logo: '🏗️', color: 'text-purple-500' }
    //   ]
    // },
    {
      category: 'Mobile',
      tools: [
        { name: 'React Native', logo: '📱', color: 'text-blue-400' },
        { name: 'Expo', logo: '⚙️', color: 'text-blue-500' },
      ]
    },
    {
      category: 'Tools & Others',
      tools: [
        { name: 'Git', logo: '🔀', color: 'text-orange-500' },
        { name: 'VS Code', logo: '💻', color: 'text-blue-500' },
        { name: 'Figma', logo: '🎨', color: 'text-purple-400' },
        { name: 'Postman', logo: '📮', color: 'text-orange-400' },
      ]
    }
  ];

  return (
    <section id="ferramentas" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ferramentas & Tecnologias
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Arsenal completo de tecnologias modernas que utilizo para criar soluções robustas e escaláveis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-primary-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary-400 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="bg-gray-900/70 p-4 rounded-xl border border-gray-600 hover:border-primary-600 transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-lg group-hover:bg-gray-600 transition-colors duration-300">
                        {tool.logo.length === 1 || tool.logo.includes('emoji') ? (
                          <span className="text-xl">{tool.logo}</span>
                        ) : (
                          <span className={`font-bold text-sm ${tool.color}`}>
                            {tool.logo}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className={`font-semibold ${tool.color} group-hover:text-primary-300 transition-colors duration-300`}>
                          {tool.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Level Indicators */}
        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Nível de Experiência
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">8+</span>
              </div>
              <p className="text-green-400 font-semibold">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">5+</span>
              </div>
              <p className="text-blue-400 font-semibold">Projetos Concluídos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">15+</span>
              </div>
              <p className="text-purple-400 font-semibold">Tecnologias Dominadas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">10+</span>
              </div>
              <p className="text-yellow-400 font-semibold">Certificações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;