import Link from "next/link";
import { 
  CheckCircle2, 
  PlayCircle, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  PhoneCall,
  HelpCircle
} from "lucide-react";

export const metadata = {
  title: "Formation Autonome Signature | Baptiste Rubens",
  description: "Le système complet en vidéo et templates pour structurer votre offre et générer vos prochains clients B2B.",
};

const modules = [
  {
    number: "01",
    title: "Positionnement & Offre Irrésistible",
    duration: "1h 15min",
    lessons: [
      "Transformer une compétence en offre 'High-Ticket'",
      "Définir sa cible B2B avec précision (Avatar Client)",
      "Calculer son tarif et structurer sa proposition de valeur",
    ],
  },
  {
    number: "02",
    title: "Le Système d'Acquisition Prédictible",
    duration: "1h 30min",
    lessons: [
      "La méthode de prospection e-mail / LinkedIn non-intrusive",
      "Copier-coller : 5 templates de messages à fort taux de réponse",
      "Mettre en place un calendrier d'actions quotidiennes (30 min/jour)",
    ],
  },
  {
    number: "03",
    title: "Savoir Vendre Sans Forcer",
    duration: "1h 10min",
    lessons: [
      "La structure exacte d'un appel de découverte de 30 min",
      "Traiter les objections courantes ('C'est trop cher', 'Je vais réfléchir')",
      "Rédiger un devis / proposition commerciale qui transforme",
    ],
  },
];

const includedBonuses = [
  "Accès à vie à la plateforme vidéo et aux futures mises à jour",
  "Kit de Templates complets (Scripts de vente, Trame de devis, TJM Calculator)",
  "Liste des outils d'automatisation recommandés (version 100% gratuite)",
  "Accès direct à Baptiste Rubens par message pour vos questions",
];

export default function SignatureCoursePage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- SECTION HERO --- */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-6">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span>Programme 100% Pratique</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Formation Autonome <span className="text-indigo-600 font-black">"Signature"</span>
            </h1>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Installez un système d'acquisition simple, éthique et prédictible pour trouver vos 3 prochains clients sans y passer vos journées.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-indigo-600" />
                <span>+4h de vidéos explicatives</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-600" />
                <span>Templates & Scripts inclus</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-indigo-600" />
                <span>Accès immédiat & illimité</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-indigo-500"
              >
                <PhoneCall className="h-5 w-5" />
                Discuter du programme avec Baptiste
              </Link>
            </div>
          </div>

          {/* CARTE RECAPITULATIVE / CTA */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-slate-500">Tarif du programme</span>
                <span className="text-3xl font-black text-slate-950">290 €</span>
              </div>

              <p className="mt-2 text-xs text-slate-500">
                Facture émise au nom de votre entreprise (déductible en frais pro).
              </p>

              <hr className="my-6 border-slate-100" />

              <p className="text-sm font-bold text-slate-900 mb-4">Ce qui est inclus :</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {includedBonuses.map((item, idx) => (
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
                  Demander une présentation par téléphone
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-center text-xs text-slate-400">
                  Échange direct de 15 min sans engagement
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Baptiste Rubens — SIREN 106 659 550</span>
              </div>
            </div>
          </div>

        </div>

        {/* --- PROGRAMME DÉTAILLÉ --- */}
        <div className="mt-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold text-indigo-600">Structure du cours</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Le programme module par module
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            {modules.map((mod) => (
              <div 
                key={mod.number}
                className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 transition hover:border-indigo-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 font-black text-indigo-600 text-lg">
                      {mod.number}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">{mod.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Durée estimée : {mod.duration}</p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {mod.lessons.map((lesson, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-sm text-slate-700">
                      <PlayCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-1" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- BANNIÈRE DE PRAGMATISME --- */}
        <div className="mt-20 rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Pourquoi pas de paiement automatique en ligne ?</h2>
            <p className="mt-4 text-slate-300 text-sm leading-relaxed">
              Parce que la méthode n'est pas une baguette magique. Avant de vous transmettre les accès ou de lancer un accompagnement, Baptiste s'assure lors d'un appel direct que votre projet et vos attentes concordent avec le programme.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-500"
              >
                Planifier un appel rapide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}