import Link from "next/link";
import { 
  Zap, 
  UserCheck, 
  Calendar, 
  Target, 
  ShieldCheck, 
  ArrowRight, 
  PhoneCall,
  CheckCircle2,
  Clock,
  MessageSquare,
  FileSearch
} from "lucide-react";

export const metadata = {
  title: "Coaching 1-to-1 Accéléré | Baptiste Rubens",
  description: "Un accompagnement individuel sur mesure pour auditer votre offre, débloquer votre prospection et signer vos prochains clients.",
};

const steps = [
  {
    number: "01",
    title: "Audit & Alignement de l'Offre",
    icon: FileSearch,
    description: "Analyse approfondie de votre positionnement actuel, vos tarifs et vos supports. Nous ajustons votre offre pour la rendre irrésistible.",
  },
  {
    number: "02",
    title: "Mise en Place du Système d'Acquisition",
    icon: Target,
    description: "Création de vos scripts de prospection personnalisés (e-mail, LinkedIn) et structuration de vos canaux de prise de rendez-vous.",
  },
  {
    number: "03",
    title: "Optimisation de la Vente & Closing",
    icon: UserCheck,
    description: "Entraînement aux appels de découverte, traitement des objections et relecture de vos propositions commerciales en direct.",
  },
];

const highlights = [
  "4 sessions individuelles de 1h en visio avec Baptiste",
  "Support continu par message / email (réponse sous 24h ouvrées)",
  "Relecture et correction de vos messages de prospection et devis",
  "Accès offert à l'ensemble des templates et guides au format digital",
  "Plan d'action personnalisé révisé après chaque session",
];

export default function CoachingAccelerePage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- SECTION HERO --- */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-6">
              <Zap className="h-4 w-4 text-indigo-600" />
              <span>Accompagnement Sur Mesure — 30 Jours</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Coaching 1-to-1 <span className="text-indigo-600 font-black">Accéléré</span>
            </h1>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Passez à l'action sans tâtonner. Un suivi individuel intensif pour lever vos blocages, affiner vos messages et décrocher vos contrats en 4 semaines.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-indigo-600" />
                <span>4 semaines d'accompagnement</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-indigo-600" />
                <span>Support direct individuel</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-indigo-500"
              >
                <PhoneCall className="h-5 w-5" />
                Réserver un appel d'évaluation (15 min)
              </Link>
            </div>
          </div>

          {/* CARTE RECAPITULATIVE / CTA */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-slate-500">Investissement</span>
                <span className="text-3xl font-black text-slate-950">990 €</span>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Facture émise au nom de votre entreprise (déductible en frais pro).
              </p>

              <hr className="my-6 border-slate-100" />

              <p className="text-sm font-bold text-slate-900 mb-4">Inclus dans le coaching :</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-indigo-500"
                >
                  Discuter de mon projet avec Baptiste
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-center text-xs text-slate-400">
                  Échange téléphonique direct de 15 min sans engagement
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 border-t border-slate-100 pt-6">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Baptiste Rubens — SIREN 106 659 550</span>
              </div>
            </div>
          </div>

        </div>

        {/* --- DÉROULEMENT DU COACHING --- */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold text-indigo-600">Parcours pas à pas</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Comment se déroulent vos 30 jours
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-300">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- BANNIÈRE D'ENGAGEMENT --- */}
        <div className="mt-20 rounded-3xl bg-indigo-600 p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Prêt à accélérer vos résultats ?</h2>
            <p className="mt-4 text-indigo-100 text-sm leading-relaxed">
              Les places en suivi individuel sont volontairement limitées à 3 clients simultanés pour garantir une réactivité optimale et un accompagnement de haute qualité.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-600 shadow-md transition hover:bg-indigo-50"
              >
                Vérifier les disponibilités actuelles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}