import React, { useState } from 'react';

const Hero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // Controle para visibilidade do formulário
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Controle para saber se o formulário foi enviado
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados do formulário, como uma requisição HTTP
    console.log('Form submitted:', formData);
    
    // Simulando o envio bem-sucedido e alterando o estado
    setIsFormSubmitted(true); // Marca que o formulário foi enviado
    setIsFormVisible(false); // Esconde o formulário após o envio
  };

  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className={`absolute inset-0 transition-all duration-500 ${isFormVisible ? 'blur-md' : ''}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl tracking-tight font-extrabold text-white sm:text-6xl md:text-7xl leading-tight">
            <span className="block">Monetize sua expertise jurídica</span>
            <span className="block text-purple-200 gradient-text">
              com a Lex Tech e alcance resultados reais agora.
            </span>
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-lg text-purple-100 sm:text-xl md:mt-7 md:text-2xl">
            Com as ferramentas e estratégias certas, você dominará o mercado e conquistará o sucesso que merece.
          </p>
          <div className="mt-12 flex justify-center gap-6">
            {/* Exibe o botão apenas se o formulário ainda não foi exibido */}
            {!isFormVisible && !isFormSubmitted && (
              <button
                onClick={() => setIsFormVisible(true)} // Exibe o formulário e esconde o botão ao clicar
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition-transform transform hover:scale-105"
              >
                Comece Agora
              </button>
            )}
          </div>
        </div>

        {/* Formulário de contato com transição */}
        {isFormVisible && !isFormSubmitted && (
          <div id="form-section" className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl text-white text-center">Entre em Contato</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-xl transition-all duration-500 opacity-100">
              <div>
                <label htmlFor="name" className="block text-purple-100 text-sm font-medium">Seu Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-md border-2 border-transparent focus:ring-indigo-500 focus:border-indigo-500 text-purple-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-purple-100 text-sm font-medium">Seu E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 rounded-md border-2 border-transparent focus:ring-indigo-500 focus:border-indigo-500 text-purple-900"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-purple-100 text-sm font-medium">Sua Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 rounded-md border-2 border-transparent focus:ring-indigo-500 focus:border-indigo-500 text-purple-900"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition-transform transform hover:scale-105"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Exibe o botão novamente se o formulário foi enviado */}
        {isFormSubmitted && (
          <div className="mt-12 text-center">
            <p className="text-lg text-white mb-4">Obrigado! Sua mensagem foi enviada com sucesso.</p>
            <button
              onClick={() => setIsFormSubmitted(false)} // Permite ao usuário reiniciar o processo
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 transition-transform transform hover:scale-105"
            >
              Comece Agora
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
