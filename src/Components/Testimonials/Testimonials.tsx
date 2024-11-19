import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dra. Ana Silva",
      role: "Advogada Especialista em Direito Digital",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "A plataforma revolucionou a forma como produzo e distribuo meus cursos jurídicos. A interface intuitiva e as ferramentas avançadas me permitiram alcançar mais alunos com maior eficiência."
    },
    {
      name: "Dr. Carlos Mendes",
      role: "Professor de Direito Empresarial",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Desde que comecei a utilizar esta plataforma, a qualidade dos meus infoprodutos melhorou significativamente. O suporte técnico é excepcional e as ferramentas de análise são fundamentais."
    },
    {
      name: "Dra. Patricia Santos",
      role: "Consultora Jurídica",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "A facilidade de criar e gerenciar cursos online é impressionante. A plataforma oferece todos os recursos necessários para desenvolver conteúdo jurídico de alta qualidade."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-purple-700 to-purple-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-xl text-gray-200">
            Depoimentos de profissionais que transformaram sua maneira de criar e distribuir conteúdo jurídico
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote>
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mt-4 text-gray-200">
            Avaliação média de 4.9/5 baseada em mais de 500 avaliações
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
