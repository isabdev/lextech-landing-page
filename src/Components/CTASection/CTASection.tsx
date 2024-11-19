import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="relative bg-white py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            Transforme Seu Conhecimento Jurídico em Produtos Digitais
          </h2>
          <p className="text-2xl text-gray-600 mb-12">
            A nossa plataforma especializada ajuda você a criar, gerenciar e escalar infoprodutos jurídicos com facilidade. Alcançar novos clientes nunca foi tão simples.
          </p>
          
          {/* Stats and Graphs Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Profissionais Capacitados */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-300">
              <div className="text-5xl font-extrabold text-gray-900 mb-3">+5000</div>
              <p className="text-gray-700 mb-6">Profissionais Capacitados</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Cursos Publicados */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-300">
              <div className="text-5xl font-extrabold text-gray-900 mb-3">+200</div>
              <p className="text-gray-700 mb-6">Cursos Publicados</p>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Taxa de Satisfação */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border-2 border-purple-300">
              <div className="text-5xl font-extrabold text-gray-900 mb-3">98%</div>
              <p className="text-gray-700 mb-6">Taxa de Satisfação</p>
              <div className="relative w-32 h-32 mx-auto">
                <svg className="absolute w-full h-full transform rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <path className="text-gray-300" fill="none" strokeWidth="4" strokeDasharray="100, 100" stroke="currentColor" d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"></path>
                  <path className="text-purple-600" fill="none" strokeWidth="4" strokeDasharray="98, 100" stroke="currentColor" d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"></path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-gray-900">
                  98%
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action (Encouragement) */}
          <div className="mt-16 text-lg text-gray-700 font-semibold">
            <p>
              Junte-se a milhares de profissionais que já estão criando seu futuro digital. Comece sua jornada conosco agora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
