import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Sparkles, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "À Propos | Baptiste Rubens",
  description: "Découvrez le parcours de Baptiste Rubens, spécialisé dans la création et la vente de produits digitaux et le coaching d'acquisition.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- HERO / PRÉSENTATION --- */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-6">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span>Fondateur & Formateur</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Moi c’est <span className="text-indigo-600">Baptiste Rubens</span>.
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Passionné par l'économie des créateurs et l'efficacité commerciale, j'aide les indépendants et les entrepreneurs à transformer leurs compétences en **produits digitaux rentables** et à bâtir un système d'acquisition de clients prédictible.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-600">
              <MapPin className="h-4 w-4 text-indigo-600" />
              <span>Basé à Pia (Pyrénées-Orientales, France)</span>
            </div>

            <div className="mt-10 flex gap-4">
              <Link
                href="/formations"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
              >
                Découvrir mes programmes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Photo ou visuel de profil */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
              {/* Remplace l'image par la vraie photo de Baptiste dans /public/baptiste.jpg */}
              <Image
                src="/about2.png" 
                alt="Baptiste Rubens - Fondateur"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* --- MA MISSION & MÉTHODE --- */}
        <div className="mt-24 sm:mt-32">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Vision & Philosophie</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Des formats prêts à l'emploi, orientés 100% action.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Pas de théories abstraites. Tout ce que je propose est pensé pour être appliqué immédiatement dans ton activité.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              
              <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <dt className="flex items-center gap-x-3 text-base font-bold text-slate-950">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                  Ebooks & Guides Pratiques
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    Des condensés de méthodes pas à pas pour maîtriser un sujet précis sans perdre de temps.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <dt className="flex items-center gap-x-3 text-base font-bold text-slate-950">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                  Templates & Scripts
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    Des trames de prospection, modèles de vente et structures prêtes à copier-coller et adapter.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <dt className="flex items-center gap-x-3 text-base font-bold text-slate-950">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                  Accompagnement & Vidéos
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">
                    Des modules vidéo immersifs et du coaching pour lever tes blocages et accélérer tes résultats.
                  </p>
                </dd>
              </div>

            </dl>
          </div>
        </div>

        {/* --- CARTE TRANSPARENCE LÉGALE --- */}
        <div className="mt-24 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                <ShieldCheck className="h-5 w-5" />
                <span>Entreprise enregistrée en France</span>
              </div>
              <h3 className="text-xl font-bold text-slate-950">Informations légales & Transparence</h3>
              <p className="text-sm text-slate-600 max-w-xl">
                Toutes les formations, guides et contenus sont édités dans le cadre légal d'une activité commerciale immatriculée en France.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-xs text-slate-600 space-y-1.5 w-full md:w-auto min-w-[280px]">
              <p><strong className="text-slate-900">Raison sociale :</strong> Baptiste Saint-Amour Rubens</p>
              <p><strong className="text-slate-900">Statut :</strong> Entrepreneur Individuel</p>
              <p><strong className="text-slate-900">SIREN :</strong> 106 659 550</p>
              <p><strong className="text-slate-900">SIRET :</strong> 106 659 550 00011</p>
              <p><strong className="text-slate-900">Siège :</strong> 66380 Pia, France</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}