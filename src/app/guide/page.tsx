import Link from "next/link";
import { GuideForm } from "@/components/GuideForm";
import { 
  CheckCircle2, 
  FileText, 
  Sparkles, 
  Clock, 
  BookOpen, 
  PhoneCall, 
  ArrowRight 
} from "lucide-react";

export const metadata = {
  title: "Guide Gratuit de Prospection B2B | Baptiste Rubens",
  description: "Téléchargez le guide gratuit : le système pas à pas pour trouver vos 3 prochains clients B2B sans forcer.",
};

const guideContent = [
  {
    title: "La méthode d'approche LinkedIn non-intrusive",
    description: "Comment entamer la discussion avec des décideurs sans passer pour un vendeur agressif.",
  },
  {
    title: "5 Trame & Scripts e-mails à fort taux de réponse",
    description: "Des modèles prêts à copier-coller qui obtiennent jusqu'à 35% de retours qualifiés.",
  },
  {
    title: "La grille d'évaluation pour fixer son TJM / Tarif",
    description: "Calculer son tarif juste pour arrêter de brader ses prestations auprès de ses prospects.",
  },
  {
    title: "La routine quotidienne de 30 minutes",
    description: "Un plan d'action simple et réaliste à appliquer chaque jour pour maintenir un flux constant d'opportunités.",
  },
];

export default function GuideGratuitPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- HERO / CONTENU DU GUIDE --- */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 mb-6">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span>Ressource Offerte</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Le Guide Gratuit de <span className="text-indigo-600 font-black">Prospection B2B</span>
            </h1>

            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              Le plan d'action condensé pour structurer votre prospection, rédiger des messages percutants et générer des rendez-vous qualifiés de manière prédictible.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-600" />
                <span>Ebook PDF — 18 Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-indigo-600" />
                <span>Lecture rapide : 12 min</span>
              </div>
            </div>

            <hr className="my-8 border-slate-200" />

            {/* SOMMAIRE DU GUIDE */}
            <h2 className="text-lg font-bold text-slate-950 mb-4">Ce que vous allez découvrir dans ce guide :</h2>
            <ul className="space-y-4">
              {guideContent.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-950 text-sm">{item.title} : </strong>
                    <span className="text-slate-600 text-sm">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE FORMULAIRE */}
          <div className="lg:col-span-5">
            <GuideForm />
          </div>

        </div>

        {/* --- BANNIÈRE D'APPEL DIRECT --- */}
        <div className="mt-20 rounded-3xl bg-indigo-600 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Vous préférez échanger de vive voix ?</h2>
            <p className="mt-3 text-indigo-100 text-sm sm:text-base leading-relaxed">
              Discutez directement de vos enjeux de prospection lors d'un appel direct de 15 minutes avec Baptiste Rubens.
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