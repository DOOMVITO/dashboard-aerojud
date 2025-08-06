import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, DollarSign, Clock } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. Verificação Gratuita",
      description: "Analisamos seu caso sem custo e verificamos seus direitos de acordo com a legislação brasileira.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: CheckCircle,
      title: "2. Coleta de Documentos",
      description: "Reunimos toda documentação necessária e montamos sua defesa com nossa equipe jurídica especializada.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: DollarSign,
      title: "3. Negociação",
      description: "Negociamos diretamente com a companhia aérea para conseguir a máxima indenização para você.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Clock,
      title: "4. Recebimento",
      description: "Você recebe sua indenização em até 90 dias. Só cobramos taxa de sucesso se ganharmos seu caso.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Como Funciona o Processo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simplificamos todo o processo para você. Nossa equipe jurídica especializada 
            cuida de tudo enquanto você acompanha o progresso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💡 Sem Risco Para Você
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Trabalhamos com <strong>taxa de sucesso</strong>. Só recebemos se conseguirmos sua indenização.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 mb-2">0%</div>
                <div className="text-sm text-gray-600">Taxa inicial</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-2">30%</div>
                <div className="text-sm text-gray-600">Taxa só se ganharmos</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600 mb-2">90 a 180 dias</div>
                <div className="text-sm text-gray-600">Prazo médio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
