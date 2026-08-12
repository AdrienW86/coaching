import Link from "next/link";

export const metadata = {
  title: "Mentions Légales | Baptiste Rubens",
  description: "Mentions légales et informations officielles de l'entreprise individuelle Baptiste Rubens.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">Mentions Légales</h1>
        <p className="mt-2 text-sm text-slate-500">En vigueur au {new Date().toLocaleDateString("fr-FR")}</p>

        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed text-sm">
          {/* Éditeur */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">1. Éditeur du site</h2>
            <p>Le présent site web est édité par l'entreprise individuelle :</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li><strong>Nom & Prénom :</strong> Baptiste Saint-Amour Rubens</li>
              <li><strong>Forme juridique :</strong> Entrepreneur Individuel (EI)</li>
              <li><strong>SIREN :</strong> 106 659 550</li>
              <li><strong>SIRET du siège :</strong> 106 659 550 00011</li>
              <li><strong>Code APE :</strong> 6499Z — Autres activités des services financiers</li>
              <li><strong>Adresse du siège social :</strong> 4 carrer de las nogueres, 66380 Pia, France</li>
              <li><strong>Email de contact :</strong> <a href="mailto:ruebn.66@gmail.com" className="text-indigo-600 underline">ruebn.66@gmail.com</a></li>
              <li><strong>Téléphone :</strong> 06 04 09 02 97</li>
            </ul>
          </section>

          {/* Directeur de publication */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">2. Directeur de la publication</h2>
            <p>Le directeur de la publication et responsable du traitement des données est Monsieur Baptiste Saint-Amour Rubens.</p>
          </section>

          {/* Hébergeur */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">3. Hébergement du site</h2>
            <p>Le site est hébergé par la société Vercel Inc. :</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li><strong>Hébergeur :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
              <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">vercel.com</a></li>
            </ul>
          </section>

          {/* Propriété intellectuelle */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, visuels, logos, vidéos, structure) est protégé par le droit d'auteur. Toute reproduction ou représentation, totale ou partielle, sans l'autorisation expresse de Baptiste Rubens est interdite.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}