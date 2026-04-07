import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sprout, Book, Users, Award, Leaf, Heart, Lightbulb, Target } from "lucide-react";

export function Activities() {
  const activities = [
    {
      icon: Sprout,
      title: "Hortas Escolares",
      description: "Estudantes aprendem na prática sobre cultivo de alimentos orgânicos, compostagem e alimentação saudável.",
      color: "green",
      benefits: [
        "Aprendizado prático sobre agricultura",
        "Consciência sobre alimentação saudável",
        "Trabalho em equipe e responsabilidade",
        "Conexão com a natureza"
      ]
    },
    {
      icon: Leaf,
      title: "Educação Ambiental",
      description: "Atividades focadas em preservação ambiental, reciclagem, economia de recursos e sustentabilidade.",
      color: "green",
      benefits: [
        "Consciência ecológica",
        "Práticas de reciclagem e reutilização",
        "Preservação de recursos naturais",
        "Combate ao desperdício"
      ]
    },
    {
      icon: Book,
      title: "Concursos Educacionais",
      description: "Competições de redação, desenho e projetos que estimulam criatividade e conhecimento dos alunos.",
      color: "yellow",
      benefits: [
        "Estímulo à criatividade",
        "Desenvolvimento da escrita",
        "Expressão artística",
        "Reconhecimento e premiação"
      ]
    },
    {
      icon: Users,
      title: "Visitas Técnicas",
      description: "Conhecimento prático através de visitas a propriedades rurais, indústrias e cooperativas.",
      color: "green",
      benefits: [
        "Experiência prática no campo",
        "Conhecimento de tecnologias agrícolas",
        "Interação com profissionais",
        "Valorização do trabalho rural"
      ]
    },
    {
      icon: Heart,
      title: "Saúde e Bem-estar",
      description: "Projetos sobre alimentação saudável, qualidade de vida, higiene e prevenção de doenças.",
      color: "yellow",
      benefits: [
        "Hábitos alimentares saudáveis",
        "Cuidados com a saúde",
        "Qualidade de vida",
        "Prevenção e autocuidado"
      ]
    },
    {
      icon: Lightbulb,
      title: "Empreendedorismo Rural",
      description: "Desenvolvimento de projetos empreendedores voltados ao agronegócio e economia solidária.",
      color: "green",
      benefits: [
        "Visão empreendedora",
        "Planejamento e gestão",
        "Criação de negócios sustentáveis",
        "Desenvolvimento econômico"
      ]
    },
    {
      icon: Target,
      title: "Cidadania e Ética",
      description: "Formação de valores como respeito, solidariedade, cooperação e responsabilidade social.",
      color: "yellow",
      benefits: [
        "Formação de valores",
        "Consciência cidadã",
        "Respeito à diversidade",
        "Responsabilidade social"
      ]
    },
    {
      icon: Award,
      title: "Capacitação de Professores",
      description: "Formação continuada para educadores com materiais didáticos e metodologias inovadoras.",
      color: "green",
      benefits: [
        "Atualização pedagógica",
        "Materiais de qualidade",
        "Troca de experiências",
        "Melhoria do ensino"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Nossas Atividades</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Conheça as principais atividades e projetos desenvolvidos pelo Agrinho 
            em Guarapuava para transformar a educação
          </p>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1607109792536-fbccc49c82f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBjaGlsZHJlbiUyMHBsYW50aW5nfGVufDF8fHx8MTc3NTU2MDA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Crianças em atividade de plantio"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Aprendizado Prático e Transformador
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Todas as nossas atividades são pensadas para proporcionar experiências 
                práticas e significativas aos estudantes, conectando teoria e prática 
                de forma envolvente.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Através de metodologias ativas e participativas, os alunos desenvolvem 
                habilidades essenciais para a vida, como trabalho em equipe, pensamento 
                crítico e consciência ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Principais Atividades
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada atividade é cuidadosamente planejada para desenvolver competências 
              específicas nos estudantes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              const bgColor = activity.color === "green" ? "bg-green-100" : "bg-yellow-100";
              const iconColor = activity.color === "green" ? "text-green-600" : "text-yellow-600";
              const borderColor = activity.color === "green" ? "border-green-200" : "border-yellow-200";
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-8 border-t-4 ${borderColor} hover:shadow-2xl transition-shadow`}
                >
                  <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {activity.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefícios:</h4>
                    <ul className="space-y-2">
                      {activity.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className={`${iconColor} mt-1 flex-shrink-0`}>✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calendário de Atividades 2026
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principais eventos e atividades programadas para este ano
            </p>
          </div>
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-green-600 text-white rounded-lg px-4 py-2 font-bold text-center min-w-[80px]">
                  MAR
                </div>
                <div className="w-1 bg-green-200 flex-1 mt-2"></div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 flex-1 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Lançamento do Programa</h3>
                <p className="text-gray-600">
                  Início oficial das atividades do Agrinho 2026 nas escolas de Guarapuava
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-yellow-600 text-white rounded-lg px-4 py-2 font-bold text-center min-w-[80px]">
                  ABR-MAI
                </div>
                <div className="w-1 bg-green-200 flex-1 mt-2"></div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 flex-1 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Capacitação de Professores</h3>
                <p className="text-gray-600">
                  Formação continuada para educadores com novos materiais e metodologias
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-green-600 text-white rounded-lg px-4 py-2 font-bold text-center min-w-[80px]">
                  JUN-AGO
                </div>
                <div className="w-1 bg-green-200 flex-1 mt-2"></div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 flex-1 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Desenvolvimento de Projetos</h3>
                <p className="text-gray-600">
                  Período de execução dos projetos nas escolas e comunidades
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-yellow-600 text-white rounded-lg px-4 py-2 font-bold text-center min-w-[80px]">
                  SET
                </div>
                <div className="w-1 bg-green-200 flex-1 mt-2"></div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 flex-1 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Concursos e Competições</h3>
                <p className="text-gray-600">
                  Inscrições para concursos de redação, desenho e projetos inovadores
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-green-600 text-white rounded-lg px-4 py-2 font-bold text-center min-w-[80px]">
                  OUT
                </div>
                <div className="w-1 bg-green-200 flex-1 mt-2"></div>
              </div>
              <div className="bg-green-50 rounded-xl p-6 flex-1 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Mostra de Trabalhos</h3>
                <p className="text-gray-600">
                  Apresentação dos projetos desenvolvidos pelos estudantes ao longo do ano
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="bg-yellow-600 text-white rounded-lg px-4 py-2 font-bold text-center min-w-[80px]">
                  NOV
                </div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Premiação e Encerramento</h3>
                <p className="text-gray-600">
                  Cerimônia de premiação dos vencedores e encerramento das atividades
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Participe das Nossas Atividades!
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Entre em contato para saber como sua escola pode participar do Agrinho 
            e oferecer essas experiências transformadoras aos seus alunos.
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </div>
  );
}
