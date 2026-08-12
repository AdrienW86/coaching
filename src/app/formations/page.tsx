import Link from "next/link";
import { 
  BookOpen, 
  PlayCircle, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  PhoneCall
} from "lucide-react";

export const metadata = {
  title: "Catalogue des Formations & Offres | Baptiste Rubens",
  description: "Découvrez nos programmes, guides et coachings d'acquisition pour indépendants et entrepreneurs B2B.",
};

const products = [
  {
    id: "guide-prospection",
    title: "Ebook & Guide 'Système d'Acquisition'",
    category: "Guide & Templates",
    badge: "Format Digital",
    price: "49 €",
    period: "accès immédiat",
    description: "Le concentré de méthodes et templates prêts à copier-coller pour lancer votre prospection sans perdre de temps.",
    href: "/contact",
    icon: BookOpen,
    features: [
      "Ebook complet au format PDF",
      "5 templates de mails de prospection B2B",
      "Grille de calcul de tarifs / TJM",
      "Mises à jour incluses à vie",
    ],
    highlight: false,
    cta: "Commander le guide",
  },
  {
    id: "signature-acq",
    title: "Formation Autonome 'Signature'",
    category: "Vidéo & Pratique",
    badge: "Le + Populaire",
    price: "290 €",
    period: "accès à vie",
    description: "Le programme vidéo complet pas à pas pour structurer votre offre High-Ticket et automatiser vos prises de rendez-vous.",
    href: "/signature",
    icon: PlayCircle,
    features: [
      "12 modules vidéo (+4h de contenus)",
      "Scripts de prospection et de closing B2B",
      "Kit de templates opérationnels",
      "Accès à la communauté d'entraide",
    ],
    highlight: true,
    cta: "Découvrir le programme",
  },
  {
    id: "mastermind",
    title: "Programme Mastermind",
    category: "Collectif",
    badge: "Sur Sélection",
    price: "Sur Devis",
    period: "accompagnement 3 mois",
    description: "Un cercle restreint d'entrepreneurs pour échanger chaque semaine, lever vos blocages et accélérer votre chiffre d'affaires.",
    href: "/mastermind",
    icon: Users,
    features: [
      "Visio collective hebdomadaire (1h30)",
      "Canal de discussion privé 7j/7",
      "Ateliers thématiques avec experts",
      "Max. 8 membres par promotion",
    ],
    highlight: false,
    cta: "Postuler au Mastermind",
  },
  {
    id: "coaching-accelere",
    title: "Coaching 1-to-1 Accéléré",
    category: "Individuel",
    badge: "Sur Mesure",
    price: "990 €",
    period: "4 semaines intensives",
    description: "Un suivi individuel sur mesure avec Baptiste pour auditer votre offre, affiner vos messages et signer vos 3 prochains clients.",
    href: "/accelere",
    icon: Zap,
    features: [
      "4 sessions individuelles de 1h en visio",
      "Support continu par message/email",
      "Relecture de vos devis et messages",
      "Accès offert à tous les guides digitaux",
    ],
    highlight: false,
    cta: "En savoir plus",
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- EN-TÊTE DE LA PAGE --- */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-base font-semibold text-indigo-600">Formations & Accompagnements</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Transformez votre expertise en clients qualifiés.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Du guide pratique en autonomie au coaching sur mesure, choisissez le format adapté à votre niveau d'avancement.
          </p>
        </div>

        {/* --- GRILLE DE CATALOGUE --- */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className={`relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ring-1 transition hover:shadow-md ${
                  product.highlight
                    ? "ring-2 ring-indigo-600"
                    : "ring-slate-200"
                }`}
              >
                {/* Badge d'en-tête */}
                {product.highlight && (
                  <div className="absolute -top-3.5 left-8 rounded-full bg-indigo-600 px-3.5 py-1 text-xs font-semibold text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>{product.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {product.category}
                      </span>
                    </div>
                    {!product.highlight && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-slate-950">
                    {product.title}
                  </h2>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-x-2">
                    <span className="text-3xl font-black text-slate-950">
                      {product.price}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      / {product.period}
                    </span>
                  </div>

                  <hr className="my-6 border-slate-100" />

                  <ul className="space-y-3 text-sm text-slate-600">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={product.href}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold shadow-sm transition ${
                      product.highlight
                        ? "bg-indigo-600 text-white hover:bg-indigo-500"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {product.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- BANNIÈRE DE PRAGMATISME ET DE PRISE DE CONTACT --- */}
        <div className="mt-20 rounded-3xl bg-indigo-600 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Vous hésitez sur le format à choisir ?</h2>
            <p className="mt-3 text-indigo-100 text-sm sm:text-base leading-relaxed">
              Appelez directement Baptiste pour faire le point en 10 minutes sur vos objectifs et identifier le programme le plus adapté.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex-none inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-600 shadow-md transition hover:bg-indigo-50"
          >
            <PhoneCall className="h-4 w-4" />
            Parler avec Baptiste (06 04 09 02 97)
          </Link>
        </div>

      </div>
    </div>
  );
}