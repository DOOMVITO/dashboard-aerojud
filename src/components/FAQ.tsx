import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Tenho direito a indenização?",
      answer: "Sim! De acordo legislação, você tem direito a indenização em casos de cancelamento, atraso superior a 4 horas, overbooking ou problemas com bagagem. Cada situação tem valores específicos de indenização."
    },
    {
      question: "Quanto tempo leva o processo?",
      answer: "O prazo estimado para a conclusão do processo varia entre 90 e 180 dias, dependendo das particularidades do caso."
    },
    {
      question: "É realmente grátis?",
      answer: "Sim! A análise inicial é 100% gratuita. Só cobramos uma taxa de 30% sobre o valor recebido, e apenas se ganharmos seu caso. Se não conseguirmos sua indenização, você não paga nada."
    },
    {
      question: "Quais documentos preciso?",
      answer: "Geralmente precisamos do cartão de embarque, comprovante de compra da passagem e documentos pessoais. Nossa equipe te orientará sobre quais documentos específicos são necessários para seu caso."
    },
    {
      question: "Qual o valor da indenização?",
      answer: "Os valores variam conforme o tipo de problema, podendo chegar até 20.000R$"
    },
    {
      question: "Funciona para voos antigos?",
      answer: "Sim! Você pode solicitar indenização para voos com problemas ocorridos nos últimos 5 anos, conforme estabelecido no Código Civil Brasileiro."
    },
    {
      question: "E se a companhia aérea já me indenizou?",
      answer: "Mesmo que tenha recebido vouchers, milhas ou alguma compensação, você ainda pode ter direito à indenização em dinheiro prevista por lei. Analisamos seu caso gratuitamente."
    },
    {
      question: "Como vocês conseguem esses valores?",
      answer: "Nossa equipe jurídica especializada conhece profundamente a legislação aeronáutica brasileira e tem experiência em negociar com todas as companhias aéreas, conseguindo os melhores resultados para nossos clientes."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais dúvidas sobre direitos do passageiro
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center text-blue-600">
              Tire suas dúvidas sobre indenização por problemas com voos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa equipe está pronta para esclarecer qualquer questão sobre seu caso específico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5511999999999"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  💬 Falar no WhatsApp
                </a>
                <a
                  href="mailto:contato@exemplo.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  ✉️ Enviar E-mail
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
