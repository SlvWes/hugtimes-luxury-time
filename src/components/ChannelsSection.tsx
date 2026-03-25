import { MessageCircle, Globe, Phone } from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    subtitle: "Atendimento Ágil",
    description: "Conecte-se diretamente com nossos especialistas. Respostas em minutos, disponibilidade estendida e suporte personalizado na palma da sua mão.",
    cta: "Iniciar Conversa",
  },
  {
    icon: Globe,
    title: "Site Oficial",
    subtitle: "Catálogo Exclusivo",
    description: "Explore nosso catálogo curado com as peças mais extraordinárias do mercado. Detalhes técnicos, fotos em alta resolução e disponibilidade em tempo real.",
    cta: "Explorar Catálogo",
  },
  {
    icon: Phone,
    title: "Telefone",
    subtitle: "Canal Tradicional",
    description: "Para quem valoriza o contato humano direto. Nossa linha dedicada conecta você ao consultor ideal para suas necessidades.",
    cta: "Ligar Agora",
  },
];

const ChannelsSection = () => {
  return (
    <section id="atendimento" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-body text-sm tracking-[0.3em] text-primary mb-4">CONECTE-SE</p>
          <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mb-6">
            Canais de Atendimento
          </h2>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="font-accent text-lg text-muted-foreground max-w-xl mx-auto italic">
            Múltiplos caminhos para uma experiência única. Escolha o canal que melhor se adapta ao seu estilo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="bg-card border border-border p-10 text-center group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-6 border border-primary/30 flex items-center justify-center group-hover:bg-gold-gradient group-hover:border-transparent transition-all duration-500">
                <channel.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-display text-2xl mb-1 text-foreground">{channel.title}</h3>
              <p className="font-body text-xs tracking-[0.2em] text-primary mb-5">{channel.subtitle}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                {channel.description}
              </p>
              <button className="font-body text-xs tracking-[0.2em] text-primary border border-primary/30 px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                {channel.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
