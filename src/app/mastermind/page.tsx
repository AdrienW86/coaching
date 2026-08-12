import Link from "next/link";
import { 
  Users, 
  Crown, 
  Calendar, 
  Target, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Lock,
  MessageSquare,
  TrendingUp
} from "lucide-react";

export const metadata = {
  title: "Programme Mastermind | Baptiste Rubens",
  description: "Un cercle restreint d'entrepreneurs et de consultants pour briser le plafond de verre et accélérer vos résultats.",
};

const pillars = [
  {
    title: "Sessions Collectives Hebdomadaires",
    icon: Calendar,
    description: "Chaque semaine, 1h30 en visio pour traiter vos problématiques concrètes : pitch, prospection, closing, offres.",
  },
  {
    title: "Entraide & Réseau Privé (Slack / WhatsApp)",
    icon: MessageSquare,
    description: "Accès direct 7j/7 aux autres membres du groupe et à Baptiste pour débloquer immédiatement un point bloquant.",
  },
  {
    title: "Ateliers Thématiques avec Experts",
    icon: Target,
    description: "Interventions ciblées sur des sujets pointus : copywriting avancé, automatisation, closing High-Ticket.",
  },
  {
    title: "Suivi des Métriques & Accountability",
    icon: TrendingUp,
    description: "Tableau de bord partagé pour suivre vos actions semaine après semaine et ne jamais lâcher vos objectifs.",
  },
];

const requirements = [
  "Avoir déjà une offre validée ou une première expérience client",
  "Être prêt à consacrer au moins 3 à 5h par semaine à la prospection",
  "Souhaiter partager ses retours d'expérience en toute transparence avec le groupe",
  "Avoir la volonté de passer un cap sur son chiffre d'affaires",
];

export default function MastermindPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- SECTION HERO --- */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-800 ring-1 ring-inset ring-amber-200/60 mb-6">
              <Crown className="h-4 w-4 text-amber-600" />
              <span>Groupe Restreint — Places Limitées</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Programme <span className="text-indigo-600 font-black">Mastermind</span>
            </h1>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Rejoignez un collectif d'indépendants ambitieux. Ne restez plus seul face à vos choix stratégiques et bénéficiez d'un accompagnement collectif intensif.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-indigo-600" />
                <span>Max. 8 entrepreneurs par promo</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-indigo-600" />
                <span>Accompagnement sur 3 mois</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-indigo-500"
              >
                <PhoneCall className="h-5 w-5" />
                Candidater / Poser mes questions
              </Link>
            </div>
          </div>

          {/* CARTE RECAPITULATIVE / CTA */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl ring-1 ring-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Lock className="h-3.5 w-3.5" />
                  Sur Sélection
                </span>
                <span className="text-sm font-medium text-slate-400">Durée : 3 mois</span>
              </div>

              <div className="mt-6">
                <p className="text-sm text-slate-300">
                  L'accès se fait uniquement après un entretien téléphonique avec Baptiste pour garantir la cohésion du groupe.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-500"
                >
                  Postuler directement
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-center text-xs text-slate-400">
                  Échange direct de 15 min sans engagement
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 border-t border-slate-800 pt-6">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Baptiste Rubens — SIREN 106 659 550</span>
              </div>
            </div>
          </div>

        </div>

        {/* --- PILIERS DU MASTERMIND --- */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold text-indigo-600">Méthodologie</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Les 4 piliers du programme
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:mt-16 lg:max-w-none lg:grid-cols-2">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- PRÉREQUIS & PROFIL RECHERCHÉ --- */}
        <div className="mt-20 rounded-3xl bg-white p-8 sm:p-12 shadow-sm ring-1 ring-slate-200">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl text-center">
              À qui s'adresse ce Mastermind ?
            </h2>
            <p className="mt-2 text-center text-sm text-slate-600">
              Pour conserver un niveau d'échange très élevé, l'accès répond à des critères précis :
            </p>

            <ul className="mt-8 space-y-4">
              {requirements.map((req, rIdx) => (
                <li key={rIdx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-indigo-500"
              >
                Vérifier mon éligibilité par téléphone
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}