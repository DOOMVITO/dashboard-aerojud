
import { Shield } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4 py-1 flex items-center justify-between h-20">
        {/* LOGO com altura ajustada ao padrão da AirHelp */}
        <div className="flex items-center gap-2">
          <img
            src="/lovable-uploads/1eed8a4f-ecfe-4be2-9468-7b7bc1758662.png"
            alt="AeroJud Logo"
            className="h-28 sm:h-36 md:h-48 lg:h-60 w-auto translate-y-2"

          />
        </div>

        {/* Menu de navegação horizontal */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("claim-form")}
            className="text-[#164564] hover:text-[#F87701] font-medium transition-colors text-sm"
          >
            Verificar Direitos
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-[#164564] hover:text-[#F87701] font-medium transition-colors text-sm"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-[#164564] hover:text-[#F87701] font-medium transition-colors text-sm"
          >
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-[#164564] hover:text-[#F87701] font-medium transition-colors text-sm"
          >
            FAQ
          </button>
        </nav>

        {/* Botão no mobile */}
        <div className="md:hidden">
          <button
            onClick={() => scrollToSection("claim-form")}
            className="bg-[#F87701] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#e06801] transition-colors text-sm"
          >
            Verificar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
