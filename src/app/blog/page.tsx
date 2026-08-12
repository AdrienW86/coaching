import Link from "next/link";
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  Tag, 
  Search 
} from "lucide-react";

export const metadata = {
  title: "Blog & Conseils Acquisition | Baptiste Rubens",
  description: "Guides pratiques, stratégies de prospection B2B et conseils de vente pour indépendants et consultants.",
};

const articles = [
  {
    id: "comment-fixer-son-tjm-freelance",
    title: "Comment fixer son TJM sans brader ses compétences (Méthode 2026)",
    excerpt: "Arrêtez de calculer votre TJM au hasard. Voici la formule mathématique simple pour aligner vos tarifs sur la valeur apportée à vos clients.",
    category: "Tarification",
    readTime: "5 min",
    date: "10 août 2026",
    featured: true,
  },
  {
    id: "5-templates-prospection-linkedin",
    title: "5 templates de messages LinkedIn qui obtiennent plus de 35% de réponse",
    excerpt: "Marre des messages de prospection automatisés et froids ? Découvrez nos 5 trames personnalisées orientées conversation.",
    category: "Prospection",
    readTime: "7 min",
    date: "28 juillet 2026",
    featured: false,
  },
  {
    id: "traiter-objection-c-est-trop-cher",
    title: "Comment répondre à l'objection 'C'est trop cher' en appel de vente",
    excerpt: "La méthode étape par étape pour désamorcer les blocages budgétaires sans accorder de remise ni baisser votre prix.",
    category: "Vente & Closing",
    readTime: "6 min",
    date: "14 juillet 2026",
    featured: false,
  },
  {
    id: "trouver-3-premiers-clients-b2b",
    title: "Le plan d'action sur 14 jours pour signer vos 3 prochains clients B2B",
    excerpt: "Pas besoin de site web complexe ni de budget publicitaire. Voici la routine quotidienne de 30 minutes à appliquer dès aujourd'hui.",
    category: "Stratégie",
    readTime: "8 min",
    date: "02 juin 2026",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-base font-semibold text-indigo-600">Ressources & Stratégies</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Blog & Conseils Pratiques.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Pas de théories abstraites : des méthodes, scripts et analyses d'acquisition applicables immédiatement à votre activité.
          </p>
        </div>

        {/* ARTICLE À LA UNE */}
        {featuredArticle && (
          <div className="mt-12 rounded-3xl bg-slate-900 p-8 sm:p-12 text-white shadow-xl">
            <div className="flex items-center gap-3 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Article à la une</span>
              <span>•</span>
              <span className="text-slate-400">{featuredArticle.category}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-3xl">
              {featuredArticle.title}
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              {featuredArticle.excerpt}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-slate-800 pt-6">
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-indigo-500 w-fit"
              >
                Lire et discuter de ce sujet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        {/* GRILLE DES AUTRES ARTICLES */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-950 mb-8">Derniers articles publiés</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <div 
                key={article.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2.5 py-1 text-indigo-700">
                      <Tag className="h-3 w-3" />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{article.date}</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-500 transition"
                  >
                    Demander conseil
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BANNIÈRE D'APPEL DIRECT */}
        <div className="mt-20 rounded-3xl bg-indigo-600 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Un besoin spécifique pour votre entreprise ?</h2>
            <p className="mt-3 text-indigo-100 text-sm sm:text-base leading-relaxed">
              Plutôt que de lire des dizaines d'articles, faites le point en 15 minutes d'échange direct avec Baptiste Rubens.
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