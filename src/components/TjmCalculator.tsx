"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, ShieldCheck, PhoneCall, Info } from "lucide-react";

export function TjmCalculator() {
  // États des paramètres
  const [targetNet, setTargetNet] = useState<number>(3500); // Objectif net mensuel
  const [socialStatus, setSocialStatus] = useState<string>("auto"); // Status fiscal (auto / sas)
  const [paidDaysOff, setPaidDaysOff] = useState<number>(25); // Jours de congés / an
  const [workingDaysWeek, setWorkingDaysWeek] = useState<number>(4); // Jours facturables / semaine
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(300); // Frais pro mensuels

  // Calculs logiques
  // 1. Taux de charges estimé (Auto-entrepreneur ~25%, SASU/EURL ~45%)
  const chargeRate = socialStatus === "auto" ? 0.25 : 0.45;

  // 2. Chiffre d'Affaires Brut Mensuel nécessaire
  const grossNeededMonthly = (targetNet + monthlyExpenses) / (1 - chargeRate);

  // 3. Nombre de jours facturables par an
  // 52 semaines - (5 semaines de congés + fériés) = ~45 semaines de travail * jours facturables/semaine
  const weeksWorked = Math.max(1, (365 - paidDaysOff - 10 - 104) / 5);
  const billableDaysPerYear = weeksWorked * workingDaysWeek;
  const billableDaysPerMonth = billableDaysPerYear / 12;

  // 4. Calcul du TJM recommandé
  const calculatedTjm = Math.round(grossNeededMonthly / Math.max(1, billableDaysPerMonth));

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
      
      {/* FORMULAIRE DES PARAMÈTRES (COLONNE GAUCHE) */}
      <div className="lg:col-span-7 rounded-3xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200 space-y-6">
        <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
          <Calculator className="h-5 w-5" />
          <span>Ajustez vos critères</span>
        </div>

        {/* Objectif Net Mensuel */}
        <div>
          <label htmlFor="targetNet" className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
            Revenu Net Mensuel Souhaité (€)
          </label>
          <div className="mt-2 flex items-center gap-4">
            <input
              type="range"
              id="targetNet"
              min="1500"
              max="10000"
              step="100"
              value={targetNet}
              onChange={(e) => setTargetNet(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <span className="text-xl font-extrabold text-slate-950 min-w-[90px] text-right">
              {targetNet.toLocaleString()} €
            </span>
          </div>
        </div>

        {/* Statut Juridique */}
        <div>
          <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
            Statut Juridique
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSocialStatus("auto")}
              className={`py-2.5 px-4 rounded-xl text-xs font-bold transition border ${
                socialStatus === "auto"
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              Micro-entreprise (~25% charges)
            </button>
            <button
              type="button"
              onClick={() => setSocialStatus("sasu")}
              className={`py-2.5 px-4 rounded-xl text-xs font-bold transition border ${
                socialStatus === "sasu"
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              EI / EURL / SASU (~45% charges)
            </button>
          </div>
        </div>

        {/* Jours facturables par semaine */}
        <div>
          <label htmlFor="workingDaysWeek" className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
            Jours Facturés par Semaine (Proprospection / Admin déduits)
          </label>
          <div className="mt-2 flex items-center gap-4">
            <input
              type="range"
              id="workingDaysWeek"
              min="1"
              max="5"
              step="0.5"
              value={workingDaysWeek}
              onChange={(e) => setWorkingDaysWeek(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <span className="text-xl font-extrabold text-slate-950 min-w-[90px] text-right">
              {workingDaysWeek} j/sem
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            *Un freelance consacre en moyenne 1 à 2 jours par semaine à sa prospection et son administration.
          </p>
        </div>

        {/* Congés payés par an */}
        <div>
          <label htmlFor="paidDaysOff" className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
            Congés & Vacances (Jours / an)
          </label>
          <div className="mt-2 flex items-center gap-4">
            <input
              type="range"
              id="paidDaysOff"
              min="10"
              max="60"
              step="5"
              value={paidDaysOff}
              onChange={(e) => setPaidDaysOff(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <span className="text-xl font-extrabold text-slate-950 min-w-[90px] text-right">
              {paidDaysOff} jours
            </span>
          </div>
        </div>

        {/* Frais professionnels mensuels */}
        <div>
          <label htmlFor="monthlyExpenses" className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
            Frais Professionnels Mensuels (Abonnements, Logiciels...)
          </label>
          <div className="mt-2 flex items-center gap-4">
            <input
              type="range"
              id="monthlyExpenses"
              min="0"
              max="1500"
              step="50"
              value={monthlyExpenses}
              onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <span className="text-xl font-extrabold text-slate-950 min-w-[90px] text-right">
              {monthlyExpenses} €
            </span>
          </div>
        </div>
      </div>

      {/* RÉSULTAT DU CALCUL (COLONNE DROITE) */}
      <div className="lg:col-span-5 rounded-3xl bg-slate-900 p-8 text-white shadow-xl flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            Résultat Estimé
          </span>

          <h3 className="mt-2 text-2xl font-extrabold">Votre TJM Recommandé</h3>

          {/* Affichage du TJM */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-800/80 border border-slate-700 text-center">
            <p className="text-5xl font-black text-indigo-400">
              {calculatedTjm} € <span className="text-sm font-semibold text-slate-300">/ jour HT</span>
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Pour viser un CA mensuel brut de <strong>{Math.round(grossNeededMonthly).toLocaleString()} €</strong>
            </p>
          </div>

          <ul className="mt-6 space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-6">
            <li className="flex justify-between">
              <span>Jours facturés / mois (estimé) :</span>
              <strong className="text-white">{Math.round(billableDaysPerMonth)} jours</strong>
            </li>
            <li className="flex justify-between">
              <span>Charges sociales & fiscales est. :</span>
              <strong className="text-white">{Math.round(grossNeededMonthly * chargeRate).toLocaleString()} €/mois</strong>
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
          <p className="text-xs text-slate-300">
            Ce TJM théorique vous semble trop élevé pour vos prospects actuels ? Il est temps de restructurer votre offre.
          </p>

          <Link
            href="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-indigo-500"
          >
            <PhoneCall className="h-4 w-4" />
            Optimiser mes tarifs avec Baptiste
          </Link>
        </div>
      </div>

    </div>
  );
}