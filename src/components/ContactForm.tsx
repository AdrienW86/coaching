"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export function ContactForm() {
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
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi.");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Impossible d'envoyer votre demande. Veuillez réessayer ou appeler directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
      
      {/* Colonne 1 : Appeler directement & Infos */}
      <div className="flex flex-col justify-between rounded-3xl bg-indigo-600 p-8 text-white shadow-xl">
        <div>
          <h2 className="text-2xl font-bold">Appel direct</h2>
          <p className="mt-2 text-indigo-100 text-sm">
            Vous souhaitez savoir si mon accompagnement est adapté à votre activité ? Appelez-moi directement.
          </p>

          <a
            href="tel:+33604090297"
            className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-lg font-bold text-indigo-600 shadow-md transition hover:bg-indigo-50"
          >
            <Phone className="h-6 w-6 animate-pulse" />
            <span>06 04 09 02 97</span>
          </a>

          <div className="mt-10 space-y-4 text-sm text-indigo-100">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-indigo-200 flex-shrink-0" />
              <span>Disponible du Lundi au Vendredi (9h - 18h)</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-indigo-200 flex-shrink-0" />
              <a href="mailto:ruebn.66@gmail.com" className="hover:underline">
                ruebn.66@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-indigo-200 flex-shrink-0" />
              <span>66380 Pia, France</span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-indigo-500/50 pt-6 flex items-center gap-2 text-xs text-indigo-200">
          <ShieldCheck className="h-4 w-4 flex-shrink-0" />
          <span>Entrepreneur Individuel — SIREN 106 659 550</span>
        </div>
      </div>

      {/* Colonne 2 : Formulaire de rappel */}
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 flex flex-col justify-center">
        {!submitted ? (
          <>
            <h2 className="text-xl font-bold text-slate-950">Être rappelé(e)</h2>
            <p className="mt-1 text-sm text-slate-600">
              Laissez vos coordonnées et je vous rappelle sous 24h ouvrées.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-700">
                  Nom & Prénom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Jean Dupont"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="06 12 34 56 78"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700">
                  Votre activité / Besoin (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Ex: Je suis consultant et je cherche à trouver mes 3 prochains clients..."
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
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <span>Demander un rappel gratuit</span>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">Demande envoyée !</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Merci. Votre demande a bien été transmise à Baptiste. Vous serez recontacté(e) très rapidement sous 24h ouvrées.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs font-semibold text-indigo-600 hover:underline"
            >
              Envoyer une autre demande
            </button>
          </div>
        )}
      </div>

    </div>
  );
}