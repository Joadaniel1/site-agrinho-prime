import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Eye, Heart, Users, Book, Sprout, Shield, Star } from "lucide-react";

export function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Sobre o Agrinho</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Conheça a história, missão e valores do programa que transforma vidas 
            através da educação em Guarapuava
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                O Agrinho nasceu em 1995 no Paraná, como uma iniciativa do SENAR-PR 
                (Serviço Nacional de Aprendizagem Rural), com o objetivo de levar educação 
                de qualidade sobre temas rurais e sustentabilidade para as escolas.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Em Guarapuava, o programa chegou há mais de 15 anos e desde então tem 
                transformado a vida de milhares de crianças e jovens, promovendo consciência 
                ambiental, cidadania e desenvolvimento sustentável.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hoje, o Agrinho é reconhecido como um dos principais programas de educação 
                para a sustentabilidade do Brasil, alcançando centenas de municípios e 
                milhões de estudantes em todo o Paraná.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1773171032855-d96bff06f70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGxhbmRzY2FwZSUyMGJyYXppbCUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc3NTU2MDA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Paisagem rural de Guarapuava"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Promover educação transformadora que desenvolva cidadãos conscientes, 
                responsáveis e comprometidos com a sustentabilidade, o meio ambiente 
                e o desenvolvimento social.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser referência nacional em educação para sustentabilidade, formando 
                gerações capazes de construir um futuro mais justo, equilibrado e 
                harmonioso entre campo e cidade.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Respeito ao meio ambiente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Ética e cidadania</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Inovação educacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Compromisso social</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Objetivos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              O Agrinho trabalha com objetivos claros para transformar a educação
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-6 bg-green-50 rounded-xl">
              <div className="bg-green-600 text-white p-3 rounded-lg h-fit">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Formar Cidadãos Conscientes</h3>
                <p className="text-gray-600">
                  Desenvolver senso crítico e responsabilidade social nos estudantes
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-yellow-50 rounded-xl">
              <div className="bg-yellow-600 text-white p-3 rounded-lg h-fit">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Promover Sustentabilidade</h3>
                <p className="text-gray-600">
                  Ensinar práticas sustentáveis e respeito ao meio ambiente
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-green-50 rounded-xl">
              <div className="bg-green-600 text-white p-3 rounded-lg h-fit">
                <Book className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Qualificar a Educação</h3>
                <p className="text-gray-600">
                  Oferecer materiais didáticos e capacitação para professores
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-yellow-50 rounded-xl">
              <div className="bg-yellow-600 text-white p-3 rounded-lg h-fit">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Valorizar o Campo</h3>
                <p className="text-gray-600">
                  Reconhecer a importância do agronegócio e da vida rural
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-green-50 rounded-xl">
              <div className="bg-green-600 text-white p-3 rounded-lg h-fit">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Desenvolver Saúde e Bem-estar</h3>
                <p className="text-gray-600">
                  Promover alimentação saudável e qualidade de vida
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-yellow-50 rounded-xl">
              <div className="bg-yellow-600 text-white p-3 rounded-lg h-fit">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Estimular a Criatividade</h3>
                <p className="text-gray-600">
                  Incentivar projetos inovadores e expressão artística
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Parceiros e Apoiadores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              O Agrinho é possível graças à colaboração de diversas instituições
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🌾</div>
                <h3 className="font-bold text-gray-900 mb-2">SENAR-PR</h3>
                <p className="text-gray-600">
                  Serviço Nacional de Aprendizagem Rural do Paraná
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏫</div>
                <h3 className="font-bold text-gray-900 mb-2">Secretarias de Educação</h3>
                <p className="text-gray-600">
                  Parcerias com secretarias municipais e estadual
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="font-bold text-gray-900 mb-2">Empresas e ONGs</h3>
                <p className="text-gray-600">
                  Apoio de empresas privadas e organizações sociais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-700 to-green-600 text-white rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Nosso Impacto</h2>
              <p className="text-xl text-green-100">
                Resultados que transformam nossa comunidade
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">5.000+</div>
                <div className="text-green-100">Estudantes Alcançados</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-green-100">Escolas Participantes</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-green-100">Professores Capacitados</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-green-100">Projetos Desenvolvidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
