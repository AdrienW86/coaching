export const metadata = {
  title: "Politique de Confidentialité | Baptiste Rubens",
  description: "Politique de protection des données personnelles de l'entreprise Baptiste Rubens.",
};

export default function ConfidentialitePage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">Politique de Confidentialité</h1>
        <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : août 2026</p>

        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed text-sm">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">1. Responsable du traitement</h2>
            <p>
              Les données personnelles collectées sur ce site sont traitées par Monsieur Baptiste Saint-Amour Rubens, Entrepreneur Individuel (SIREN 106 659 550), domicilié à Pia (66380).
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">2. Données collectées et finalités</h2>
            <p>Nous collectons uniquement les données indispensables à la relation commerciale :</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li><strong>Formulaire de contact / rappel :</strong> nom, prénom, numéro de téléphone, adresse email et description du besoin pour vous recontacter.</li>
              <li><strong>Inscription à la newsletter :</strong> adresse email (si vous avez consenti à recevoir des conseils par e-mail).</li>
            </ul>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">3. Durée de conservation</h2>
            <p>
              Vos données sont conservées pour une durée maximale de 3 ans à compter de notre dernier contact, sauf obligations légales imposant une durée plus longue (ex : facturation).
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">4. Vos droits (RGPD)</h2>
            <p>
              Conformément à la réglementation européenne sur la protection des données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d’opposition sur vos données.
            </p>
            <p className="mt-2">
              Pour exercer vos droits, envoyez simplement un email à <a href="mailto:ruebn.66@gmail.com" className="text-indigo-600 underline">ruebn.66@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}