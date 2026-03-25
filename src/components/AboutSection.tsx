import watchMechanism from "@/assets/watch-mechanism.jpg";
import homeService from "@/assets/home-service.jpg";
import { Award, Gem, Wrench } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certificação Internacional",
    description: "Equipe certificada pelas maiores marcas de relojoaria do mundo, garantindo excelência em cada atendimento.",
  },
  {
    icon: Gem,
    title: "Atendimento Premium",
    description: "Treinamento contínuo em atendimento de alto padrão, criando uma experiência memorável para cada cliente.",
  },
  {
    icon: Wrench,
    title: "Conhecimento Técnico",
    description: "Domínio profundo de mecanismos complexos, polimento e restauração de peças raras e exclusivas.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-body text-sm tracking-[0.3em] text-primary mb-4">QUEM SOMOS</p>
          <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mb-6">
            Equipe Especializada
          </h2>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="font-accent text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Uma equipe de especialistas apaixonados pela arte da relojoaria, 
            dedicados a oferecer o melhor em cada detalhe.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="overflow-hidden border border-border">
            <img
              src={watchMechanism}
              alt="Mecanismo de relógio de luxo"
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden border border-border">
            <img
              src={homeService}
              alt="Atendimento personalizado a domicílio"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors duration-500">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-3 text-foreground">{feature.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
