import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Calendar, Gauge, Fuel, Settings, FileCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/images/HRQRO.jpeg",
    "/images/QRO1.jpg",
    "/images/QRO2.jpg",
    "/images/QRO3.jpg",
    "/images/QRO4.jpg",
    "/images/QRO5.jpg",
    "/images/QRO6.jpg"
  ];

  const specs = [
    { icon: Calendar, label: "Ano", value: "2018" },
    { icon: Gauge, label: "Quilometragem", value: "104.780 km" },
    { icon: Fuel, label: "Combustível", value: "Diesel" },
    { icon: Settings, label: "Câmbio", value: "Manual" },
    { icon: Settings, label: "Direção", value: "Hidráulica" },
    { icon: FileCheck, label: "Status", value: "Quitado" }
  ];

  const features = [
    "Motor 2.5 TCI Diesel econômico e potente",
    "Documentação em dia e regularizada",
    "Veículo quitado, sem restrições",
    "Direção hidráulica para maior conforto",
    "Ideal para transporte de cargas",
    "Manutenção em dia",
    "Pronto para trabalhar",
    "Ótimo estado de conservação"
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/5586995550422?text=Olá! Tenho interesse no Hyundai HR 2018.", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+558632253639";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 shadow-lg sticky top-0 z-50" role="banner">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Hyundai HR 2018</h1>
              <p className="text-sm md:text-base opacity-90">Caminhão 2.5 TCI Diesel</p>
            </div>
            <div className="text-right">
              <p className="text-3xl md:text-4xl font-bold" aria-label="Preço: R$ 110.900">R$ 110.900</p>
              <Badge variant="secondary" className="mt-1">Quitado</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Gallery */}
      <section className="container py-8 md:py-12" aria-label="Galeria de fotos do veículo">
        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-muted">
              <img 
                src={images[currentImageIndex]} 
                alt={`Hyundai HR 2018 - Foto ${currentImageIndex + 1} de ${images.length}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? "bg-primary w-8" 
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Ver foto ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 md:grid-cols-7 gap-2 p-4 bg-muted/30">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-video rounded-md overflow-hidden border-2 transition-all hover:scale-105 ${
                    index === currentImageIndex 
                      ? "border-primary shadow-lg" 
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Buttons */}
      <section className="container pb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <Button 
            size="lg" 
            className="h-16 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            WhatsApp: (86) 99555-0422
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="h-16 text-lg font-semibold shadow-lg hover:shadow-xl transition-all border-2"
            onClick={handleCall}
          >
            <Phone className="mr-2 h-6 w-6" />
            Ligar: (86) 3225-3639
          </Button>
        </div>
      </section>

      {/* Specifications */}
      <section className="container pb-8">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Especificações Técnicas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                    <Icon className="h-8 w-8 md:h-10 md:w-10 mb-2 text-primary" />
                    <p className="text-xs md:text-sm text-muted-foreground font-medium">{spec.label}</p>
                    <p className="text-sm md:text-lg font-bold mt-1">{spec.value}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section className="container pb-8">
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Características e Diferenciais</h2>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Vehicle Description */}
      <section className="container pb-8">
        <Card className="shadow-xl bg-primary text-primary-foreground">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Sobre o Veículo</h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                <strong>Hyundai HR 2.5 TCI Diesel (RS/RD) 2018</strong> - Caminhão robusto e confiável, 
                perfeito para quem busca um veículo de trabalho em excelente estado de conservação.
              </p>
              <p>
                Com apenas <strong>104.780 km rodados</strong>, este HR está pronto para trabalhar. 
                Motor diesel econômico, câmbio manual suave e direção hidráulica proporcionam 
                conforto e eficiência no dia a dia.
              </p>
              <p>
                Documentação 100% regularizada e veículo completamente quitado, sem qualquer restrição. 
                Você pode trabalhar com tranquilidade desde o primeiro dia.
              </p>
              <p className="text-lg md:text-xl font-bold text-center pt-4 border-t border-primary-foreground/20">
                Não perca esta oportunidade! Entre em contato agora mesmo.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final CTA */}
      <section className="container pb-12">
        <Card className="shadow-2xl border-2 border-primary">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interessado?</h2>
            <p className="text-lg md:text-xl mb-6 text-muted-foreground">
              Entre em contato agora e agende uma visita para conhecer o veículo
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="h-16 text-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full md:w-auto px-8"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Falar no WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-16 text-lg font-semibold shadow-lg hover:shadow-xl transition-all border-2 w-full md:w-auto px-8"
                onClick={handleCall}
              >
                <Phone className="mr-2 h-6 w-6" />
                Ligar Agora
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-6 mt-8" role="contentinfo">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Hyundai HR 2.5 TCI Diesel 2018 - Caminhão à venda</p>
          <p className="mt-2">
            <a href="tel:+558632253639" className="hover:text-primary transition-colors">
              Contato: (86) 3225-3639
            </a>
            {" | "}
            <a href="https://wa.me/5586995550422" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              (86) 99555-0422
            </a>
          </p>
          <p className="mt-4">© 2025 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}
