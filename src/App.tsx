import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CTASection from './Components/CTASection/CTASection';
import Hero from './Components/Hero/Hero';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Barra de navegação */}
        <Navbar />

        {/* Conteúdo principal */}
        <main className="flex-grow">
          {/* Seção Hero */}
          <Hero />

          {/* Seção CTA */}
          <CTASection />

          {/* Depoimentos */}
          <Testimonials />

          {/* Produtos e Serviços
          <section className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cursos Online</h2>
              <p className="text-gray-600">
                Capacitação jurídica especializada com foco em tecnologia e inovação.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Consultoria</h2>
              <p className="text-gray-600">
                Assessoria personalizada para digitalização de serviços jurídicos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Ferramentas</h2>
              <p className="text-gray-600">
                Soluções tecnológicas para otimizar seu trabalho jurídico.
              </p>
            </div>
          </section> */}
        </main>

        {/* Rodapé */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
