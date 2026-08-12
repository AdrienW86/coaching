"use client";

import { useState } from "react";
import { Download, CheckCircle2, ShieldCheck, PhoneCall, Loader2, AlertCircle } from "lucide-react";

export function GuideForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    try {
      const response = await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi.");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Impossible d'envoyer le guide pour le moment. Veuillez réessayer ou contacter directement Baptiste.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
      {!submitted ? (
        <>
          <div className="flex items-center gap-2 text-indigo-600 text-sm font-semibold mb-2">
            <Download className="h-4 w-4" />
            <span>Format PDF — Téléchargement Gratuit</span>
          </div>
          
          <h2 className="text-2xl font-bold text-slate-950">
            Recevoir le guide immédiatement
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Remplis tes coordonnées pour recevoir le plan d'action pas à pas par e-mail.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700">
                Prénom & Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Ex: Thomas Dupuis"
                className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                Adresse e-mail professionnelle
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="thomas@entreprise.fr"
                className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-xs text-rose-600 bg-rose-50 p-3 rounded-xl">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-indigo-500 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>Obtenir mon guide PDF gratuit</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 border-t border-slate-100 pt-4 flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-600 flex-shrink-0" />
            <span>Garanti 0 spam. Vos données ne sont jamais revendues.</span>
          </div>
        </>
      ) : (
        <div className="py-8 text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-950">Guide en cours d'envoi !</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Un e-mail contenant le lien vers votre guide a été envoyé à votre adresse. Si vous ne le voyez pas d'ici 2 minutes, pensez à vérifier vos spams.
          </p>
          <div className="pt-4 border-t border-slate-100">
            <p className="text-xs text-slate-500 mb-3">Besoin d'aide ou d'un conseil immédiat ?</p>
            <a
              href="tel:+33604090297"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline"
            >
              <PhoneCall className="h-4 w-4" />
              Appeler Baptiste Rubens (06 04 09 02 97)
            </a>
          </div>
        </div>
      )}
    </div>
  );
}