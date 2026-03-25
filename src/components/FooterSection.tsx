import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contato" className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl tracking-[0.3em] text-gold-gradient mb-4">HUGTIMES</h3>
            <p className="font-accent text-sm text-muted-foreground italic leading-relaxed">
              A experiência do tempo no conforto do seu lar. Luxo, exclusividade e 
              atendimento personalizado.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] text-primary mb-6">CONTATO</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-body">+55 (11) 99999-0000</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-body">contato@hugtimes.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-body">São Paulo, SP — Atendimento a Domicílio</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] text-primary mb-6">REDES SOCIAIS</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary text-muted-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-line w-full mb-8" />
        <p className="text-center font-body text-xs text-muted-foreground tracking-wider">
          © 2026 HugTimes. Todos os direitos reservados. Luxo e exclusividade ao seu alcance.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
