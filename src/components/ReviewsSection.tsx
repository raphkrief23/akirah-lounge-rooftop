import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    name: "K D",
    date: "Mai 2025",
    rating: 5,
    text: "Lieu atypique, bien décoré. J’avais pas d’attente particulière pour le plat car généralement on ne mange pas très bien dans une chicha, j’ai été vraiment surprise; c’était très bon. Je recommande les pâtes à la truffe.",
  },
  {
    name: "Maureen Gwend",
    date: "Septembre 2025",
    rating: 5,
    text: "Je suis rarement autant conquise par une chicha.. le service impeccable , la serveuse super gentille , la chicha impecc.. tout était super. Je recommande ❤️",
  },
  {
    name: "Touré Amy Sanogo",
    date: "Novembre 2025",
    rating: 5,
    text: "l’ambiance était au rendez-vous, mais la star de la soirée, c’était Siham ! Toujours le sourire, super sympa et hyper attentionnée. Grâce à elle, on a passé un moment au top. Franchement, foncez les yeux fermés, vous allez vous régaler !",
  },
  {
    name: "Capritour",
    date: "Décembre 2025",
    rating: 5,
    text: "Meilleure Chicha de Paris selon moi. Seul bémol la musique est assez forte mais globalement cest vraiment l'endroit où aller fumer dans Paris !",
  },
  {
    name: "Doomss 75",
    date: "Mars 2026",
    rating: 5,
    text: "Super expérience!!! Bonne ambiance propre et acceuillant Un de mes endroits préférés",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 fill-accent" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="border border-border p-8 w-[340px] flex-shrink-0 hover:border-primary/30 hover:-translate-y-1 hover:shadow-md transition-all duration-500">
    <div className="flex gap-1 mb-3">
      {Array.from({ length: review.rating }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <h3 className="font-heading text-lg text-foreground mb-2">{review.name}</h3>
    <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm">
      « {review.text} »
    </p>
    <div className="flex items-baseline justify-end">
      <span className="text-muted-foreground text-xs">{review.date}</span>
    </div>
  </div>
);

const ReviewsTrack = () => (
  <div className="flex gap-6">
    {reviews.map((review, i) => (
      <ReviewCard key={i} review={review} />
    ))}
  </div>
);

const ReviewsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Témoignages
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Avis de nos clients
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Ce que nos clients disent de nous
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <ReviewsTrack />
          <div className="pl-6">
            <ReviewsTrack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
