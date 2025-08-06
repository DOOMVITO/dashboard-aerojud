import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const ClaimForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [shakes, setShakes] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (phone: string) =>
    /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(phone);

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const triggerShake = (field: string) => {
    setShakes((prev) => ({ ...prev, [field]: true }));
    setTimeout(() => {
      setShakes((prev) => ({ ...prev, [field]: false }));
    }, 300);
  };

  const markError = (fields: string[]) => {
    const newErrors: Record<string, boolean> = {};
    fields.forEach((f) => {
      newErrors[f] = true;
      triggerShake(f);
    });
    setErrors(newErrors);
  };

  const getInputClass = (field: string) =>
    `text-center ${errors[field] ? "border-red-500" : ""} ${
      shakes[field] ? "animate-shake" : ""
    }`;

  const handleSubmit = async () => {
    const missing: string[] = [];

    if (!formData.name || formData.name.length < 3) missing.push("name");
    if (!formData.email || !isValidEmail(formData.email)) missing.push("email");
    if (!formData.phone || !isValidPhone(formData.phone)) missing.push("phone");

    if (missing.length) {
      markError(missing);
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos destacados corretamente.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Envia para Supabase
      const { error } = await supabase
        .from("contacts")
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        });

      if (error) throw error;

      // Chama Edge Function para enviar e-mail
      await fetch("/functions/v1/resend-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        })
      });

      toast({
        title: "Solicitação enviada!",
        description:
          "Nossa equipe analisará seu caso e entrará em contato em até 24 horas."
      });
      setSubmitted(true);
    } catch (e: any) {
      toast({
        title: "Erro ao enviar",
        description: e.message || "Tente novamente mais tarde",
        variant: "destructive"
      });
    }
  };

  if (submitted) {
    return (
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-bold text-[#154564] mb-4">Tudo certo!</h2>
          <p className="text-xl text-gray-700 mb-6">
            Recebemos sua solicitação e vamos analisá-la em até 24 h úteis.
          </p>
          <p className="text-base text-gray-600">
            Obrigado por confiar em nossa equipe.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="claim-form" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-6 font-bold text-[#154564] leading-tight md:text-3xl">
            Verifique seus direitos em 1 passo
          </h2>
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="bg-[#f87701] text-white rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg animate-fade-in">
              <span className="text-2xl md:text-3xl font-bold">Retorno em 24h úteis</span>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Preencha os dados abaixo e saiba se tem direito à indenização
          </p>
        </div>

        <Card className="shadow-xl border-0 overflow-hidden">
          <CardHeader className="bg-[#164564] text-white">
            <CardTitle className="text-center text-2xl font-bold">
              Verificação de Direitos
            </CardTitle>
          </CardHeader>

          <CardContent className="p-8">
            <div className="max-w-md mx-auto space-y-6">
              <div className="text-center">
                <Label htmlFor="name" className="block text-center mb-2">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  placeholder="Seu nome completo"
                  className={getInputClass("name")}
                />
              </div>
              <div className="text-center">
                <Label htmlFor="email" className="block text-center mb-2">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="email@exemplo.com"
                  className={getInputClass("email")}
                />
              </div>
              <div className="text-center">
                <Label htmlFor="phone" className="block text-center mb-2">
                  Telefone (WhatsApp) *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="(11) 99999-9999"
                  className={getInputClass("phone")}
                />
              </div>
            </div>

            <div className="flex justify-center pt-8 border-t border-gray-200 mt-8">
              <Button
                onClick={handleSubmit}
                className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-semibold px-12"
              >
                Verificar Direitos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClaimForm;
