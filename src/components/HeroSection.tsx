import heroWatch from "@/assets/hero-watch.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroWatch}
          alt="Relógio de luxo HugTimes"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-16">
        <h2 className="font-display text-2xl tracking-[0.3em] text-gold-gradient font-semibold">
          HUGTIMES
        </h2>
        <div className="hidden md:flex items-center gap-10 font-body text-sm tracking-[0.15em] text-foreground/70">
          <a href="#sobre" className="hover:text-primary transition-colors">SOBRE</a>
          <a href="#atendimento" className="hover:text-primary transition-colors">ATENDIMENTO</a>
          <a href="#tecnologia" className="hover:text-primary transition-colors">TECNOLOGIA</a>
          <a href="#missao" className="hover:text-primary transition-colors">MISSÃO</a>
          <a href="#contato" className="hover:text-primary transition-colors">CONTATO</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <div className="gold-line w-24 mx-auto mb-8" />
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-gold-gradient">
          A Experiência do Tempo no Conforto do seu Lar
        </h1>
        <p className="font-accent text-xl md:text-2xl text-foreground/70 italic mb-10 max-w-2xl mx-auto">
          Mais que um produto, criamos uma experiência única de luxo e exclusividade.
        </p>
        <a
          href="#sobre"
          className="inline-block bg-gold-gradient text-primary-foreground font-body text-sm tracking-[0.2em] px-10 py-4 hover:opacity-90 transition-opacity"
        >
          DESCOBRIR
        </a>
        <div className="gold-line w-24 mx-auto mt-12" />
      </div>
    </section>
  );
};

export default HeroSection;
