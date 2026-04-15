const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">Akirah Lounge rooftop</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          20 Rue Jean-Henri Fabre, 75018 Saint-Ouen-sur-Seine
        </p>
        <a href="tel:+33643594841" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 6 43 59 48 41
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} Akirah Lounge rooftop. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
