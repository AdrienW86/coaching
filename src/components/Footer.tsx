"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const navigation = {
  offres: [
    { name: "Coaching 1-to-1 Accéléré", href: "accelere" },
    { name: "Programme Mastermind", href: "mastermind" },
    { name: "Formation Autonome 'Signature'", href: "signature" },
    { name: "Études de cas & Résultats", href: "etudes" },
  ],
  ressources: [
    { name: "Blog & Conseils", href: "blog" },
    { name: "Guide gratuit de prospection", href: "guide" },
    { name: "FAQ", href: "faq" },
    { name: "Calculateur de TJM / Tarif", href: "tjm" },
  ],
  legales: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
    { name: "Conditions générales de vente (CGV)", href: "/cgv" },
    { name: "Gestion des cookies", href: "/cookies" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'inscription.");
      }

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Impossible de valider l'inscription pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-8 lg:pt-20">
        
        {/* Section Supérieure : Grid principal */}
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-8">
          
          {/* Colonne 1 : Branding + Newsletter */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">
                LOGO
              </div>
              <span className="text-xl font-bold text-white">Baptiste Rubens</span>
            </Link>

            <p className="max-w-md text-sm text-slate-400">
              Le programme de coaching référence pour transformer votre expertise en flux constant de clients qualifiés.
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-sm font-semibold text-white">Rejoignez la newsletter gratuite</p>
              <p className="mt-1 text-xs text-slate-400">1 conseil concret par semaine pour booster vos ventes.</p>
              
              {!submitted ? (
                <form className="mt-3 flex max-w-md flex-col gap-2" onSubmit={handleNewsletterSubmit}>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full rounded-lg bg-slate-800 px-3.5 py-2 text-sm text-white placeholder-slate-500 border border-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-none rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition flex items-center gap-1 disabled:opacity-50"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <span>S'inscrire</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {error && (
                    <div className="flex items-center gap-1.5 text-xs text-rose-400">
                      <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}
                </form>
              ) : (
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-950/50 border border-emerald-800 p-3 text-xs text-emerald-400">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Merci ! Ton inscription à la newsletter a bien été prise en compte.</span>
                </div>
              )}
            </div>
          </div>

          {/* Colonnes 2, 3 & 4 : Liens de navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-white">Nos Offres</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {navigation.offres.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Ressources</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {navigation.ressources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-white">Légal</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {navigation.legales.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Section Inférieure : Copyright uniquement */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Baptiste Rubens. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
}