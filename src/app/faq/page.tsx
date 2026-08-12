import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PhoneCall, MessageCircle, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Foire Aux Questions (FAQ) | Baptiste Rubens",
  description: "Toutes les réponses à vos questions sur nos coachings, guides, modalités de paiement et prises de rendez-vous.",
};

const faqItems = [
  {
    category: "Général & Fonctionnement",
    question: "Pourquoi n'y a-t-il pas de paiement direct par carte sur le site ?",
    answer: "Chaque prestation et accompagnement commence par un échange téléphonique de 15 minutes. Cela permet à Baptiste de vérifier que votre projet, votre offre et vos objectifs correspondent exactement à sa méthode avant tout engagement.",
  },
  {
    category: "Général & Fonctionnement",
    question: "À qui s'adressent ces programmes et coachings ?",
    answer: "Principalement aux freelances, consultants, prestataires de services B2B et indépendants qui souhaitent structurer leur acquisition de clients et arrêter de dépendre uniquement du bouche-à-oreille.",
  },
  {
    category: "Accompagnement",
    question: "Comment se déroulent les rendez-vous téléphoniques et visio ?",
    answer: "Les rendez-vous sont planifiés selon vos disponibilités. Les sessions de coaching se font en visio (Google Meet ou Zoom), et un suivi par message ou e-mail est maintenu entre les sessions pour répondre à vos questions.",
  },
  {
    category: "Accompagnement",
    question: "Puis-je déduire ces prestations en frais professionnels ?",
    answer: "Oui, une facture officielle est émise pour chaque prestation au nom de votre entreprise par Baptiste Rubens (Entrepreneur Individuel, SIREN 106 659 550), ce qui vous permet de la passer en charges comptables.",
  },
  {
    category: "Résultats",
    question: "Au bout de combien de temps puis-je espérer des résultats ?",
    answer: "Les premiers résultats dépendent de votre niveau d'implication. La méthode est conçue pour poser des actions concrètes dès la première semaine afin d'initier des échanges qualifiés sous 14 à 30 jours.",
  },
  {
    category: "Contact",
    question: "Que se passe-t-il si je fais une demande de rappel via le formulaire ?",
    answer: "Baptiste ou son équipe vous recontacte sous 24 heures ouvrées par téléphone ou par e-mail pour faire un point rapide sur vos besoins, sans aucun engagement de votre part.",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* EN-TÊTE */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-base font-semibold text-indigo-600">Besoin d'éclaircissements ?</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Foire Aux Questions
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Retrouvez les réponses aux questions les plus fréquemment posées sur nos programmes, notre méthode et nos modalités d'accompagnement.
          </p>
        </div>

        {/* ACCORDÉON FAQ */}
        <div className="mt-12">
          <FaqAccordion items={faqItems} />
        </div>

        {/* CARTE D'APPEL DIRECT EN BAS DE PAGE */}
        <div className="mt-16 rounded-3xl bg-indigo-600 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Vous n'avez pas trouvé votre réponse ?</h2>
            <p className="mt-3 text-indigo-100 text-sm sm:text-base leading-relaxed">
              Le plus simple reste d'en discuter directement par téléphone lors d'un échange rapide de 10 minutes.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex-none inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-600 shadow-md transition hover:bg-indigo-50"
          >
            <PhoneCall className="h-4 w-4" />
            Appeler Baptiste (06 04 09 02 97)
          </Link>
        </div>

      </div>
    </div>
  );
}