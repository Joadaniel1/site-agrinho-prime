import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Users, Leaf, Award, ChevronRight, Heart, Target, Lightbulb } from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/80 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1708513519406-d073dd00783d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGZhcm1pbmclMjBlZHVjYXRpb24lMjBydXJhbHxlbnwxfHx8fDE3NzU1NjAwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Crianças aprendendo sobre agricultura"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Agrinho Guarapuava
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Cultivando conhecimento, colhendo cidadania
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sobre"
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Conheça o Programa
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/atividades"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors border-2 border-white inline-flex items-center justify-center gap-2"
            >
              Ver Atividades
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-green-700 mb-2">5.000+</div>
              <div className="text-gray-600">Estudantes Participantes</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-yellow-700 mb-2">50+</div>
              <div className="text-gray-600">Escolas Parceiras</div>
            </div>
            <div className="text-center">
              <div className="bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-green-800 mb-2">15</div>
              <div className="text-gray-600">Anos de História</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">100+</div>
              <div className="text-gray-600">Projetos Realizados</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                O que é o Agrinho?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                O Agrinho é um programa de responsabilidade social do SENAR-PR (Serviço Nacional 
                de Aprendizagem Rural do Paraná) que promove educação para a vida no campo e na cidade.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Em Guarapuava, o programa beneficia milhares de estudantes, trabalhando temas como 
                sustentabilidade, meio ambiente, saúde, empreendedorismo e cidadania.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Educação com Propósito</h3>
                    <p className="text-gray-600">Formando cidadãos conscientes e responsáveis</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Foco na Sustentabilidade</h3>
                    <p className="text-gray-600">Cuidando do meio ambiente para as próximas gerações</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Inovação e Criatividade</h3>
                    <p className="text-gray-600">Desenvolvendo habilidades para o futuro</p>
                  </div>
                </div>
              </div>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Saiba Mais
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-green-200 to-yellow-200 rounded-2xl -z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBjbGFzc3Jvb20lMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc3NTU2MDA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Crianças em atividade educacional"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Atividades em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça algumas das principais atividades que desenvolvemos com os estudantes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607109792536-fbccc49c82f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBjaGlsZHJlbiUyMHBsYW50aW5nfGVufDF8fHx8MTc3NTU2MDA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hortas escolares"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hortas Escolares</h3>
                <p className="text-gray-600 mb-4">
                  Estudantes aprendem sobre cultivo sustentável, alimentação saudável e 
                  trabalho em equipe através de hortas nas escolas.
                </p>
                <Link
                  to="/atividades"
                  className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-2"
                >
                  Ver mais
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1774865847272-b6f322fe6303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzU1NjAwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Educação ambiental"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Educação Ambiental</h3>
                <p className="text-gray-600 mb-4">
                  Conscientização sobre preservação do meio ambiente, reciclagem e 
                  desenvolvimento sustentável para o futuro.
                </p>
                <Link
                  to="/atividades"
                  className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-2"
                >
                  Ver mais
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707286563398-7f97699cf29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZpZWxkJTIwY3JvcHMlMjBuYXR1cmV8ZW58MXx8fHwxNzc1NTYwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Visitas técnicas"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visitas Técnicas</h3>
                <p className="text-gray-600 mb-4">
                  Experiências práticas em propriedades rurais, conhecendo de perto 
                  a realidade do campo e suas tecnologias.
                </p>
                <Link
                  to="/atividades"
                  className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-2"
                >
                  Ver mais
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Faça Parte do Agrinho!
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como sua escola ou instituição 
            pode participar deste programa transformador.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Entre em Contato
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
