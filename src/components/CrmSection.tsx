import { Database, UserCheck, History, Fingerprint } from "lucide-react";

const crmFeatures = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada interação é moldada pelo seu perfil único de preferências, estilo e histórico.",
  },
  {
    icon: History,
    title: "Histórico Completo",
    description: "Registro detalhado de todas as suas aquisições, manutenções e interações conosco.",
  },
  {
    icon: Database,
    title: "Inteligência de Dados",
    description: "Análise preditiva para antecipar suas necessidades e oferecer peças antes do mercado.",
  },
  {
    icon: Fingerprint,
    title: "Experiência Única",
    description: "Garantimos que cada contato seja exclusivo, sem repetições nem perda de contexto.",
  },
];

const CrmSection = () => {
  return (
    <section id="tecnologia" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <p className="font-body text-sm tracking-[0.3em] text-primary mb-4">TECNOLOGIA</p>
            <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mb-6">
              Diferencial Tecnológico
            </h2>
            <div className="gold-line w-16 mb-8" />
            <p className="font-accent text-lg text-muted-foreground italic mb-6 leading-relaxed">
              Utilizamos tecnologia de ponta para transformar cada interação em uma experiência 
              memorável. Nosso CRM exclusivo garante que você nunca seja tratado como &quot;apenas mais um cliente&quot;.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Da primeira consulta à manutenção periódica, cada detalhe é registrado e utilizado 
              para elevar continuamente o padrão do nosso serviço. Tecnologia invisível, 
              resultados extraordinários.
            </p>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-2 gap-6">
            {crmFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border p-6 group hover:border-primary/40 transition-all duration-500"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-base mb-2 text-foreground">{feature.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmSection;
