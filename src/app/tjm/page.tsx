import { TjmCalculator } from "@/components/TjmCalculator";
import Link from "next/link";
import { PhoneCall, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Calculateur de TJM / Tarif Freelance Gratuit | Baptiste Rubens",
  description: "Calculez gratuitement votre Tarif Journalier Moyen (TJM) idéal en fonction de vos objectifs de revenu, charges et congés.",
};

export default function CalculateurPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* EN-TÊTE */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="text-base font-semibold text-indigo-600">Outil Interactif Gratuit</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Calculateur de TJM Freelance
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Définissez le tarif journalier exact à facturer pour atteindre vos objectifs de rémunération nette sans oublier vos charges ni vos congés.
          </p>
        </div>

        {/* INTEGRATION DU CALCULATEUR */}
        <TjmCalculator />

        {/* BANNIÈRE CONSEIL */}
        <div className="mt-20 rounded-3xl bg-indigo-600 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Besoin d'aide pour vendre ce TJM à vos clients ?</h2>
            <p className="mt-3 text-indigo-100 text-sm sm:text-base leading-relaxed">
              Fixer le bon prix ne suffit pas : il faut savoir défendre sa valeur. Discutons-en lors d'un appel téléphonique rapide de 15 minutes.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex-none inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-600 shadow-md transition hover:bg-indigo-50"
          >
            <PhoneCall className="h-4 w-4" />
            Prendre rendez-vous (06 04 09 02 97)
          </Link>
        </div>

      </div>
    </div>
  );
}