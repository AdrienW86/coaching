"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star, Quote, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Données des services avec les routes de redirection
const coachingServices = [
  {
    title: "Coaching 1-to-1 Accéléré",
    description: "4 sessions intensives pour auditer ta stratégie et doubler tes prises de rendez-vous.",
    icon: CheckCircle2,
    price: "990€",
    href: "/accelere",
  },
  {
    title: "Programme Mastermind",
    description: "6 mois d'accompagnement en groupe (6 pers max) pour structurer ton offre et automatiser ton acquisition.",
    icon: CheckCircle2,
    price: "2490€",
    href: "/mastermind",
  },
  {
    title: "Formation Autonome : 'Signature'",
    description: "Accès à vie à la méthode complète en vidéo pour trouver tes 10 premiers clients.",
    icon: CheckCircle2,
    price: "490€",
    href: "/signature",
  },
];

// Données des témoignages
const testimonials = [
  {
    quote: "J'ai signé mon plus gros client (3500€) après seulement 3 sessions de coaching. La méthode est d'une clarté incroyable.",
    name: "Sarah L.",
    role: "Consultante Marketing",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4",
    rating: 5,
  },
  {
    quote: "Grâce au Mastermind, j'ai automatisé mon acquisition. Je passe de 2 à 8 rendez-vous qualifiés par semaine sans forcer.",
    name: "Thomas R.",
    role: "Développeur Freelance",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas&backgroundColor=c0aedd",
    rating: 5,
  },
];

export function FeaturesAndTestimonials() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* --- SECTION 1 : LA GRILLE DE SERVICES --- */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-semibold leading-7 text-indigo-600">Conçu pour vos résultats</span>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Du coaching pragmatique, pas de la théorie.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Choisissez le format qui correspond à votre stade de développement actuel. Chaque offre est focalisée sur une seule chose : votre acquisition de clients.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {coachingServices.map((service, index) => (
            <Card key={index} className="flex flex-col justify-between border-slate-200 transition-all hover:border-indigo-100 hover:shadow-lg">
              <CardHeader className="flex-row items-start gap-4 space-y-0 p-6 pb-4">
                <service.icon className="h-8 w-8 text-indigo-600 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <CardTitle className="text-xl font-bold text-slate-950">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 mt-1">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <span className="text-3xl font-extrabold text-slate-950">{service.price}</span>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* --- SECTION 2 : LES TÉMOIGNAGES (ANCRE PROPRE SANS # DANS L'URL) --- */}
        <div id="temoignages" className="mx-auto mt-32 max-w-2xl text-center lg:mx-0 lg:text-left scroll-mt-24">
          <span className="text-base font-semibold leading-7 text-indigo-600">La parole à nos clients</span>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Ils ont transformé leur activité.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative p-8 border-none bg-white shadow-xl shadow-slate-100/50">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-slate-100" />
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xl leading-relaxed text-slate-800 font-medium italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full bg-slate-100 border border-slate-200"
                    unoptimized
                  />
                  <div>
                    <p className="text-base font-semibold text-slate-950">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}