import { Button } from "@/components/ui/button";
import { Shield, Star } from "lucide-react";
const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('claim-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/a6de455b-4e7b-4ac4-857f-3d512071518a.png" alt="Avião - Direitos do Passageiro" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Shield className="h-6 w-6 text-white" />
              <span className="text-white font-semibold text-sm sm:text-base">Direitos do Passageiro</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-prose mx-auto lg:mx-0">
              Teve problemas com o <span className="text-[#F87701]">voo?</span>
            </h1>

            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-6 bg-[#F87701] inline-block px-4 py-2 rounded-lg text-center">
              VOCÊ TEM DIREITO A INDENIZAÇÃO!
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-white mb-8 leading-relaxed bg-black/30 p-4 rounded-lg backdrop-blur-sm max-w-prose mx-auto lg:mx-0">
              Voo atrasado, cancelado ou perdeu bagagem? Nossa equipe especializada em direito aeronáutico garante sua indenização de até <strong className="text-[#F87701]">R$ 20.000</strong>. Sem taxas antecipadas.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <Button size="lg" className="bg-[#F87701] hover:bg-[#e06801] text-white px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all" onClick={scrollToForm}>
                VERIFICAR MEUS DIREITOS GRÁTIS →
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-white bg-black/30 p-4 rounded-lg backdrop-blur-sm max-w-full sm:max-w-fit mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-[#F87701] fill-current" />
                <span>4.8/5 (2.847 avaliações)</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>100% sem risco</span>
              </div>
            </div>
          </div>

          {/* Right side - balance layout */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;