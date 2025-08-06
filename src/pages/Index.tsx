
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClaimForm from "@/components/ClaimForm";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ClaimForm />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
