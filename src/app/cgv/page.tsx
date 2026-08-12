export const metadata = {
  title: "Conditions Générales de Vente | Baptiste Rubens",
  description: "Conditions générales de vente et d'accompagnement de Baptiste Rubens.",
};

export default function CGVPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">Conditions Générales de Services (CGV)</h1>
        <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : août 2026</p>

        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed text-sm">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">1. Objet & Champ d'application</h2>
            <p>
              Les présentes Conditions Générales régissent les prestations de conseil, de coaching et d'accompagnement en acquisition client proposées par Baptiste Rubens (Entrepreneur Individuel, SIREN 106 659 550).
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">2. Modalités de commande & Paiement</h2>
            <p>
              Aucune transaction financière n'est effectuée directement sur ce site internet. Toute prestation fait l'objet d'un échange préalable (téléphonique ou visio) suivi de l'émission d'un devis ou d'une convention détaillée transmise au client.
            </p>
            <p className="mt-2">
              Le paiement des prestations s'effectue par virement bancaire aux coordonnées indiquées sur les factures émises par l'entreprise.
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">3. Droit de rétractation</h2>
            <p>
              Conformément à l'article L.221-18 du Code de la consommation, les clients consommateurs disposent d'un délai de 14 jours à compter de la signature de la convention d'accompagnement pour exercer leur droit de rétractation. Pour les contrats conclus entre professionnels (B2B), les règles relatives au droit de rétractation s'appliquent selon les dispositions légales en vigueur.
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">4. Contact & Réclamations</h2>
            <p>
              Pour toute question ou réclamation concernant un accompagnement, vous pouvez contacter Baptiste Rubens par email à <a href="mailto:ruebn.66@gmail.com" className="text-indigo-600 underline">ruebn.66@gmail.com</a> ou par téléphone au 06 04 09 02 97.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}