import Link from "next/link";
import { Check, HelpCircle, Sparkles } from "lucide-react";

export const metadata = {
  title: "Tarifs & Formats | Baptiste Rubens",
  description: "Découvrez nos tarifs pour les guides, templates, formations et coachings sur mesure.",
};

const tiers = [
  {
    name: "Guide & Templates",
    id: "tier-starter",
    href: "/contact",
    price: "49€",
    period: "accès immédiat",
    description: "Idéal pour démarrer sans se ruiner avec des trames et méthodes prêtes à l'emploi.",
    features: [
      "Ebook 'Système d'Acquisition' (PDF)",
      "5 templates de mails de prospection",
      "Grille de tarification / TJM",
      "Accès aux mises à jour à vie",
    ],
    mostPopular: false,
    cta: "Obtenir le guide",
  },
  {
    name: "Formation Autonome",
    id: "tier-pro",
    href: "/contact",
    price: "290€",
    period: "paiement unique",
    description: "Le programme complet en vidéo pour structurer son offre et automatiser ses ventes.",
    features: [
      "Tout ce qui est inclus dans le Guide",
      "12 modules vidéo pas à pas (4h+)",
      "Scripts de vente B2B complets",
      "Exemples d'études de cas réels",
      "Accès à la communauté d'entraide",
    ],
    mostPopular: true,
    cta: "Accéder à la formation",
  },
  {
    name: "Coaching 1-to-1",
    id: "tier-coaching",
    href: "/contact",
    price: "990€",
    period: "accompagnement 1 mois",
    description: "Un suivi sur mesure pour auditer ton profil, affiner ton offre et signer tes clients.",
    features: [
      "Tout l'accès Formation Autonome",
      "4 sessions individuelles de 1h avec Baptiste",
      "Audit complet de ta proposition de valeur",
      "Support continu par message/email (4 sem)",
      "Relecture de tes propositions commerciales",
    ],
    mostPopular: false,
    cta: "Réserver mon coaching",
  },
];

const faqs = [
  {
    question: "Les produits sont-ils accessibles immédiatement ?",
    answer: "Oui, dès la validation de ton paiement, tu reçois tes accès par email pour télécharger les guides ou visionner les modules vidéo.",
  },
  {
    question: "Puis-je déduire ces formations en frais professionnels ?",
    answer: "Absolument. Une facture conforme avec SIREN et TVA (si applicable) est émise automatiquement lors de ton achat.",
  },
  {
    question: "Comment se déroule le coaching individuel ?",
    answer: "Après ton inscription, tu reçois un lien Calendly pour réserver tes créneaux de visio selon tes disponibilités.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- EN-TÊTE --- */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-base font-semibold text-indigo-600">Investissement rentable</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Des tarifs transparents, sans abonnement caché.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Choisis la formule adaptée à tes besoins actuels pour accélérer ton acquisition de clients.
          </p>
        </div>

        {/* --- GRILLE DE TARIFS --- */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 transition-all hover:shadow-xl ${
                tier.mostPopular
                  ? "ring-2 ring-indigo-600 lg:z-10 lg:scale-105"
                  : "ring-slate-200"
              }`}
            >
              {/* Badge "Le plus populaire" */}
              {tier.mostPopular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-md flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Recommandé</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h2 className="text-xl font-bold leading-8 text-slate-950">
                    {tier.name}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-950">
                    {tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-slate-500">
                    / {tier.period}
                  </span>
                </p>

                {/* Liste des caractéristiques */}
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bouton d'action */}
              <Link
                href={tier.href}
                className={`mt-8 block rounded-xl px-3.5 py-3 text-center text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.mostPopular
                    ? "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* --- FAQ TARIFS --- */}
        <div className="mx-auto mt-24 max-w-4xl border-t border-slate-200 pt-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950 text-center">
            Questions fréquentes sur les tarifs
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <dt className="flex items-center gap-3 text-base font-semibold leading-7 text-slate-950">
                  <HelpCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-slate-600 pl-8">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </div>
  );
}