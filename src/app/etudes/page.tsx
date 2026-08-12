import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Target, CheckCircle2, Quote } from "lucide-react";

export const metadata = {
  title: "Études de Cas & Résultats | Baptiste Rubens",
  description: "Découvrez comment nos clients ont structuré leur offre et généré un flux constant de prospects qualifiés.",
};

const stats = [
  { label: "Volume de CA généré pour nos clients", value: "+5M€" },
  { label: "Taux de satisfaction coaching", value: "98%" },
  { label: "Rendez-vous qualifiés / mois (moyenne)", value: "8 à 15" },
];

const caseStudies = [
  {
    client: "Sarah L.",
    role: "Consultante Marketing B2B",
    result: "Du statut de freelance 'au mois le mois' à un contrat signé à 3 500 €",
    problem: "Prospectait de manière irrégulière sur LinkedIn sans méthode claire et bradait ses prix.",
    solution: "Repositionnement de son offre en 'Package Résultat', création d'un script de découverte et relance ciblée.",
    metrics: [
      "3 500 € signés dès le 1er mois",
      "Temps de prospection divisé par 2",
      "Offre validée auprès de 5 nouveaux clients"
    ],
    testimonial: "Baptiste m'a aidée à poser des mots sur ma valeur. En 3 sessions, j'ai décroché le plus gros contrat de ma carrière.",
  },
  {
    client: "Thomas R.",
    role: "Développeur Freelance",
    result: "8 rendez-vous qualifiés par semaine de manière prédictible",
    problem: "Dépendant à 100% du réseau et du bouche-à-oreille, avec des périodes creuses angoissantes.",
    solution: "Mise en place d'une séquence de prospection par email personnalisée et création d'un guide offert (Lead Magnet).",
    metrics: [
      "8 RDV qualifiés par semaine",
      "Taux de conversion d'appel doublé",
      "Agenda complet sur 3 mois"
    ],
    testimonial: "La méthode est ultra pragmatique. Pas de blabla théorique, on a mis en place le système directement pendant les sessions.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* EN-TÊTE */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-base font-semibold text-indigo-600">Preuve par l'exemple</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Des résultats concrets, pas des promesses.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Découvrez comment des indépendants et consultants ont transformé leur activité en appliquant notre méthode d'acquisition.
          </p>
        </div>

        {/* CHIFFRES CLÉS */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <p className="text-3xl font-extrabold text-indigo-600">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-700">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* LISTE DES ÉTUDES DE CAS */}
        <div className="mt-16 space-y-12">
          {caseStudies.map((cs, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 lg:grid lg:grid-cols-12"
            >
              {/* Colonne Gauche : Problème & Solution */}
              <div className="p-8 lg:col-span-7 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    <Target className="h-4 w-4" />
                    <span>Étude de cas #{index + 1}</span>
                  </div>

                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    {cs.result}
                  </h2>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    {cs.client} — {cs.role}
                  </p>

                  <div className="mt-6 space-y-4 text-sm text-slate-700">
                    <div>
                      <strong className="text-slate-950 block mb-1">Le défi initial :</strong>
                      <p className="bg-slate-50 p-3 rounded-xl border border-slate-100">{cs.problem}</p>
                    </div>
                    <div>
                      <strong className="text-slate-950 block mb-1">La stratégie déployée :</strong>
                      <p className="bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/50 text-indigo-950">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Témoignage cité */}
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <div className="flex items-start gap-3">
                    <Quote className="h-6 w-6 text-indigo-400 flex-shrink-0 mt-1" />
                    <p className="text-sm italic text-slate-600">"{cs.testimonial}"</p>
                  </div>
                </div>
              </div>

              {/* Colonne Droite : Métriques & Résultats */}
              <div className="bg-slate-900 p-8 text-white lg:col-span-5 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-6">
                    <TrendingUp className="h-5 w-5" />
                    <span>Impact mesuré</span>
                  </div>

                  <ul className="space-y-4">
                    {cs.metrics.map((metric, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-slate-200">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-800">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500"
                  >
                    Obtenir des résultats similaires
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION BANNIÈRE D'APPEL À L'ACTION */}
        <div className="mt-20 rounded-3xl bg-indigo-600 p-8 text-center text-white shadow-xl sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Prêt à devenir la prochaine étude de cas ?</h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto text-sm sm:text-base">
            Réservez un échange direct de 15 minutes pour faire le point sur votre activité et identifier vos leviers de croissance.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-indigo-600 shadow-md transition hover:bg-indigo-50"
            >
              Prendre rendez-vous avec Baptiste
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}