import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact & Prise de RDV | Baptiste Rubens",
  description: "Discutons de votre projet d'acquisition client. Appelez directement ou réservez un créneau.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* En-tête de la page */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-semibold text-indigo-600">Contact Direct</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Discutons de votre projet
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Aucun paiement en ligne. Chaque accompagnement commence par un échange téléphonique pour vérifier que la méthode correspond à vos besoins.
          </p>
        </div>

        {/* Intégration du composant client */}
        <ContactForm />

      </div>
    </div>
  );
}