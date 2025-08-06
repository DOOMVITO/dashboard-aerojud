import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/lovable-uploads/1eed8a4f-ecfe-4be2-9468-7b7bc1758662.png"
                alt="AeroJud Logo"
                className="h-16 w-auto object-contain"
              />
          
            </div>

            <p className="text-gray-300 mb-4">
              Especialistas em direitos do passageiro aéreo.
              Defendemos seus direitos com excelência jurídica.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Voo cancelado</li>
              <li>Atraso de voo</li>
              <li>Overbooking</li>
              <li>Bagagem extraviada</li>
              <li>Consultoria jurídica</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400">Como funciona</a></li>
              <li><a href="#" className="hover:text-blue-400">Direitos do passageiro</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Sobre nós</a></li>
              <li><a href="#" className="hover:text-blue-400">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@aerojud.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AeroJud. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400">Política de Privacidade</a>
              <a href="#" className="hover:text-blue-400">Termos de Uso</a>
              <a href="#" className="hover:text-blue-400">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
