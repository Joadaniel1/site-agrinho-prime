import { Link } from "react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Agrinho Guarapuava</h3>
            <p className="text-gray-400 leading-relaxed">
              Programa de responsabilidade social do SENAR-PR que promove educação, 
              cidadania e sustentabilidade para crianças e jovens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-green-400 transition-colors">
                  Sobre o Programa
                </Link>
              </li>
              <li>
                <Link to="/atividades" className="hover:text-green-400 transition-colors">
                  Atividades
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="hover:text-green-400 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-green-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Guarapuava - Paraná, Brasil</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>(42) 3624-4000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>contato@agrinho-guarapuava.com.br</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Agrinho Guarapuava. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Uma iniciativa do SENAR-PR para educação e desenvolvimento sustentável.
          </p>
        </div>
      </div>
    </footer>
  );
}
