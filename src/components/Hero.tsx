"use client"; // Nécessaire pour l'optimisation des images si export statique, sinon optionnel

import Link from "next/link";
import Image from "next/image"; // Ne pas oublier cet import
import { ArrowRight, Star, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-50 flex items-center min-h-[90vh]">
      {/* Motif d'arrière-plan subtil (optionnel, maintenu pour la structure) */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="32" height="32">
              <circle cx="1" cy="1" r="1" fill="#4f46e5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* Colonne Gauche : Texte et CTA */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-last lg:order-first">
            
            {/* Badge Preuve Sociale Rapide (Adapté) */}
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-6 transition-all hover:bg-indigo-100">
              <TrendingUp className="h-4 w-4 text-indigo-600" />
              <span>Plus de 5M€ de CA générés pour nos clients</span>
            </div>

            {/* Titre Principal (H1) - AXÉ CLIENTS & CA */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl leading-tight">
              Transformez votre expertise en <span className="text-indigo-600">Flux Constant</span> de clients idéaux.
            </h1>

            {/* Sous-titre - AXÉ RÉSULTATS */}
            <p className="mt-6 max-w-2xl text-lg text-slate-700 sm:text-xl">
              Un coaching pragmatique et humain pour maîtriser la vente stratégique, augmenter votre panier moyen et signer des clients sans forcer. Pas de 'hacks', juste une méthode éprouvée.
            </p>

            {/* Boutons d'Action - PLUS AGRESSIFS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-indigo-700 hover:shadow-indigo-200"
              >
                Décoller mon activité
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#temoignages"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("temoignages");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    // Nettoie l'URL sans recharger la page
                    window.history.replaceState(null, "", window.location.pathname);
                  }
                }}
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 transition hover:bg-slate-50"
              >
                Voir les résultats clients
              </Link>
            </div>

            {/* Petite ligne de rassurance - MAINTENUE */}
            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>Coachings certifiés. Garantie de satisfaction.</span>
            </div>
          </div>

          {/* Colonne Droite : Visuel (L'Image) - HUMANISÉE ET PROFESSIONNELLE */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[4/3] w-full rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-slate-200/50 overflow-hidden">
                {/* L'Image de coaching humano-tech */}
                <Image 
                    src="/banner.png" // Assure-toi que le fichier est dans /public
                    alt="Session de coaching business axée sur l'acquisition de clients entre un expert et sa cliente"
                    fill
                    className="object-cover rounded-xl"
                    priority // Charge cette image en premier (LCP)
                    sizes="(max-width: 768px) 100vw, 50vw" // Optimisation responsive
                />
                
                {/* Overlay décoratif subtil pour l'intégration des couleurs */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent rounded-xl"></div>
            </div>
            
            {/* Petit élément décoratif flottant (optionnel) */}
            <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-xl border border-slate-100 hidden sm:block">
                <Star className="h-6 w-6 text-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}