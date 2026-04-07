import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Tem dúvidas ou quer participar do Agrinho? Estamos aqui para ajudar!
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Exemplo, 123 - Centro<br />
                      Guarapuava - PR<br />
                      CEP: 85010-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Telefone</h3>
                    <p className="text-gray-600">
                      (42) 3624-4000<br />
                      WhatsApp: (42) 99999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">E-mail</h3>
                    <p className="text-gray-600">
                      contato@agrinho-guarapuava.com.br<br />
                      coordenacao@agrinho-guarapuava.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 17h<br />
                      Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Redes Sociais</h3>
                <p className="text-gray-600 mb-4">Siga-nos nas redes sociais e fique por dentro de todas as novidades!</p>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envie uma Mensagem
                </h2>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                    <div className="text-green-600 text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-green-700">
                      Obrigado pelo contato. Responderemos em breve!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="(42) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="participacao">Quero Participar do Programa</option>
                        <option value="informacoes">Informações Gerais</option>
                        <option value="parceria">Parceria/Patrocínio</option>
                        <option value="sugestao">Sugestões</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                        placeholder="Digite sua mensagem aqui..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </button>

                    <p className="text-sm text-gray-500 text-center">
                      * Campos obrigatórios
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Localização</h2>
            <p className="text-lg text-gray-600">Venha nos visitar em Guarapuava</p>
          </div>
          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-green-100 to-yellow-100 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <p className="text-xl font-semibold">Guarapuava - PR</p>
                <p className="text-sm mt-2">Mapa interativo em breve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-600">
              Respostas para as dúvidas mais comuns
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Como minha escola pode participar do Agrinho?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Entre em contato conosco através do formulário acima ou pelos telefones informados. 
                Nossa equipe irá agendar uma reunião para apresentar o programa e esclarecer todas as dúvidas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                O programa tem algum custo?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Não! O Agrinho é totalmente gratuito para as escolas participantes. 
                Fornecemos materiais didáticos, capacitação para professores e todo o suporte necessário.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quais séries podem participar?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                O Agrinho atende alunos do Ensino Fundamental (1º ao 9º ano), com atividades 
                adaptadas para cada faixa etária.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Como funciona o calendário de atividades?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                O programa acontece durante o ano letivo, com início em março e encerramento em novembro. 
                Cada escola pode adaptar as atividades conforme sua realidade e calendário.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
