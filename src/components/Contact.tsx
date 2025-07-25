import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "244938360626"; // Número do WhatsApp (código do país + número)
    const message = "Olá! Gostaria de agendar uma reunião para discutir um projeto.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar suas ideias em realidade? Entre em contacto e vamos discutir seu próximo projeto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">ladislau.pascoal@hotmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Telefone</h3>
              <p className="text-gray-300">+244 (938) 360-626</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Localização</h3>
              <p className="text-gray-300">Kilamba Kiaxi, Camama, Luanda-Angola</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Disponibilidade</h3>
              <p className="text-gray-300">Segunda à Sexta, 9h às 18h</p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para começar?
              </h3>
              <p className="text-gray-300 mb-6">
                Clique no botão abaixo para agendar uma reunião via WhatsApp
              </p>
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 font-semibold text-lg shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Agendar Reunião</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;