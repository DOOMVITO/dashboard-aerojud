import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alec Coelho",
      location: "Recife, PE",
      amount: "R$ 18.000",
      text: "Meu voo da GOL foi cancelado e eu nem sabia que tinha direito a indenização. A equipe cuidou de tudo e recebi R$ 18.800 em 3 meses!",
      rating: 5,
      image: "/avatars/alec.jpg", // coloque imagens reais no diretório public/avatars
    },
    {
      name: "Pedro Badaró",
      location: "Belo Horizonte, MG",
      amount: "R$ 5.200",
      text: "Perdi um compromisso importante por causa de um atraso de 6 horas. Processo super transparente e recebi a indenização rapidamente.",
      rating: 5,
      image: "/avatars/pedro.jpg",
    },
    {
      name: "Gilmara de Castro",
      location: "Belo Horizonte, MG",
      amount: "R$ 14.500",
      text: "Excelente atendimento! Não precisei me preocupar com nada, eles resolveram tudo. Recomendo para todos que tiveram problemas com voos.",
      rating: 5,
      image: "/avatars/gilmara.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mais de 5.000 passageiros já foram indenizados
          </h2>
          <p className="text-xl text-gray-600">
            Veja o que nossos clientes dizem sobre nosso trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4 border border-gray-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>

                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-green-700 font-semibold">
                    Indenização recebida: {testimonial.amount}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5.000+</div>
              <div className="text-gray-600">Casos resolvidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">R$ 12M</div>
              <div className="text-gray-600">Em indenizações</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Avaliação média</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Taxa de sucesso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
