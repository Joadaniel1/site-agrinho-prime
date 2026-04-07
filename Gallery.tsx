import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1607109792536-fbccc49c82f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBjaGlsZHJlbiUyMHBsYW50aW5nfGVufDF8fHx8MTc3NTU2MDA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Atividade de Plantio",
      description: "Estudantes aprendendo sobre cultivo sustentável"
    },
    {
      url: "https://images.unsplash.com/photo-1708513519406-d073dd00783d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGZhcm1pbmclMjBlZHVjYXRpb24lMjBydXJhbHxlbnwxfHx8fDE3NzU1NjAwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Educação no Campo",
      description: "Experiência prática em ambiente rural"
    },
    {
      url: "https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBjbGFzc3Jvb20lMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc3NTU2MDA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Atividades em Sala",
      description: "Aprendizado sobre sustentabilidade"
    },
    {
      url: "https://images.unsplash.com/photo-1774865847272-b6f322fe6303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzU1NjAwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Agricultura Sustentável",
      description: "Conhecendo práticas de preservação ambiental"
    },
    {
      url: "https://images.unsplash.com/photo-1707286563398-7f97699cf29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZpZWxkJTIwY3JvcHMlMjBuYXR1cmV8ZW58MXx8fHwxNzc1NTYwMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Visita Técnica",
      description: "Estudantes em propriedade rural"
    },
    {
      url: "https://images.unsplash.com/photo-1773171032855-d96bff06f70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGxhbmRzY2FwZSUyMGJyYXppbCUyMGNvdW50cnlzaWRlfGVufDF8fHx8MTc3NTU2MDA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Paisagem Rural",
      description: "Belezas naturais de Guarapuava"
    },
    {
      url: "https://images.unsplash.com/photo-1607109792536-fbccc49c82f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjBjaGlsZHJlbiUyMHBsYW50aW5nfGVufDF8fHx8MTc3NTU2MDA3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Horta Escolar",
      description: "Projeto de horta orgânica na escola"
    },
    {
      url: "https://images.unsplash.com/photo-1774865847272-b6f322fe6303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzU1NjAwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Meio Ambiente",
      description: "Conscientização sobre preservação"
    },
    {
      url: "https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBjbGFzc3Jvb20lMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc3NTU2MDA3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Workshop Educativo",
      description: "Oficina sobre alimentação saudável"
    }
  ];

  const categories = [
    { name: "Todas", count: images.length },
    { name: "Hortas Escolares", count: 3 },
    { name: "Visitas Técnicas", count: 2 },
    { name: "Eventos", count: 2 },
    { name: "Workshops", count: 2 }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Galeria de Fotos</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Momentos especiais e atividades realizadas pelo Agrinho em Guarapuava
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  index === 0
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} <span className="ml-2 text-sm">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{images[selectedImage].title}</h3>
              <p className="text-gray-300">{images[selectedImage].description}</p>
              <div className="flex gap-4 justify-center mt-6">
                <button
                  onClick={() =>
                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
                  }
                  className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Anterior
                </button>
                <button
                  onClick={() =>
                    setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
                  }
                  className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Próxima →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Momentos Registrados</h2>
              <p className="text-green-100 text-lg">
                Cada foto conta uma história de aprendizado e transformação
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-green-100">Fotos no Acervo</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-green-100">Eventos Registrados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-green-100">Atividades Documentadas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5.000+</div>
                <div className="text-green-100">Sorrisos Capturados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vídeos do Agrinho
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confira os vídeos das nossas atividades e eventos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-xl font-semibold">Agrinho 2025 - Retrospectiva</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Retrospectiva Agrinho 2025
                </h3>
                <p className="text-gray-600">
                  Relembre os melhores momentos do programa em 2025
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-yellow-600 to-yellow-700 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-xl font-semibold">Depoimentos</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Depoimentos dos Participantes
                </h3>
                <p className="text-gray-600">
                  Ouça o que alunos e professores têm a dizer sobre o Agrinho
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
