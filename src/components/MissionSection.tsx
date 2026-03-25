import { Target, Zap, Users, TrendingUp } from "lucide-react";

const pillars = [
  { icon: Zap, label: "Suporte Imediato" },
  { icon: Target, label: "Eliminação de Gargalos" },
  { icon: Users, label: "Fidelização de Clientes" },
  { icon: TrendingUp, label: "Automação Inteligente" },
];

const MissionSection = () => {
  return (
    <section id="missao" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-sm tracking-[0.3em] text-primary mb-4">PROPÓSITO</p>
        <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mb-6">
          Nossa Missão
        </h2>
        <div className="gold-line w-16 mx-auto mb-10" />

        <p className="font-accent text-xl md:text-2xl text-foreground/80 italic leading-relaxed mb-6">
          Transformar compradores eventuais em clientes fiéis através de um 
          atendimento que elimina gargalos e entrega excelência em cada ponto de contato.
        </p>

        <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-16">
          Combinamos segmentação inteligente e automação de processos para garantir que cada 
          cliente receba atenção individualizada, suporte imediato e uma jornada de compra 
          impecável — do primeiro contato ao pós-venda.
        </p>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.label} className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 border border-primary/30 flex items-center justify-center">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-body text-xs tracking-[0.15em] text-foreground/70">{pillar.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
