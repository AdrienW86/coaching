export const metadata = {
  title: "Gestion des Cookies | Baptiste Rubens",
  description: "Information sur l'utilisation des cookies et traceurs sur le site de Baptiste Rubens.",
};

export default function CookiesPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">Gestion des Cookies</h1>
        <p className="mt-2 text-sm text-slate-500">Dernière mise à jour : août 2026</p>

        <div className="mt-8 space-y-8 text-slate-700 leading-relaxed text-sm">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">1. Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou smartphone) lors de la visite d'un site web.
            </p>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">2. Cookies utilisés sur ce site</h2>
            <p>
              Afin de respecter au mieux votre vie privée, ce site privilégie une approche sobre et sans traçage publicitaire intrusif :
            </p>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              <li><strong>Cookies strictement nécessaires :</strong> indispensables au fonctionnement technique du site (navigation, sécurité, affichage des formulaires).</li>
              <li><strong>Pas de cookies publicitaires tiers :</strong> nous ne vendons ni ne partageons vos données à des réseaux d'annonceurs.</li>
            </ul>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-slate-950 mb-3">3. Comment désactiver les cookies ?</h2>
            <p>
              Vous pouvez à tout moment configurer votre navigateur pour bloquer ou supprimer les cookies :
            </p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li><strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
              <li><strong>Mozilla Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies</li>
              <li><strong>Safari :</strong> Préférences &gt; Confidentialité</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}